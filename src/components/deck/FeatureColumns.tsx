import { ReactNode } from "react";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  subdescription?: string;
}

interface FeatureColumnsProps {
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  subheadingHighlight?: string;
  features: FeatureItem[];
}

export function FeatureColumns({ 
  heading, 
  headingHighlight, 
  subheading, 
  subheadingHighlight, 
  features 
}: FeatureColumnsProps) {
  return (
    <div className="w-full text-center">
      {heading && (
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          {headingHighlight ? (
            <>
              {heading.split(headingHighlight).map((part, idx) => (
                <span key={idx}>
                  {idx > 0 && <span className="text-foreground">{headingHighlight}</span>}
                  <span className="text-muted-foreground">{part}</span>
                </span>
              ))}
            </>
          ) : (
            <span className="text-foreground">{heading}</span>
          )}
        </h2>
      )}
      {subheading && (
        <p className="text-lg mb-16 max-w-3xl mx-auto">
          {subheadingHighlight ? (
            <>
              <span className="text-foreground font-medium">{subheadingHighlight}</span>
              <span className="text-muted-foreground">{subheading.replace(subheadingHighlight, '')}</span>
            </>
          ) : (
            <span className="text-muted-foreground">{subheading}</span>
          )}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="deck-card text-left"
          >
            <div className="w-8 h-8 mb-4 text-foreground">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            {feature.subdescription && (
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{feature.subdescription}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}