# Menu with Dropdowns Feature

A reusable menu component with dropdown submenus, responsive for desktop and mobile.

## Features
- Top-level menu items with optional dropdowns.
- Responsive: Hamburger menu on mobile, horizontal on desktop.
- Closes on outside click.
- Branded with NextLib’s design system.

## How It Was Built
- **Component**: Client Component (`"use client"`) using React and TypeScript.
- **Styling**: Uses `brand-primary` for menu, `brand-secondary` for text, and `brand-bg` for dropdowns via Tailwind CSS.
- **Demo**: A page (`/dropdowns`) with a sample menu.

## Project Structure
```
components/
├── menu/
│   └── Menu.tsx    # Menu component
app/
├── dropdowns/
│   └── page.tsx    # Demo page
```


## Prerequisites
- NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/menu/` into your project.
2. Ensure `components/index.tsx` exports `Menu`.

## Usage
```tsx
import { Menu } from "../components";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", subItems: [
    { label: "Electronics", href: "/products/electronics" },
    { label: "Clothing", href: "/products/clothing" },
  ]},
];

function MyPage() {
  return <Menu items={items} />;
}
```
- Visit /menu to see the demo.

## What You Get
- A reusable Menu component with dropdowns.
- A responsive demo page.

## Customization & Extensions
- **Items**: Add onClick handlers or more submenu levels.
- **Styling**: Modify Tailwind classes in Menu.tsx.
- **Behavior**: Add keyboard navigation or animations.

## Limitations
- Single-level dropdowns (extend for nesting).
- Basic responsive toggle (enhance for more layouts).

## Next Steps
- Support nested submenus.
- Add open/close animations.