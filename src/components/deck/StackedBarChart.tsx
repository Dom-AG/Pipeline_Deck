interface BarSegment {
  label: string;
  value: number;
  color: string;
}

interface BarData {
  label: string;
  segments: BarSegment[];
}

interface StackedBarChartProps {
  data: BarData[];
  height?: number;
}

export function StackedBarChart({ data, height = 32 }: StackedBarChartProps) {
  const allLabels = [...new Set(data.flatMap(d => d.segments.map(s => s.label)))];

  return (
    <div className="w-full space-y-4">
      {data.map((bar, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-foreground">{bar.label}</span>
            <span className="text-xs text-muted-foreground">
              {bar.segments.reduce((sum, s) => sum + s.value, 0)}%
            </span>
          </div>
          <div 
            className="w-full flex rounded overflow-hidden"
            style={{ height: `${height}px` }}
          >
            {bar.segments.map((segment, segIdx) => (
              <div
                key={segIdx}
                className="relative group cursor-default"
                style={{
                  width: `${segment.value}%`,
                  backgroundColor: segment.color,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-background px-1">
                    {segment.value}%
                  </span>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {segment.label}: {segment.value}%
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-border">
        {allLabels.map((label, idx) => {
          const segment = data[0]?.segments.find(s => s.label === label);
          return (
            <div key={idx} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ backgroundColor: segment?.color || 'hsl(var(--muted-foreground))' }}
              />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
