// app/search/page.tsx
"use client";

import { useState } from "react";
import { SearchFilters } from "../../components";

export default function SearchPage() {
  const [filters, setFilters] = useState<{ search: string; category?: string }>(
    {
      search: "",
      category: undefined,
    }
  );

  const dummyCategories = ["Electronics", "Clothing", "Books"];
  const dummyData = [
    { name: "Laptop", category: "Electronics" },
    { name: "T-Shirt", category: "Clothing" },
    { name: "Novel", category: "Books" },
  ];

  const filteredData = dummyData.filter(
    (item) =>
      item.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (!filters.category || item.category === filters.category)
  );

  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Search Filters Demo
      </h1>
      <SearchFilters
        onFilterChange={(newFilters) =>
          setFilters((prev) => ({ ...prev, ...newFilters }))
        }
        categories={dummyCategories}
      />
      <ul className="space-y-2 text-brand-secondary/80">
        {filteredData.map((item) => (
          <li key={item.name} className="bg-brand-bg p-2 rounded-md">
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
