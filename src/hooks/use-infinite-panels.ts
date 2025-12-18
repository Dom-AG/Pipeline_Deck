import { useEffect } from 'react';

/**
 * Hook to create overlapping pinned panels effect
 * Sections pin at top, next section slides over from bottom
 * Based on: https://demos.gsap.com/demo/infinite-looped-panels
 * Simplified: No infinite looping, just pinning with overlap
 */

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

export function useInfinitePanels(includeIds: string[] = []) {
  useEffect(() => {
    console.log('🎬 Overlapping Panels: Starting initialization...');
    
    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
          resolve();
          return;
        }

        if (!window.gsap) {
          const gsapScript = document.createElement('script');
          gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
          gsapScript.onload = () => {
            const stScript = document.createElement('script');
            stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
            stScript.onload = () => {
              // Load ScrollSmoother if available
              const smootherScript = document.createElement('script');
              smootherScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollSmoother.min.js';
              smootherScript.onload = () => resolve();
              smootherScript.onerror = () => resolve(); // Continue even if ScrollSmoother fails
              document.head.appendChild(smootherScript);
            };
            document.head.appendChild(stScript);
          };
          document.head.appendChild(gsapScript);
        } else {
          resolve();
        }
      });
    };

    let cleanup: (() => void) | null = null;
    let smoother: any = null;

    loadGSAP().then(() => {
      if (!window.gsap || !window.ScrollTrigger) {
        console.error('❌ GSAP or ScrollTrigger failed to load');
        return;
      }

      console.log('✅ GSAP and ScrollTrigger loaded');
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Initialize ScrollSmoother if available (optional)
      if (window.ScrollSmoother) {
        window.gsap.registerPlugin(window.ScrollSmoother);
        const wrapper = document.getElementById('smooth-wrapper');
        const content = document.getElementById('smooth-content');
        
        if (wrapper && content) {
          smoother = window.ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.5,
            effects: true,
            normalizeScroll: true
          });
          console.log('✅ ScrollSmoother initialized');
        } else {
          console.log('⚠️ ScrollSmoother available but wrapper/content not found - using standard scroll');
        }
      }

      // Wait for DOM to be ready
      const initPanels = () => {
        console.log('🔍 Looking for panels with IDs:', includeIds);
        
        // Find all panel sections
        const panels: HTMLElement[] = [];
        includeIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            section.classList.add('panel');
            panels.push(section);
            console.log(`✅ Found panel: ${id}`);
          } else {
            console.warn(`⚠️ Panel not found: ${id}`);
          }
        });

        if (panels.length === 0) {
          console.log('⏳ No panels found yet, retrying...');
          setTimeout(initPanels, 100);
          return;
        }

        console.log(`📊 Total panels found: ${panels.length}`);

        // Set z-index for proper layering (later panels on top)
        // First panel = lowest z-index, last panel = highest z-index
        panels.forEach((panel, i) => {
          window.gsap.set(panel, { 
            zIndex: i + 1 // First panel = 1, second = 2, etc. (later panels on top)
          });
        });

        // Create ScrollTrigger for each panel - SIMPLE PINNING WITH OVERLAP
        // Key: pinSpacing: false allows sections to overlap
        const scrollTriggers: any[] = [];
        panels.forEach((panel, i) => {
          const st = window.ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false, // CRITICAL: No spacing = sections overlap
            // No end value = pin continues until next panel takes over
          });
          scrollTriggers.push(st);
          console.log(`📌 Pinned panel ${i}: ${panel.id} (z-index: ${i + 1})`);
        });

        // Refresh ScrollTrigger after setup
        window.ScrollTrigger.refresh();
        console.log('✅ Overlapping panels effect initialized!');

        // Store cleanup function
        cleanup = () => {
          console.log('🧹 Cleaning up overlapping panels');
          scrollTriggers.forEach(st => st.kill());
          if (smoother) {
            smoother.kill();
          }
        };
      };

      // Wait for React to fully render
      setTimeout(initPanels, 500);
    });

    // Cleanup function
    return () => {
      console.log('🛑 Unmounting overlapping panels hook');
      if (cleanup) {
        cleanup();
      }
    };
  }, [includeIds]);
}

