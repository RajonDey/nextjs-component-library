// components/search/SearchFilters.tsx
"use client";

import React, { ChangeEvent } from "react";

type FilterData = {
  search: string;
  category?: string;
};

type SearchFiltersProps = {
  onFilterChange: (filters: FilterData) => void;
  categories?: string[];
};

const SearchFilters: React.FC<SearchFiltersProps> = ({
  onFilterChange,
  categories = [],
}) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ search: e.target.value });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ category: e.target.value || undefined });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-brand-bg rounded-md">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        className="px-4 py-2 border border-brand-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
      />
      {categories.length > 0 && (
        <select
          onChange={handleCategoryChange}
          className="px-4 py-2 border border-brand-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchFilters;
