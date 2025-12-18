import { useEffect, useRef } from 'react';

/**
 * Isolated hook for navbar show/hide animation on scroll
 * Completely separate from ScrollTrigger to avoid conflicts
 */

declare global {
  interface Window {
    gsap: any;
  }
}

export function useNavbarAnimation(navRef: React.RefObject<HTMLElement>) {
  const showAnimRef = useRef<any>(null);
  const lastScrollY = useRef(0);
  const isScrollingUp = useRef(false);
  const scrollListenerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    console.log('🎯 Navbar Animation Hook: Initializing...');
    if (!navRef.current) {
      console.warn('⚠️ Navbar Animation: navRef.current is null');
      return;
    }
    console.log('✅ Navbar Animation: navRef found', navRef.current);

    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        if (window.gsap) {
          resolve();
          return;
        }

        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        gsapScript.onload = () => resolve();
        document.head.appendChild(gsapScript);
      });
    };

    loadGSAP().then(() => {
      if (!window.gsap) {
        console.error('GSAP failed to load for navbar animation');
        return;
      }

      const nav = navRef.current;
      if (!nav) return;

      // Create animation: from yPercent -100 (hidden) to 0 (visible)
      // Start navbar VISIBLE by default
      window.gsap.set(nav, { yPercent: 0 });
      
      showAnimRef.current = window.gsap.fromTo(nav, 
        { yPercent: -100 }, // Hidden state
        {
          yPercent: 0, // Visible state
          paused: true,
          duration: 0.3,
          ease: "power2.out"
        }
      );
      
      // Set initial state - always start visible at page load
      const initialScrollY = window.scrollY || window.pageYOffset || 0;
      showAnimRef.current.progress(1); // Always start visible
      isScrollingUp.current = true;
      lastScrollY.current = initialScrollY;
      
      console.log('Navbar animation initialized - starting visible');

      // Scroll direction detection - completely isolated
      const updateHeader = () => {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || window.pageYOffset || 0;
          
          // Need at least 5px difference to detect direction (prevents jitter)
          const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
          if (scrollDiff < 5) {
            return; // Too small, ignore
          }
          
          const scrollingUp = currentScrollY < lastScrollY.current;
          
          console.log(`Scroll: ${currentScrollY.toFixed(0)}px, Direction: ${scrollingUp ? 'UP' : 'DOWN'}, Last: ${lastScrollY.current.toFixed(0)}`);
          
          // At top - always show immediately
          if (currentScrollY <= 50) {
            if (showAnimRef.current?.progress() !== 1) {
              showAnimRef.current.progress(1); // Show immediately
              console.log('Navbar: At top - forcing visible');
            }
            isScrollingUp.current = true;
          } else {
            // Past top - ALWAYS respond to scroll direction
            if (scrollingUp) {
              // Scrolling up - ALWAYS show navbar
              if (showAnimRef.current && showAnimRef.current.progress() < 0.99) {
                showAnimRef.current.play();
                console.log('✅ Navbar: SCROLLING UP - SHOWING');
              }
              isScrollingUp.current = true;
            } else {
              // Scrolling down - ALWAYS hide navbar
              if (showAnimRef.current && showAnimRef.current.progress() > 0.01) {
                showAnimRef.current.reverse();
                console.log('❌ Navbar: SCROLLING DOWN - HIDING');
              }
              isScrollingUp.current = false;
            }
          }
          
          lastScrollY.current = currentScrollY;
        });
      };

      // Store listener reference for cleanup
      scrollListenerRef.current = updateHeader;
      
      // Use passive listener - doesn't interfere with other scroll handlers
      window.addEventListener('scroll', updateHeader, { passive: true });

      return () => {
        if (showAnimRef.current) {
          showAnimRef.current.kill();
        }
        if (scrollListenerRef.current) {
          window.removeEventListener('scroll', scrollListenerRef.current);
        }
      };
    });
  }, [navRef]);
}

