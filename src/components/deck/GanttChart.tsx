interface GanttTask {
  id: string;
  label: string;
  start: number;
  duration: number;
  color?: string;
  dependencies?: string[];
}

interface Sprint {
  number: number;
  weeks: string;
  tasks: string[];
}

interface Phase {
  number: number;
  title: string;
  weeks: string;
  status?: string;
  sprints: Sprint[];
}

interface GanttChartProps {
  phases: Phase[];
  totalWeeks: number;
  title?: string;
}

export function GanttChart({ phases, totalWeeks, title }: GanttChartProps) {
  const weekWidth = 100 / totalWeeks;
  const monthMarkers = Math.ceil(totalWeeks / 4);

  // Helper function to get month number from week (0-indexed)
  const getMonthFromWeek = (week: number) => {
    return Math.floor(week / 4) + 1;
  };

  // Helper function to get month name
  const getMonthName = (monthNum: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Assuming starting from a specific month, or just use numbers
    return `Month ${monthNum}`;
  };

  // Gradient colors matching the deck theme - one per phase
  const phaseGradients = [
    "linear-gradient(135deg, #fec5fb 20%, #00bae2 80%)", // Phase 1 - Pink to Blue
    "linear-gradient(135deg, #ffd3fd 27%, #806eff 84%)", // Phase 2 - Light Pink to Purple
    "linear-gradient(135deg, #06b6d4 20%, #84cc16 80%)", // Phase 3 - Cyan Green to Warm Green
    "linear-gradient(315deg, rgb(255, 135, 9) 20%, rgb(247, 189, 248) 70%)", // Phase 4 - Orange to Pink
    "linear-gradient(160deg, #fec5fb 20%, #00bae2 80%)", // Phase 5 - Pink to Blue diagonal
    "linear-gradient(135deg, #06b6d4 20%, #84cc16 80%)", // Phase 6 - Cyan Green to Warm Green
  ];

  // Flatten all sprints from all phases with their phase info
  const allSprints: Array<{
    sprint: Sprint;
    phase: Phase;
    phaseIndex: number;
    sprintIndex: number;
    startWeek: number;
  }> = [];

  let currentWeek = 0;
  phases.forEach((phase, phaseIndex) => {
    phase.sprints.forEach((sprint, sprintIndex) => {
      allSprints.push({
        sprint,
        phase,
        phaseIndex,
        sprintIndex,
        startWeek: currentWeek,
      });
      currentWeek += 2; // Each sprint is 2 weeks
    });
  });

  return (
    <div className="w-full rounded-xl p-6 gantt-chart-dark" style={{ backgroundColor: "#0e100f" }}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 gantt-title">{title}</h3>
      )}
      
      {/* Month headers */}
      <div className="flex mb-2 border-b pb-2" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
        <div className="w-64 shrink-0"></div>
        {Array.from({ length: monthMarkers }, (_, i) => (
          <div
            key={i}
            className="text-xs font-semibold gantt-month"
            style={{ 
              width: `${(4 / totalWeeks) * 100}%`
            }}
          >
            Month {i + 1}
          </div>
        ))}
      </div>
      
      {/* Week markers - show every other week, aligned with sprint starts */}
      <div className="relative mb-4" style={{ height: '20px' }}>
        <div className="w-64 shrink-0 absolute left-0"></div>
        <div className="relative" style={{ marginLeft: '256px' }}>
          {Array.from({ length: totalWeeks }, (_, i) => {
            // Only show odd-numbered weeks (W1, W3, W5, etc.) at sprint start positions
            if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  className="absolute text-[10px] text-center gantt-week"
                  style={{ 
                    left: `${i * weekWidth}%`,
                    width: `${weekWidth * 2}%`
                  }}
                >
                  W{i + 1}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      
      {/* Phases and Sprints */}
      <div className="relative">
        {/* Vertical grid lines */}
        <div className="absolute inset-0 flex pointer-events-none" style={{ left: '256px' }}>
          {Array.from({ length: totalWeeks }, (_, i) => (
            <div
              key={i}
              className="border-r"
              style={{ 
                width: `${weekWidth}%`,
                borderColor: "rgba(255, 255, 255, 0.15)"
              }}
            />
          ))}
        </div>
        
        {/* Phase labels and bars */}
        {phases.map((phase, phaseIndex) => {
          const phaseGradient = phaseGradients[phaseIndex % phaseGradients.length];
          const phaseStartWeek = phaseIndex * 8;
          
          return (
            <div key={`phase-label-${phase.number}`} className="flex items-center h-12 border-b mb-2" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
              <div className="w-64 shrink-0 pr-4">
                <span className="text-base font-semibold gantt-label">
                  Phase {phase.number}: {phase.title}
                  {phase.status && (
                    <span className="ml-2 text-xs font-normal opacity-75">({phase.status})</span>
                  )}
                </span>
              </div>
              <div className="flex-1 relative h-full flex items-center">
                {/* Phase background bar (fully opaque) */}
                <div
                  className="absolute h-6 rounded overflow-hidden"
                  style={{
                    left: `${phaseStartWeek * weekWidth}%`,
                    width: `${8 * weekWidth}%`,
                    background: phaseGradient,
                  }}
                >
                  {/* Noise overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundBlendMode: "color-dodge",
                      backgroundImage: "url('/src/assets/noise.webp')",
                      backgroundRepeat: "repeat",
                      backgroundSize: "200px 200px",
                      opacity: 0.8,
                      zIndex: 0,
                    }}
                  />
                </div>
                
                {/* White dots marking every 2 weeks (sprint boundaries) - outside phase box */}
                {Array.from({ length: 4 }, (_, i) => {
                  // Dots at weeks 2, 4, 6, 8 within this phase (relative to phase start)
                  // Week 2 = end of sprint 1, Week 4 = end of sprint 2, etc.
                  const dotWeek = (i + 1) * 2; // 2, 4, 6, 8
                  const absoluteWeekPosition = phaseStartWeek + dotWeek;
                  const dotPosition = (absoluteWeekPosition * weekWidth);
                  
                  // Find which sprint this dot marks the end of
                  const sprintIndex = i;
                  const sprint = phase.sprints[sprintIndex];
                  
                  return (
                    <div
                      key={`dot-${phase.number}-${dotWeek}`}
                      className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-white group cursor-default z-10"
                      style={{
                        left: `${dotPosition}%`,
                        width: '8px',
                        height: '8px',
                      }}
                    >
                      {/* Hover tooltip */}
                      {sprint && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                          Sprint {sprint.number}: {sprint.weeks}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
