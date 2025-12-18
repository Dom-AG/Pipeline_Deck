import { useEffect, useRef, useState } from 'react';
import { theme } from '@/config';
import { rgb } from '@/lib/theme-helpers';

/**
 * GSAP ScrollSmoother Demo Component
 * 
 * Matches the reference design 1:1 but uses theme colors from theme.ts
 * Requires GSAP with ScrollTrigger and ScrollSmoother plugins
 * 
 * Note: ScrollSmoother is a premium GSAP plugin. For production use,
 * you'll need to host it yourself or use a GSAP Club membership.
 */

// Declare GSAP types for TypeScript
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

const DeckScrollDemo = () => {
  const smootherRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Load GSAP scripts if not already loaded
    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
          // Try to load ScrollSmoother if not present
          if (window.ScrollSmoother) {
            resolve();
            return;
          }
        }

        // Load GSAP core
        if (!window.gsap) {
          const gsapScript = document.createElement('script');
          gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
          gsapScript.onload = () => {
            // Load ScrollTrigger
            const stScript = document.createElement('script');
            stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
            stScript.onload = () => {
              // Try to load ScrollSmoother (premium plugin - may not be available)
              // In production, host ScrollSmoother.min.js yourself
              const ssScript = document.createElement('script');
              ssScript.src = 'https://assets.codepen.io/16327/ScrollSmoother.min.js';
              ssScript.onload = () => {
                setGsapLoaded(true);
                resolve();
              };
              ssScript.onerror = () => {
                console.warn('ScrollSmoother not available. Component will work with basic scroll.');
                setGsapLoaded(true);
                resolve();
              };
              document.head.appendChild(ssScript);
            };
            document.head.appendChild(stScript);
          };
          document.head.appendChild(gsapScript);
        } else {
          setGsapLoaded(true);
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

      // Create ScrollSmoother if available
      if (window.ScrollSmoother) {
        window.gsap.registerPlugin(window.ScrollSmoother);
        
        smootherRef.current = window.ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 2,
          effects: true,
          normalizeScroll: true
        });

        // Pin shape when it reaches center
        if (shapeRef.current) {
          window.ScrollTrigger.create({
            trigger: shapeRef.current,
            pin: true,
            start: 'center center',
            end: '+=300'
          });
        }

        // Button click handler
        if (buttonRef.current) {
          const handleClick = () => {
            if (smootherRef.current && shapeRef.current) {
              smootherRef.current.scrollTo(shapeRef.current, true, 'center center');
            } else if (shapeRef.current) {
              // Fallback: smooth scroll without ScrollSmoother
              shapeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          };
          buttonRef.current.addEventListener('click', handleClick);
          
          return () => {
            buttonRef.current?.removeEventListener('click', handleClick);
          };
        }
      } else {
        // Fallback: pin shape with regular ScrollTrigger
        if (shapeRef.current) {
          window.ScrollTrigger.create({
            trigger: shapeRef.current,
            pin: true,
            start: 'center center',
            end: '+=300'
          });
        }
      }
    });

    return () => {
      // Cleanup
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      window.ScrollTrigger?.getAll().forEach((st: any) => st.kill());
    };
  }, []);

  // Get theme colors as RGB strings
  const bgColor = rgb(theme.background);
  const textColor = rgb(theme.foreground);
  const borderColor = rgb(theme.border);
  const accentColor = rgb(theme.accent);
  const primaryColor = rgb(theme.primary);
  const cardColor = rgb(theme.card);
  const mutedColor = rgb(theme.muted);

  // Grid background pattern (matching reference)
  const gridBackground = {
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.07) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
    `,
    backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
  };

  return (
    <div
      id="smooth-wrapper"
      ref={wrapperRef}
      style={{
        backgroundColor: bgColor,
        overscrollBehavior: 'none',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        minHeight: '100vh'
      }}
    >
      <div
        id="smooth-content"
        ref={contentRef}
        style={{
          overflow: 'visible',
          width: '100%',
          height: '4000px',
          ...gridBackground
        }}
      >
        {/* Header */}
        <header
          className="header"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '2.5rem'
          }}
        >
          <h1
            className="heading-l heading-scroll"
            style={{
              marginTop: '2rem',
              color: textColor,
              fontSize: '2rem',
              fontWeight: 'bold'
            }}
          >
            ScrollSmoother
          </h1>
          <button
            ref={buttonRef}
            className="button"
            style={{
              position: 'relative',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: accentColor,
              color: rgb(theme.accentForeground),
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Jump to shape
          </button>
        </header>

        {/* Box A - Pink gradient equivalent using theme colors */}
        <div
          className="box box-a gradient-pink"
          data-speed="clamp(0.5)"
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '400px',
            zIndex: 100,
            lineHeight: '100px',
            textAlign: 'center',
            willChange: 'transform',
            background: `linear-gradient(135deg, ${rgb(theme.chart.support)} 0%, ${rgb(theme.destructive)} 100%)`,
            color: rgb(theme.foreground),
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            boxShadow: `0 4px 15px rgba(${theme.chart.support[0]}, ${theme.chart.support[1]}, ${theme.chart.support[2]}, 0.3)`
          }}
        >
          a
        </div>

        {/* Box B - Purple gradient equivalent using theme colors */}
        <div
          className="box box-b gradient-purple"
          data-speed="clamp(0.8)"
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '900px',
            zIndex: 100,
            lineHeight: '100px',
            textAlign: 'center',
            willChange: 'transform',
            background: `linear-gradient(135deg, ${rgb(theme.chart.maintenance)} 0%, ${rgb(theme.accent)} 100%)`,
            color: rgb(theme.foreground),
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            boxShadow: `0 4px 15px rgba(${theme.chart.maintenance[0]}, ${theme.chart.maintenance[1]}, ${theme.chart.maintenance[2]}, 0.3)`
          }}
        >
          b
        </div>

        {/* Shape Image */}
        <img
          ref={shapeRef}
          className="shape"
          data-speed="1.5"
          src="https://assets.codepen.io/16327/2D-keyframe-2.png"
          alt=""
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '1300px',
            willChange: 'transform',
            zIndex: 100
          }}
        />

        {/* Line */}
        <div
          className="line"
          style={{
            visibility: 'hidden',
            width: '2px',
            height: '4000px',
            position: 'absolute',
            left: '400px',
            top: '0px',
            backgroundColor: borderColor
          }}
        />
      </div>
    </div>
  );
};

export default DeckScrollDemo;

