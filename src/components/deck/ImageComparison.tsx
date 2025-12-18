import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageComparisonProps {
  leftImage: string;
  rightImage: string;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

export function ImageComparison({
  leftImage,
  rightImage,
  leftLabel = "sRGB",
  rightLabel = "ACEScg",
  className,
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSliderPosition((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setSliderPosition((prev) => Math.min(100, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg select-none touch-none"
      >
        {/* Left image (background) */}
        <img
          src={leftImage}
          alt={leftLabel}
          className="block w-full h-auto"
          draggable={false}
        />

        {/* Right image (overlay with clip-path) */}
        <div
          className="absolute top-0 left-0 w-full overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img
            src={rightImage}
            alt={rightLabel}
            className="block w-full h-auto"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-border z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Divider handle - minimal design */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-border shadow-sm cursor-grab active:cursor-grabbing flex items-center justify-center pointer-events-auto"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Minimal handle - just two vertical lines */}
            <div className="flex items-center gap-0.5">
              <div className="w-px h-3 bg-foreground/60" />
              <div className="w-px h-3 bg-foreground/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Left: {leftLabel} | Right: {rightLabel}
      </p>
    </div>
  );
}
