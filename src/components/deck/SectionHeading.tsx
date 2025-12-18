import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  highlight?: string;
}

export function SectionHeading({ 
  text, 
  size = "lg", 
  className,
  highlight 
}: SectionHeadingProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  return (
    <h2 
      className={cn(
        "font-semibold tracking-tight text-foreground",
        sizeClasses[size],
        className
      )}
    >
      {highlight ? (
        <>
          <span>{text.split(highlight)[0]}</span>
          <span className="text-accent">{highlight}</span>
          <span>{text.split(highlight)[1]}</span>
        </>
      ) : (
        text
      )}
    </h2>
  );
}

