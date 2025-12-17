interface RiskItem {
  name: string;
  likelihood: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
}

interface RiskMatrixProps {
  risks: RiskItem[];
  title?: string;
}

export function RiskMatrix({ risks, title }: RiskMatrixProps) {
  const getLikelihoodScore = (l: string) => l === "low" ? 1 : l === "medium" ? 2 : 3;
  const getImpactScore = (i: string) => i === "low" ? 1 : i === "medium" ? 2 : 3;
  
  const getRiskLevel = (risk: RiskItem) => {
    const score = getLikelihoodScore(risk.likelihood) * getImpactScore(risk.impact);
    if (score <= 2) return { label: "Low", color: "bg-chart-execution/20 text-chart-execution border-chart-execution/50" };
    if (score <= 4) return { label: "Medium", color: "bg-chart-support/20 text-chart-support border-chart-support/50" };
    return { label: "High", color: "bg-destructive/20 text-destructive border-destructive/50" };
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}
      <div className="space-y-3">
        {risks.map((risk, idx) => {
          const level = getRiskLevel(risk);
          return (
            <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <span className="text-sm font-semibold text-foreground">{risk.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">
                  L: {risk.likelihood} / I: {risk.impact}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded border ${level.color}`}>
                  {level.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
