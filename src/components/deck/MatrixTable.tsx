import { cn } from "@/lib/utils";

interface TableColumn {
  key: string;
  header: string;
  width?: string;
}

interface MatrixTableProps {
  columns: TableColumn[];
  data: Record<string, string | number | React.ReactNode>[];
  caption?: string;
  variant?: "default" | "dark"; // "dark" for dark background with light text
  showVerticalBorders?: boolean; // Show vertical separators between columns
  cellHover?: boolean; // Highlight individual cells on hover (instead of rows)
  className?: string;
}

export function MatrixTable({
  columns,
  data,
  caption,
  variant = "default",
  showVerticalBorders = false,
  cellHover = false,
  className,
}: MatrixTableProps) {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      {caption && (
        <p className="text-sm text-muted-foreground mb-4">{caption}</p>
      )}
      <table
        className={cn(
          "deck-table w-full border-collapse rounded-lg overflow-hidden",
          variant === "dark" && "matrix-dark",
          showVerticalBorders && "matrix-borders",
          cellHover && "matrix-cell-hover"
        )}
        style={
          variant === "dark"
            ? {
                backgroundColor: "#0e100f",
                borderRadius: "0.5rem",
                padding: "1rem",
              }
            : undefined
        }
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  width: col.width,
                  ...(variant === "dark"
                    ? {
                        backgroundColor: "rgba(14, 16, 15, 0.8)",
                        color: "hsl(var(--text-on-dark-heading))",
                      }
                    : {}),
                  ...(showVerticalBorders
                    ? { borderRight: "1px solid rgba(255, 255, 255, 0.1)" }
                    : {}),
                }}
                className={cn(
                  showVerticalBorders && "matrix-border-right"
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{
                    ...(variant === "dark"
                      ? {
                          color: "hsl(var(--text-on-dark-paragraph))",
                        }
                      : {}),
                    ...(showVerticalBorders
                      ? { borderRight: "1px solid rgba(255, 255, 255, 0.1)" }
                      : {}),
                  }}
                  className={cn(
                    showVerticalBorders && "matrix-border-right",
                    cellHover && "matrix-cell-hover-cell"
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
