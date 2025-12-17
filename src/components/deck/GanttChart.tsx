interface GanttTask {
  id: string;
  label: string;
  start: number;
  duration: number;
  color?: string;
  dependencies?: string[];
}

interface GanttChartProps {
  tasks: GanttTask[];
  totalWeeks: number;
  title?: string;
}

export function GanttChart({ tasks, totalWeeks, title }: GanttChartProps) {
  const weekWidth = 100 / totalWeeks;
  const monthMarkers = Math.ceil(totalWeeks / 4);

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}
      
      {/* Month headers */}
      <div className="flex mb-2 border-b border-border pb-2">
        {Array.from({ length: monthMarkers }, (_, i) => (
          <div
            key={i}
            className="text-xs font-semibold text-muted-foreground"
            style={{ width: `${(4 / totalWeeks) * 100}%` }}
          >
            Month {i + 1}
          </div>
        ))}
      </div>
      
      {/* Week markers */}
      <div className="flex mb-4">
        {Array.from({ length: totalWeeks }, (_, i) => (
          <div
            key={i}
            className="text-[10px] text-muted-foreground text-center"
            style={{ width: `${weekWidth}%` }}
          >
            W{i + 1}
          </div>
        ))}
      </div>
      
      {/* Tasks */}
      <div className="relative space-y-2">
        {/* Grid lines */}
        <div className="absolute inset-0 flex pointer-events-none">
          {Array.from({ length: totalWeeks }, (_, i) => (
            <div
              key={i}
              className="border-r border-border/30"
              style={{ width: `${weekWidth}%` }}
            />
          ))}
        </div>
        
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center h-10">
            <div className="w-32 shrink-0 pr-4">
              <span className="text-xs text-foreground truncate">{task.label}</span>
            </div>
            <div className="flex-1 relative h-full flex items-center">
              <div
                className="absolute h-6 rounded group cursor-default"
                style={{
                  left: `${task.start * weekWidth}%`,
                  width: `${task.duration * weekWidth}%`,
                  backgroundColor: task.color || "hsl(var(--primary))",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-background truncate px-2">
                    {task.duration}w
                  </span>
                </div>
                <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {task.label}: Weeks {task.start + 1}–{task.start + task.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
