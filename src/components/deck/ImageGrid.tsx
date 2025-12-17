interface ImageItem {
  src: string;
  alt: string;
  label?: string;
}

interface InfoCard {
  title: string;
  description?: string;
}

interface ImageGridProps {
  heading?: string;
  subheading?: string;
  images: ImageItem[];
  infoCards?: InfoCard[];
  columns?: 2 | 3 | 4;
}

export function ImageGrid({ 
  heading, 
  subheading, 
  images, 
  infoCards,
  columns = 4 
}: ImageGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <div className="w-full">
      {heading && (
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-3">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-muted-foreground">{subheading}</p>
          )}
        </div>
      )}
      <div className="flex gap-6">
        <div className={`grid ${gridCols[columns]} gap-1 rounded-xl overflow-hidden flex-1`}>
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square group overflow-hidden">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {img.label && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
                  <span className="text-xs text-white">{img.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {infoCards && infoCards.length > 0 && (
          <div className="w-72 space-y-4">
            {infoCards.map((card, idx) => (
              <div key={idx} className="deck-card-filled">
                <p className="text-base text-foreground font-medium leading-relaxed">
                  {card.title}
                </p>
                {card.description && (
                  <p className="text-sm text-muted-foreground mt-2">{card.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}