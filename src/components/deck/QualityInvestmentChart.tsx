interface QualityInvestmentChartProps {
  height?: number;
}

export function QualityInvestmentChart({ height = 300 }: QualityInvestmentChartProps) {
  const width = 600; // Narrower chart
  const chartHeight = height;
  const padding = { top: 30, right: 60, bottom: 50, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeightInner = chartHeight - padding.top - padding.bottom;

  // Data points for each path
  // Path 1: AI-Only (Red) - grows past 80% and stops at 90%
  const path1Data = [
    { investment: 0, quality: 0 },
    { investment: 10, quality: 80 },
    { investment: 100, quality: 90 }, // Grows to 90%
  ];

  // Path 2: Traditional CG (Blue) - Linear 0-100%
  const path2Data = [
    { investment: 0, quality: 0 },
    { investment: 100, quality: 100 },
  ];

  // Path 3: AI-Assisted (Green) - hits 100% quality at 85% investment
  const path3Data = [
    { investment: 0, quality: 0 },
    { investment: 15, quality: 50 },
    { investment: 85, quality: 100 }, // Hits 100% at 85% investment
  ];

  // Convert data points to SVG coordinates
  const toSVG = (point: { investment: number; quality: number }) => {
    const x = padding.left + (point.investment / 100) * chartWidth;
    const y = padding.top + chartHeightInner - (point.quality / 100) * chartHeightInner;
    return { x, y };
  };

  // Generate smooth bezier curve paths with better control points
  const createBezierPath = (points: Array<{ investment: number; quality: number }>, smooth: boolean = false) => {
    if (points.length < 2) return '';
    
    const svgPoints = points.map(p => toSVG(p));
    
    if (smooth && points.length >= 3) {
      // For red and green lines, create a single smooth curve through all points
      const p0 = svgPoints[0];
      const p1 = svgPoints[1]; // Middle point (guides the curve)
      const p2 = svgPoints[2];
      
      // Create smooth control points for natural bumps (not loops)
      // First segment: from p0 to p1
      const dx1 = p1.x - p0.x;
      const dy1 = p1.y - p0.y;
      // Control points should follow the direction of travel
      const cp1x = p0.x + dx1 * 0.4;
      const cp1y = p0.y + dy1 * 0.4; // Same direction as travel
      const cp2x = p1.x - dx1 * 0.1;
      const cp2y = p1.y - dy1 * 0.1; // Approaching p1 smoothly
      
      // Second segment: from p1 to p2
      const dx2 = p2.x - p1.x;
      const dy2 = p2.y - p1.y;
      const cp3x = p1.x + dx2 * 0.1;
      const cp3y = p1.y + dy2 * 0.1; // Leaving p1 smoothly
      const cp4x = p1.x + dx2 * 0.4;
      const cp4y = p1.y + dy2 * 0.4; // Same direction as travel
      
      let path = `M ${p0.x} ${p0.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y} C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, ${p2.x} ${p2.y}`;
      
      // If there's a 4th point (green line extension), add a horizontal line
      if (points.length === 4) {
        const p3 = svgPoints[3];
        path += ` L ${p3.x} ${p3.y}`;
      }
      
      return path;
    }
    
    // For blue line (linear) or fallback
    let path = `M ${svgPoints[0].x} ${svgPoints[0].y}`;
    
    for (let i = 1; i < svgPoints.length; i++) {
      const prev = svgPoints[i - 1];
      const curr = svgPoints[i];
      
      // Calculate smooth control points for natural curves
      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      
      // Control points create smooth S-curves showing growth
      const cp1x = prev.x + dx * 0.4;
      const cp1y = prev.y + dy * 0.2;
      const cp2x = prev.x + dx * 0.6;
      const cp2y = curr.y - dy * 0.2;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  const path1String = createBezierPath(path1Data, true); // Red - smooth
  const path2String = createBezierPath(path2Data, false); // Blue - linear
  const path3String = createBezierPath(path3Data, true); // Green - smooth

  // Grid lines
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    const value = i * 10;
    const x = padding.left + (value / 100) * chartWidth;
    const y = padding.top + chartHeightInner - (value / 100) * chartHeightInner;
    
    // Vertical grid lines
    gridLines.push(
      <line
        key={`v-${i}`}
        x1={x}
        y1={padding.top}
        x2={x}
        y2={padding.top + chartHeightInner}
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    );
    
    // Horizontal grid lines
    gridLines.push(
      <line
        key={`h-${i}`}
        x1={padding.left}
        y1={y}
        x2={padding.left + chartWidth}
        y2={y}
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    );
  }

  return (
    <div className="w-full bg-[#0e100f] border border-border/30 rounded-lg p-6">
      <div className="w-full" style={{ height: `${chartHeight}px` }}>
        <svg
          width="100%"
          height={chartHeight}
          viewBox={`0 0 ${width} ${chartHeight}`}
          preserveAspectRatio="xMidYMid meet"
          className="overflow-visible"
        >
          {/* Grid lines */}
          {gridLines}

          {/* Axis lines */}
          <line
            x1={padding.left}
            y1={padding.top + chartHeightInner}
            x2={padding.left + chartWidth}
            y2={padding.top + chartHeightInner}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={padding.top + chartHeightInner}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />

          {/* Path 1: AI-Only (Red) */}
          <path
            d={path1String}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Path 2: Traditional CG (Blue) */}
          <path
            d={path2String}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Path 3: AI-Assisted (Green) */}
          <path
            d={path3String}
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Key points - only start and end dots, no mid-section dots */}
          {/* Path 1: Red - start and end only */}
          <circle cx={toSVG(path1Data[0]).x} cy={toSVG(path1Data[0]).y} r="4" fill="#ef4444" />
          <circle cx={toSVG(path1Data[2]).x} cy={toSVG(path1Data[2]).y} r="4" fill="#ef4444" />

          {/* Path 2: Blue - start and end */}
          <circle cx={toSVG(path2Data[0]).x} cy={toSVG(path2Data[0]).y} r="4" fill="#3b82f6" />
          <circle cx={toSVG(path2Data[1]).x} cy={toSVG(path2Data[1]).y} r="4" fill="#3b82f6" />

          {/* Path 3: Green - start and end only */}
          <circle cx={toSVG(path3Data[0]).x} cy={toSVG(path3Data[0]).y} r="4" fill="#22c55e" />
          <circle cx={toSVG(path3Data[path3Data.length - 1]).x} cy={toSVG(path3Data[path3Data.length - 1]).y} r="4" fill="#22c55e" />

          {/* Axis labels - Quality on left just above 100% vertical, Investment to the right past 100% horizontal */}
          <text
            x={padding.left - 10}
            y={padding.top - 20}
            textAnchor="end"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="12"
            fontWeight="500"
          >
            Quality (%)
          </text>
          <text
            x={padding.left + chartWidth + 10}
            y={padding.top + chartHeightInner}
            textAnchor="start"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="12"
            fontWeight="500"
          >
            Investment (%)
          </text>

          {/* Value labels on axes */}
          {[0, 25, 50, 75, 100].map((value) => {
            const x = padding.left + (value / 100) * chartWidth;
            const y = padding.top + chartHeightInner - (value / 100) * chartHeightInner;
            return (
              <g key={value}>
                <text
                  x={x}
                  y={chartHeight - 15}
                  textAnchor="middle"
                  fill="rgba(255, 255, 255, 0.5)"
                  fontSize="11"
                >
                  {value}%
                </text>
                <text
                  x={padding.left - 15}
                  y={y + 4}
                  textAnchor="end"
                  fill="rgba(255, 255, 255, 0.5)"
                  fontSize="11"
                >
                  {value}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

