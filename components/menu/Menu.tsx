// components/menu/Menu.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";

type MenuItem = {
  label: string;
  href?: string;
  subItems?: { label: string; href: string; onClick?: () => void }[];
  onClick?: () => void;
};

type MenuProps = {
  items: MenuItem[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Dropdown state
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu/dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav ref={menuRef} className="bg-brand-primary text-white">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4">
        <span className="text-xl font-bold">NextLib</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-4 p-4 md:p-0`}
      >
        {items.map((item) => (
          <li key={item.label} className="relative">
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full md:w-auto px-4 py-2 text-left hover:bg-brand-primary/80 transition-colors flex justify-between items-center"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <ul className="md:absolute md:mt-0 md:bg-white md:border md:border-brand-primary/20 md:rounded-md md:shadow-md w-full md:w-48">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          onClick={subItem.onClick}
                          className="block px-4 py-2 text-brand-secondary hover:bg-brand-bg transition-colors"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a
                href={item.href}
                onClick={item.onClick}
                className="block px-4 py-2 hover:bg-brand-primary/80 transition-colors"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
