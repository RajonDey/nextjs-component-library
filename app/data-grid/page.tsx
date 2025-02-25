// app/data-grid/page.tsx
"use client";

import { DataGrid } from "../../components";

type Item = {
  id: number;
  name: string;
  category: string;
};

const dummyData: Item[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: i % 2 === 0 ? "Electronics" : "Clothing",
}));

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Category", accessor: "category" },
];

export default function DataGridPage() {
  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Data Grid Demo
      </h1>
      <DataGrid
        data={dummyData}
        columns={columns}
        itemsPerPage={5}
        categories={["Electronics", "Clothing"]}
      />
    </div>
  );
}
