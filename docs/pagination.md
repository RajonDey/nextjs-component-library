# Pagination Feature

A reusable pagination component for navigating through pages of content.

## Features
- Previous/Next buttons with disabled states.
- Configurable page number buttons (e.g., show 5 at a time).
- Highlights the current page.
- Responsive and branded with NextLib’s design system.

## How It Was Built
- **Component**: Client Component (`"use client"`) for interactivity, built with React and TypeScript.
- **Styling**: Uses `brand-primary` for buttons, `brand-secondary` for active page, and `brand-bg` for inactive pages via Tailwind CSS.
- **Demo**: A page (`/pagination`) with dummy data to showcase functionality.

## Project Structure
```
my-component-library/
├── app/
│   ├── pagination/
│   │   └── page.tsx          # Demo page
│   └── ...                   # Existing files (layout.tsx, page.tsx, etc.)
├── components/
│   ├── pagination/
│   │   └── Pagination.tsx    # Pagination component
│   └── index.tsx             # Updated exports
├── docs/
│   ├── pagination.md         # Feature docs
│   └── ...                   # Existing docs
└── ...                       # Other files
```

## Prerequisites
- Included in the main NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/pagination/` and `app/pagination/` into your Next.js project.
2. Ensure `components/index.tsx` exports `Pagination`.

## Usage
```tsx
import { Pagination } from "../components";

function MyPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
      maxVisiblePages={5} // Optional
    />
  );
}
```

## What You Get
- A reusable `Pagination` component with prev/next and page number navigation.
- A demo page showing it with dummy data.

## Customization & Extensions
- **Adjust Visible Pages**: Change `maxVisiblePages` prop (default: 5).
- **Styling**: Modify Tailwind classes in `Pagination.tsx` (e.g., button sizes, colors).

## Data Integration
- Replace dummy data in `page.tsx` with real API calls:
```tsx
const [data, setData] = useState([]);
useEffect(() => {
  fetch(`/api/data?page=${currentPage}`).then((res) => res.json()).then(setData);
}, [currentPage]);
```