import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useDeckOptional } from "./DeckProvider";

interface SlideSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SlideSection({ id, children, className }: SlideSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const deck = useDeckOptional();
  const showReference = Boolean(deck?.showReference);
  const refOpacity = deck?.referenceOpacity ?? 0.18;
  const referenceSrc = useMemo(() => deck?.getReferenceSrcForId(id), [deck, id]);
  const [refLoadOk, setRefLoadOk] = useState(true);

  useEffect(() => {
    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let snapTimeout: NodeJS.Timeout | null = null;
    let isScrolling = false;
    let lastScrollTime = 0;
    let rafId: number | null = null;
    let hasAnimated = false; // Track if animation has already played for this entry
    let snapScrollY = 0; // Track scroll position for snap direction detection
    let isFullyVisible = false; // Track if section is fully visible and centered

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!ref.current) return;

        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const visibleHeight = entry.intersectionRect.height;
        const sectionHeight = rect.height;
        
        // Check if section is fully visible and reasonably centered (not at edges)
        const distanceFromTop = rect.top;
        const distanceFromBottom = viewportHeight - rect.bottom;
        const isCentered = distanceFromTop > 100 && distanceFromBottom > 100;
        const isMostlyVisible = visibleHeight >= sectionHeight * 0.8;
        
        const fullyVisible = entry.isIntersecting && isMostlyVisible && isCentered;
        setIsFullyVisible(fullyVisible);
        
        // If section is fully visible and centered, keep it static (no animation changes)
        if (fullyVisible) {
          // Keep current state, don't trigger animations
          if (!isVisible) {
            setIsVisible(true);
          }
          return;
        }
        
        // Trigger animation when section FIRST enters viewport (at least 50px visible)
        // Reset hasAnimated when section fully leaves viewport
        if (!entry.isIntersecting) {
          setIsVisible(false);
          hasAnimated = false; // Reset so animation can play again when scrolling back
          return;
        }

        // Trigger animation when scrolling INTO section (first time it becomes visible)
        // Only if not already fully visible to prevent flicker
        if (entry.isIntersecting && visibleHeight >= 50 && !hasAnimated && !isFullyVisible) {
          setIsVisible(true);
          hasAnimated = true; // Mark as animated so it doesn't replay while in viewport
          // Increment key to force animation replay
          setAnimationKey(prev => prev + 1);
        }
      },
      { 
        threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.5, 0.7, 0.9], // More thresholds to detect state changes
        rootMargin: '0px' // No margin offset
      }
    );

    // Soft snapping: align section borders with viewport (only when scrolling DOWN)
    const checkSnap = () => {
      if (!ref.current || isScrolling) return;

      // Only snap when scrolling down
      const currentScrollY = window.scrollY || window.pageYOffset;
      const scrollingDown = currentScrollY > snapScrollY;
      if (!scrollingDown) return; // Don't snap when scrolling up

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const distanceFromTop = rect.top;
      const distanceFromBottom = viewportHeight - rect.bottom;
      const sectionHeight = rect.height;

      // Only snap if section is mostly visible
      if (sectionHeight < viewportHeight * 0.3) return;

      // Within 50px of top border - snap section top to viewport top (only when scrolling down)
      if (distanceFromTop > 0 && distanceFromTop <= 50) {
        const targetScroll = window.scrollY + distanceFromTop;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
      // Within 50px of bottom border - snap section bottom to viewport bottom (only when scrolling down)
      else if (distanceFromBottom > 0 && distanceFromBottom <= 50) {
        const targetScroll = window.scrollY + distanceFromTop - (viewportHeight - sectionHeight);
        window.scrollTo({
          top: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }
    };

    // Track scrolling state with requestAnimationFrame for smooth detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      lastScrollTime = Date.now();
      isScrolling = true;

      // Update scroll position for snap direction detection
      snapScrollY = currentScrollY;

      // Cancel any pending snap
      if (snapTimeout) {
        clearTimeout(snapTimeout);
        snapTimeout = null;
      }

      // Use RAF for smooth scroll detection
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        // Check if scrolling has stopped
        const timeSinceLastScroll = Date.now() - lastScrollTime;
        if (timeSinceLastScroll > 200) {
          isScrolling = false;
          // Wait a bit more before snapping (only when scrolling down)
          snapTimeout = setTimeout(() => {
            if (!isScrolling && ref.current) {
              checkSnap();
            }
          }, 100);
        } else {
          // Still scrolling, check again
          rafId = requestAnimationFrame(() => {
            const timeSinceLastScroll = Date.now() - lastScrollTime;
            if (timeSinceLastScroll > 200) {
              isScrolling = false;
              snapTimeout = setTimeout(() => {
                if (!isScrolling && ref.current) {
                  checkSnap();
                }
              }, 100);
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (snapTimeout) {
        clearTimeout(snapTimeout);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    setRefLoadOk(true);
  }, [referenceSrc]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "slide-section",
        className
      )}
    >
      <div 
        key={animationKey} 
        className={cn(
          "slide-content relative",
          // If fully visible and centered, keep static (no animation classes)
          isFullyVisible 
            ? "" // No animation classes when fully visible
            : isVisible 
              ? scrollDirection === 'down' 
                ? "animate-fade-up" 
                : "animate-fade-down"
              : scrollDirection === 'down'
                ? "translate-y-10 opacity-90"
                : "-translate-y-10 opacity-90"
        )}
      >
        {showReference && referenceSrc && refLoadOk && (
          <img
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-contain z-0"
            src={referenceSrc}
            alt={`Reference overlay for ${id}`}
            style={{ opacity: refOpacity }}
            onError={() => setRefLoadOk(false)}
            loading="eager"
            decoding="async"
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  );
}
