interface FlowStep {
  label: string;
  description?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  title?: string;
}

export function FlowDiagram({ steps, title }: FlowDiagramProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      )}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <div className="group relative px-4 py-3 bg-muted/50 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-default">
              <span className="text-sm font-semibold text-foreground">{step.label}</span>
              {step.description && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 max-w-[200px] text-center">
                  {step.description}
                </div>
              )}
            </div>
            {idx < steps.length - 1 && (
              <svg className="w-6 h-6 text-primary mx-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
