// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center py-16 px-4">
      {/* Title */}
      <h1 className="text-5xl font-bold text-brand-secondary">NextLib</h1>

      {/* Tagline */}
      <p className="text-xl text-brand-secondary/80 max-w-2xl">
        A lightweight, reusable component library built with Next.js,
        TypeScript, and Tailwind CSS. Start building faster with pre-designed
        features.
      </p>

      {/* Call to Action */}
      <div className="space-x-6">
        <Link
          href="/login"
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-md hover:bg-brand-primary/80 transition-colors"
        >
          Try Authentication
        </Link>
        <Link
          href="https://github.com/yourusername/my-component-library" // Replace with your repo URL
          className="inline-block text-brand-primary hover:underline"
        >
          View on GitHub
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-brand-secondary mb-6">
          Available Features
        </h2>
        <ul className="space-y-4 text-brand-secondary/80 text-left">
          <li>
            <span className="font-medium text-brand-secondary">
              Authentication
            </span>{" "}
            - Login, signup, forgot password, and a protected dashboard.
          </li>
          <li className="text-brand-secondary/50">
            <span className="font-medium">Pagination</span> - Coming soon!
          </li>
          <li className="text-brand-secondary/50">
            <span className="font-medium">Search</span> - Coming soon!
          </li>
        </ul>
      </div>
    </div>
  );
}
