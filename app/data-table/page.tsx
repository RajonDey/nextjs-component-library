// app/data-table/page.tsx
"use client";

import { DataTable } from "@/components";

const dummyData = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "T-Shirt", category: "Clothing" },
  { id: 3, name: "Novel", category: "Books" },
];

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Category", accessor: "category" },
];

export default function DataTablePage() {
  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Data Table Demo
      </h1>
      <DataTable data={dummyData} columns={columns} />
    </div>
  );
}
