// components/pagination/Pagination.tsx
"use client";

import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const pages: number[] = [];
  const halfVisible = Math.floor(maxVisiblePages / 2);
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage === totalPages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md bg-brand-primary text-white disabled:bg-brand-primary/50 disabled:cursor-not-allowed hover:bg-brand-primary/80 transition-colors"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${
            page === currentPage
              ? "bg-brand-secondary text-white"
              : "bg-brand-bg text-brand-secondary hover:bg-brand-primary/20"
          } transition-colors`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-brand-primary text-white disabled:bg-brand-primary/50 disabled:cursor-not-allowed hover:bg-brand-primary/80 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
