interface OrgNode {
  title: string;
  subtitle?: string;
  status?: "filled" | "hiring" | "planned";
  children?: OrgNode[];
}

interface OrgChartProps {
  data: OrgNode;
}

function OrgNodeCard({ node, isRoot = false }: { node: OrgNode; isRoot?: boolean }) {
  const statusColors = {
    filled: "border-primary/50 bg-card",
    hiring: "border-chart-support bg-chart-support/10",
    planned: "border-muted bg-muted/20",
  };

  const statusLabels = {
    filled: null,
    hiring: "Hiring",
    planned: "Planned",
  };

  const status = node.status || "filled";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`px-4 py-3 rounded-lg border ${statusColors[status]} min-w-[140px] text-center relative`}
      >
        {statusLabels[status] && (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-chart-support text-background rounded">
            {statusLabels[status]}
          </span>
        )}
        <p className={`font-semibold ${isRoot ? "text-primary" : "text-foreground"} text-sm`}>
          {node.title}
        </p>
        {node.subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{node.subtitle}</p>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <>
          {/* Vertical line down */}
          <div className="w-px h-6 bg-border" />
          
          {/* Horizontal connector */}
          {node.children.length > 1 && (
            <div 
              className="h-px bg-border"
              style={{ 
                width: `${(node.children.length - 1) * 180}px`,
              }}
            />
          )}
          
          {/* Children */}
          <div className="flex gap-8">
            {node.children.map((child, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-px h-6 bg-border" />
                <OrgNodeCard node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function OrgChart({ data }: OrgChartProps) {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex justify-center min-w-max">
        <OrgNodeCard node={data} isRoot />
      </div>
    </div>
  );
}
