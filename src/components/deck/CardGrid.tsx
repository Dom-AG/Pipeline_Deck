import { ReactNode } from "react";

interface CardItem {
  title: string;
  description: string;
  icon?: ReactNode;
  subdescription?: string;
}

interface CardGridProps {
  heading?: string;
  subheading?: string;
  headingHighlight?: string;
  cards: CardItem[];
  columns?: 2 | 3 | 4;
  variant?: "border" | "filled";
}

export function CardGrid({ 
  heading, 
  subheading, 
  headingHighlight, 
  cards, 
  columns = 3,
  variant = "border" 
}: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className="w-full">
      {heading && (
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            {headingHighlight ? (
              <>
                {heading.split(headingHighlight).map((part, idx) => (
                  <span key={idx}>
                    {idx > 0 && <span className="text-foreground">{headingHighlight}</span>}
                    <span className={idx === 0 ? "text-muted-foreground" : "text-muted-foreground"}>{part}</span>
                  </span>
                ))}
              </>
            ) : (
              <span className="text-foreground">{heading}</span>
            )}
          </h2>
          {subheading && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subheading}</p>
          )}
        </div>
      )}
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={variant === "filled" 
              ? "deck-card-filled group hover:border-foreground/30 transition-colors" 
              : "deck-card"
            }
          >
            {card.icon && (
              <div className="w-8 h-8 mb-4 text-foreground opacity-80">
                {card.icon}
              </div>
            )}
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            {card.subdescription && (
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{card.subdescription}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}