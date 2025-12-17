interface TimelinePhase {
  label: string;
  start: number;
  duration: number;
  color?: string;
}

interface TimelineChartProps {
  phases: TimelinePhase[];
  totalUnits: number;
  unitLabel?: string;
  title?: string;
}

export function TimelineChart({ phases, totalUnits, unitLabel = "Month", title }: TimelineChartProps) {
  const unitWidth = 100 / totalUnits;

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}
      
      {/* Timeline header */}
      <div className="flex mb-2">
        {Array.from({ length: totalUnits }, (_, i) => (
          <div
            key={i}
            className="text-xs text-muted-foreground text-center"
            style={{ width: `${unitWidth}%` }}
          >
            {unitLabel} {i + 1}
          </div>
        ))}
      </div>
      
      {/* Timeline grid */}
      <div className="relative border border-border rounded-lg overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: totalUnits }, (_, i) => (
            <div
              key={i}
              className="border-r border-border/50 last:border-r-0"
              style={{ width: `${unitWidth}%` }}
            />
          ))}
        </div>
        
        {/* Phases */}
        <div className="relative py-2 space-y-2">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative h-10 px-1">
              <div
                className="absolute h-8 rounded flex items-center px-3 group cursor-default"
                style={{
                  left: `${phase.start * unitWidth}%`,
                  width: `${phase.duration * unitWidth}%`,
                  backgroundColor: phase.color || 'hsl(var(--primary))',
                }}
              >
                <span className="text-xs font-semibold text-background truncate">
                  {phase.label}
                </span>
                <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {phase.label} ({unitLabel}s {phase.start + 1}–{phase.start + phase.duration})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
