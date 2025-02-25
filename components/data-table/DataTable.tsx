// components/data-table/DataTable.tsx
import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T | ((item: T) => string | number);
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

const DataTable = <T,>({ data, columns }: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-brand-primary/20 rounded-md">
        <thead>
          <tr className="bg-brand-bg text-brand-secondary">
            {columns.map((col) => (
              <th key={col.header} className="px-4 py-2 border-b text-left">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-brand-bg/50">
              {columns.map((col) => (
                <td
                  key={col.header}
                  className="px-4 py-2 border-b text-brand-secondary/80"
                >
                  {typeof col.accessor === "function"
                    ? col.accessor(item)
                    : item[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
