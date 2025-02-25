
# Data Table Feature

A reusable component for displaying data in a table format.

## Features
- Customizable columns with headers and accessors.
- Responsive and branded with NextLib’s design system.

## How It Was Built
- **Component**: Server Component (static), built with React and TypeScript.
- **Styling**: Uses `brand-primary` for borders, `brand-secondary` for text, and `brand-bg` for headers via Tailwind CSS.
- **Demo**: A page (`/data-table`) with dummy data.

## Project Structure
```
components/
├── data-table/
│   └── DataTable.tsx    # Data Table component
app/
├── data-table/
│   └── page.tsx         # Demo page
```

## Prerequisites
- Included in the main NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/data-table/` and `app/data-table/` into your Next.js project.
2. Ensure `components/index.tsx` exports `DataTable`.

## Usage
```tsx
import { DataTable } from "../components";

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
];

function MyPage() {
  return <DataTable data={data} columns={columns} />;
}
```

## What You Get
- A reusable `DataTable` component for tabular data display.
- A demo page with sample data.


## Customization & Extensions
- **Columns**: Add custom render functions: `{ header: "Custom", accessor: (item) => item.id + "!" }`.
- **Styling**: Modify Tailwind classes in `DataTable.tsx`.
- **Sorting**: Add clickable headers for sorting (requires "use client").