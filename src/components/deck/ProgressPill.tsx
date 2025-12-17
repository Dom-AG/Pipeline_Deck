interface ProgressPillProps {
  label: string;
  value: number;
  maxValue?: number;
  suffix?: string;
}

export function ProgressPill({ label, value, maxValue = 100, suffix = "%" }: ProgressPillProps) {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground">{label}</span>
        <span className="text-sm font-semibold text-primary">{value}{suffix}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
