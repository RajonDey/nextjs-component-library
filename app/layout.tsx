// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NextLib - Component Library",
  description: "A reusable component library built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased text-brand-secondary`}
      >
        <header className="bg-brand-primary text-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">NextLib</h1>
        </header>
        <main className="min-h-screen p-4">{children}</main>
        <footer className="bg-brand-secondary text-white p-4 text-center">
          <p>© 2025 NextLib. A reusable component library.</p>
        </footer>
      </body>
    </html>
  );
}
