import { useEffect, useRef } from 'react';

/**
 * Hook to initialize GSAP ScrollSmoother
 * Provides smooth scrolling with parallax effects
 */

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

export function useScrollSmoother() {
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        if (window.gsap && window.ScrollTrigger && window.ScrollSmoother) {
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

    loadGSAP().then(() => {
      if (!window.gsap || !window.ScrollTrigger) {
        console.error('GSAP or ScrollTrigger failed to load');
        return;
      }

      window.gsap.registerPlugin(window.ScrollTrigger);

      if (window.ScrollSmoother) {
        window.gsap.registerPlugin(window.ScrollSmoother);
        
        const wrapper = document.getElementById('smooth-wrapper');
        const content = document.getElementById('smooth-content');
        
        if (wrapper && content) {
          smootherRef.current = window.ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 2,
            effects: true,
            normalizeScroll: true
          });
          console.log('ScrollSmoother initialized');
        }
      }
    });

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, []);

  return smootherRef.current;
}

