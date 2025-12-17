import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";
import { useDeckOptional } from "./DeckProvider";

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  const deck = useDeckOptional();
  const [activeSectionInternal, setActiveSectionInternal] = useState(items[0]?.id || "");
  const activeSection = deck?.activeSection ?? activeSectionInternal;
  const setActiveSection = deck?.setActiveSection ?? setActiveSectionInternal;

  const showReference = Boolean(deck?.showReference);
  const toggleReference = deck?.toggleReference;

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
        setActiveSection(id);
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
  }, [items]);

  const scrollToSection = (id: string, behavior: ScrollBehavior = "smooth") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior, block: "start" });
    }
  };

  useEffect(() => {
    const raw = (window.location.hash || "").replace("#", "").trim();
    if (!raw) return;
    if (!items.some((it) => it.id === raw)) return;
    // allow initial layout to settle
    setTimeout(() => {
      scrollToSection(raw, "auto");
      setActiveSection(raw);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-8 overflow-x-auto">
          <span className="text-sm font-semibold text-primary shrink-0">Pipeline Blueprint</span>
          <div className="flex items-center gap-6">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "nav-link whitespace-nowrap",
                  activeSection === item.id && "nav-link-active"
                )}
              >
                {item.label}
              </button>
            ))}
            {toggleReference && (
              <button
                onClick={toggleReference}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-border transition-colors whitespace-nowrap",
                  showReference
                    ? "bg-muted/40 text-foreground hover:bg-muted/50"
                    : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
                )}
                title="Toggle reference overlay (R)"
                type="button"
              >
                <ImageIcon className="w-4 h-4" />
                Ref
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
