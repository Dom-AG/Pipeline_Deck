interface MatrixCell {
  value: string | boolean;
}

interface MatrixTableProps {
  title?: string;
  rowHeaders: string[];
  columnHeaders: string[];
  data: MatrixCell[][];
}

export function MatrixTable({ title, rowHeaders, columnHeaders, data }: MatrixTableProps) {
  const renderCell = (cell: MatrixCell) => {
    if (typeof cell.value === "boolean") {
      return cell.value ? (
        <span className="text-primary">✓</span>
      ) : (
        <span className="text-muted-foreground">–</span>
      );
    }
    return cell.value;
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}
      <div className="overflow-x-auto">
        <table className="deck-table">
          <thead>
            <tr>
              <th></th>
              {columnHeaders.map((header, idx) => (
                <th key={idx} className="text-center">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowHeaders.map((rowHeader, rowIdx) => (
              <tr key={rowIdx}>
                <td className="font-semibold text-foreground">{rowHeader}</td>
                {data[rowIdx]?.map((cell, colIdx) => (
                  <td key={colIdx} className="text-center">
                    {renderCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
