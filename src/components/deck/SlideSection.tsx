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
  const deck = useDeckOptional();
  const showReference = Boolean(deck?.showReference);
  const refOpacity = deck?.referenceOpacity ?? 0.18;
  const referenceSrc = useMemo(() => deck?.getReferenceSrcForId(id), [deck, id]);
  const [refLoadOk, setRefLoadOk] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
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
        isVisible ? "animate-fade-up" : "opacity-0",
        className
      )}
    >
      <div className="slide-content relative">
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
