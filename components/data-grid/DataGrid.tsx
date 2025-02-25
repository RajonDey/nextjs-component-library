// components/data-grid/DataGrid.tsx
"use client";

import React, { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import SearchFilters from "../search/SearchFilters";
import DataTable from "../data-table/DataTable";

type DataGridProps<T> = {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T | ((item: T) => string | number);
  }[];
  itemsPerPage?: number;
  categories?: string[];
};

const DataGrid = <T,>({
  data,
  columns,
  itemsPerPage = 5,
  categories = [],
}: DataGridProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{ search: string; category?: string }>(
    {
      search: "",
      category: undefined,
    }
  );

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = Object.values(item as object)
        .join(" ")
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesCategory =
        !filters.category || (item as any).category === filters.category;
      return matchesSearch && matchesCategory;
    });
  }, [data, filters]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="space-y-6">
      <SearchFilters
        onFilterChange={(newFilters) =>
          setFilters((prev) => ({ ...prev, ...newFilters }))
        }
        categories={categories}
      />
      <DataTable data={paginatedData} columns={columns} />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default DataGrid;
