// app/pagination/page.tsx
"use client";

import { useState } from "react";
import { Pagination } from "../../components";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Dummy total pages

  // Dummy data for demonstration
  const itemsPerPage = 5;
  const dummyData = Array.from(
    { length: totalPages * itemsPerPage },
    (_, i) => `Item ${i + 1}`
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dummyData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Pagination Demo
      </h1>

      {/* Dummy Content */}
      <ul className="space-y-2 text-brand-secondary/80">
        {currentItems.map((item) => (
          <li key={item} className="bg-brand-bg p-2 rounded-md">
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
