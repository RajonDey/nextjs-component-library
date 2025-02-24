# Next.js Component Library (NextLib)

Welcome to **NextLib**, a lightweight, reusable component library built with **Next.js 15 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. This library provides modular, pre-built components and features to accelerate your development process.

## Overview
NextLib offers a simple landing page on the root route (`/`) showcasing available features, along with a consistent design system applied across all components. Each feature is developed in its own branch (e.g., `feature/authentication`) and documented separately.

## Landing Page
Visit the root URL (`/`) to see the NextLib landing page, featuring:
- A branded introduction to the library.
- Links to try features (e.g., Authentication) and view the GitHub repo.
- A list of current and upcoming features.

## Available Features
- [Authentication](./docs/authentication.md) - Login, signup, forgot password, and dashboard.

*More features (e.g., Pagination, Search) will be added over time—check back for updates!*

## Branding
- **Colors**: Teal (`brand-primary`), Slate (`brand-secondary`), Light Gray (`brand-bg`), Red (`brand-accent`).
- **Typography**: Inter font via `next/font/google`.
- **Layout**: Unified header/footer via `app/layout.tsx`.

## Getting Started
1. **Clone the Repo**:
   ```bash
   git clone <repo-url>
   cd my-component-library