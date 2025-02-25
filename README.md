
# Next.js Component Library (NextLib)

Welcome to **NextLib**, a lightweight, reusable component library built with **Next.js 15 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. This library provides modular, pre-built components and features to accelerate your development process.

## Overview
NextLib offers a simple landing page on the root route (`/`) showcasing available features, along with a consistent design system applied across all components. Each feature is developed in its own branch (e.g., `feature/pagination`) and documented separately.

## Landing Page
Visit the root URL (`/`) to see the NextLib landing page, featuring:
- A branded introduction to the library.
- Links to try features (once merged) and view the GitHub repo.
- A list of current and upcoming features.

## Available Features
Features are developed in separate branches and merged into `main` when complete. Documentation is available in `main`, with code in feature branches until merged:
- **Pagination** - Navigate pages with prev/next and numbered buttons.
  - Branch: `feature/pagination`
  - Docs: [Pagination](./docs/pagination.md)
- **Search Filters** - Filter data with text search and optional category selection.
  - Branch: `feature/search-filters`
  - Docs: [Search Filters](./docs/search-filters.md)
- **Data Table** - Display data in a table.
  - Branch: `feature/data-table`
  - Docs: [Data Table](./docs/data-table.md)
- **Data Grid** - Unified component combining Pagination, Search Filters, and Data Table.
  - Branch: `feature/data-grid`
  - Docs: [Data Grid](./docs/data-grid.md)

*More features coming soon!*

## Branding
- **Colors**: Teal (`brand-primary`), Slate (`brand-secondary`), Light Gray (`brand-bg`), Red (`brand-accent`).
- **Typography**: Inter font via `next/font/google`.
- **Layout**: Unified header/footer via `app/layout.tsx`.

## Getting Started
1. **Clone the Repo**:
   ```bash
   git clone <repo-url>
   cd my-component-library
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the App**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to see the landing page.

   *Note*: To test features, switch to their branches (e.g., `git checkout feature/data-grid`)—docs are in `main`, code is in branches.

## Prerequisites
- Node.js v18+
- npm v9+
- Basic knowledge of Next.js, React, and TypeScript

## Contributing
Develop new features in `feature/<name>` branches and submit pull requests to `main`. Documentation is added to `main` early for visibility.

## License
[MIT License](#) (or your preferred license)
```