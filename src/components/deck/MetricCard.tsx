interface MetricCardProps {
  label: string;
  value: string;
  sublabel?: string;
  trend?: "up" | "down" | "neutral";
}

export function MetricCard({ label, value, sublabel, trend }: MetricCardProps) {
  return (
    <div className="deck-card">
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-foreground">{value}</span>
        {trend && (
          <span className={`text-sm ${trend === "up" ? "text-chart-execution" : trend === "down" ? "text-destructive" : "text-muted-foreground"}`}>
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
          </span>
        )}
      </div>
      {sublabel && (
        <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>
      )}
    </div>
  );
}
