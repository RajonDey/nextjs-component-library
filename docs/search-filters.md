
# Search Filters Feature
A reusable component for filtering data with text search and optional category selection.

## Features
- Text input for searching.
- Optional category dropdown.
- Responsive and branded with NextLib’s design system.

## How It Was Built
- **Component**: Client Component (`"use client"`) for interactivity, built with React and TypeScript.
- **Styling**: Uses `brand-primary` for accents and `brand-bg` for background via Tailwind CSS.
- **Demo**: A page (`/search`) with dummy data to showcase filtering.

## Project Structure
```
components/
├── search/
│   └── SearchFilters.tsx    # Search Filters component
app/
├── search/
│   └── page.tsx            # Demo page
```

## Prerequisites
- Included in the main NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/search/` and `app/search/` into your Next.js project.
2. Ensure `components/index.tsx` exports `SearchFilters`.

## Usage
```tsx
import { SearchFilters } from "../components";
import { useState } from "react";

function MyPage() {
  const [filters, setFilters] = useState({ search: "", category: undefined });

  return (
    <SearchFilters
      onFilterChange={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
      categories={["Electronics", "Clothing"]}
    />
  );
}
```
- Visit `/search` to see the demo.

## What You Get
- A reusable `SearchFilters` component for text and category filtering.
- A demo page showing filtered dummy data.

## Customization & Extensions
### Add Filters
- Extend `FilterData` type and UI for more filter types (e.g., price range).

### Styling
- Modify Tailwind classes in `SearchFilters.tsx`.

### Data Integration
- Use with real data:
  ```tsx
  const filteredData = data.filter(item => item.name.includes(filters.search));
  ```

## Limitations
- Basic filtering (text and category only).
- Static demo data (replace with real content).

## Next Steps
- Add more filter options (e.g., date, price).
- Integrate with `DataTable` or `Pagination`.