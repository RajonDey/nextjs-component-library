// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#2dd4bf", // Teal
        "brand-secondary": "#1e293b", // Slate
        "brand-bg": "#f1f5f9", // Light gray
        "brand-accent": "#e11d48", // Red
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Use Inter
      },
    },
  },
  plugins: [],
};
