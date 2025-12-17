interface LayerItem {
  name: string;
  items: string[];
}

interface LayerDiagramProps {
  layers: LayerItem[];
  title?: string;
}

export function LayerDiagram({ layers, title }: LayerDiagramProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      )}
      <div className="space-y-3">
        {layers.map((layer, idx) => (
          <div key={idx} className="group">
            <div className="flex items-stretch rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
              <div className="w-40 shrink-0 px-4 py-3 bg-muted/50 flex items-center border-r border-border">
                <span className="text-sm font-semibold text-primary">{layer.name}</span>
              </div>
              <div className="flex-1 px-4 py-3 flex flex-wrap items-center gap-2">
                {layer.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1 text-sm text-foreground bg-muted/30 rounded border border-border/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Flow arrows */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-xs">Input</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span className="text-xs">Process</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span className="text-xs">Output</span>
        </div>
      </div>
    </div>
  );
}
