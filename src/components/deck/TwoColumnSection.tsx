import { ReactNode } from "react";

interface TwoColumnSectionProps {
  heading?: string;
  left: ReactNode;
  right: ReactNode;
}

export function TwoColumnSection({ heading, left, right }: TwoColumnSectionProps) {
  return (
    <div className="w-full">
      {heading && (
        <h2 className="text-3xl font-semibold text-foreground mb-8">{heading}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
}
