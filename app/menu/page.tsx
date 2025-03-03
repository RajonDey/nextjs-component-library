// app/dropdowns/page.tsx
"use client";

import { Menu } from "../../components";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    subItems: [
      {
        label: "Electronics",
        href: "/products/electronics",
        onClick: () => alert("Electronics clicked"),
      },
      { label: "Clothing", href: "/products/clothing" },
    ],
  },
  {
    label: "About",
    subItems: [
      { label: "Team", href: "/about/team" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
  { label: "Login", href: "/login" },
];

export default function DropdownsPage() {
  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Menu with Dropdowns Demo
      </h1>
      <div className="w-full">
        <Menu items={menuItems} />
      </div>
    </div>
  );
}
