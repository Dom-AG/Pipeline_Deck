import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface DeckNavItem {
  id: string;
  label: string;
}

interface DeckContextValue {
  items: DeckNavItem[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  showReference: boolean;
  toggleReference: () => void;
  referenceOpacity: number;
  setReferenceOpacity: (opacity: number) => void;
  getReferenceSrcForId: (id: string) => string | undefined;
}

const DeckContext = createContext<DeckContextValue | null>(null);

interface DeckProviderProps {
  items: DeckNavItem[];
  children: React.ReactNode;

  /**
   * Where reference images live (served from /public).
   * Default: /ref/slide-<n>.png
   */
  referencePathTemplate?: (n: number) => string;
  defaultShowReference?: boolean;
  defaultReferenceOpacity?: number;
}

const LS_SHOW_REF = "deck.showReference";
const LS_REF_OPACITY = "deck.referenceOpacity";

export function DeckProvider({
  items,
  children,
  referencePathTemplate = (n) => `/ref/slide-${n}.png`,
  defaultShowReference = false,
  defaultReferenceOpacity = 0.18,
}: DeckProviderProps) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? "");
  const [showReference, setShowReference] = useState(defaultShowReference);
  const [referenceOpacity, setReferenceOpacityState] = useState(defaultReferenceOpacity);

  useEffect(() => {
    try {
      const rawShow = localStorage.getItem(LS_SHOW_REF);
      if (rawShow != null) setShowReference(rawShow === "true");

      const rawOpacity = localStorage.getItem(LS_REF_OPACITY);
      if (rawOpacity != null) {
        const n = Number(rawOpacity);
        if (Number.isFinite(n)) setReferenceOpacityState(Math.max(0, Math.min(1, n)));
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_SHOW_REF, String(showReference));
      localStorage.setItem(LS_REF_OPACITY, String(referenceOpacity));
    } catch {
      // ignore
    }
  }, [showReference, referenceOpacity]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;

      if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        setShowReference((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleReference = () => setShowReference((v) => !v);

  const setReferenceOpacity = (opacity: number) => {
    const n = Number(opacity);
    if (!Number.isFinite(n)) return;
    setReferenceOpacityState(Math.max(0, Math.min(1, n)));
  };

  const getReferenceSrcForId = useMemo(() => {
    const map = new Map<string, number>();
    items.forEach((it, idx) => map.set(it.id, idx + 1));
    return (id: string) => {
      const n = map.get(id);
      if (!n) return undefined;
      return referencePathTemplate(n);
    };
  }, [items, referencePathTemplate]);

  const value = useMemo<DeckContextValue>(
    () => ({
      items,
      activeSection,
      setActiveSection,
      showReference,
      toggleReference,
      referenceOpacity,
      setReferenceOpacity,
      getReferenceSrcForId,
    }),
    [items, activeSection, showReference, referenceOpacity, getReferenceSrcForId]
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}

export function useDeck() {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used within a DeckProvider");
  return ctx;
}

export function useDeckOptional() {
  return useContext(DeckContext);
}



