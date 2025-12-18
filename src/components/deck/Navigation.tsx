import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useDeckOptional } from "./DeckProvider";
import { useNavbarAnimation } from "@/hooks/use-navbar-animation";

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
}

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

export function Navigation({ items }: NavigationProps) {
  const deck = useDeckOptional();
  const [activeSectionInternal, setActiveSectionInternal] = useState(items[0]?.id || "");
  const activeSection = deck?.activeSection ?? activeSectionInternal;
  const setActiveSectionFn = typeof deck?.setActiveSection === 'function' 
    ? deck.setActiveSection 
    : setActiveSectionInternal;
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
        }
        if (!best) return;
        const id = best.target.id;
        setActiveSectionFn(id);
        // keep hash in sync without triggering a jump
        try {
          history.replaceState(null, "", `#${id}`);
        } catch {
          // ignore
        }
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items, setActiveSectionFn]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use ScrollSmoother if available, otherwise use standard scroll
      const smoother = (window as any).ScrollSmoother?.get();
      if (smoother) {
        smoother.scrollTo(element, true, "top top");
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToTop = () => {
    const smoother = (window as any).ScrollSmoother?.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const raw = (window.location.hash || "").replace("#", "").trim();
    if (!raw) return;
    if (!items.some((it) => it.id === raw)) return;
    // allow initial layout to settle
    setTimeout(() => {
      scrollToSection(raw);
      setActiveSectionFn(raw);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // Use isolated navbar animation hook
  useNavbarAnimation(navRef);

  return (
    <nav 
      ref={navRef}
      className="main-tool-bar fixed top-0 left-0 right-0 z-50"
      style={{
        height: '80px',
        background: 'rgba(14, 16, 15, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: '#ffffff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        left: 0,
        top: 0,
        transition: 'ease 0.4s',
        willChange: 'transform',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Noise texture overlay - removed for frosted glass effect */}
      <div className="max-w-[1200px] mx-auto px-6 w-full" style={{ position: 'relative', zIndex: 2 }}>
        <div className="flex items-center justify-between gap-8">
          <button
            onClick={scrollToTop}
            className="text-sm font-bold text-white hover:opacity-80 transition-opacity cursor-pointer shrink-0"
            style={{ fontWeight: 700 }}
          >
            Pipeline Blueprint
          </button>
          <div className="flex items-center gap-6">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm whitespace-nowrap relative transition-opacity hover:opacity-80",
                  activeSection === item.id ? "text-[#fdf800] font-bold" : "text-white"
                )}
                style={{ fontWeight: activeSection === item.id ? 700 : 600 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fdf800] -mb-2" 
                    style={{ height: '2px' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
