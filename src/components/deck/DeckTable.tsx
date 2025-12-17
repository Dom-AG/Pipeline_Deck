interface TableColumn {
  key: string;
  header: string;
  width?: string;
}

interface DeckTableProps {
  columns: TableColumn[];
  data: Record<string, string | number | React.ReactNode>[];
  caption?: string;
}

export function DeckTable({ columns, data, caption }: DeckTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      {caption && (
        <p className="text-sm text-muted-foreground mb-4">{caption}</p>
      )}
      <table className="deck-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
