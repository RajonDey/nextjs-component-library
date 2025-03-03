// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-brand-bg text-brand-secondary">
      {/* Hero */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
        NextLib ✨
      </h1>
      <p className="text-xl md:text-2xl text-brand-secondary/80 max-w-xl text-center mb-8">
        Build faster with a sleek, reusable component library for Next.js 15 🚀
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link
          href="https://github.com/RajonDey/nextjs-component-library"
          className="bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/80 transition-all shadow-md"
        >
          Explore Features 🌟
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-brand-primary px-6 py-3 rounded-full border border-brand-primary/20 hover:bg-brand-primary/10 transition-all shadow-md"
        >
          GitHub 👀
        </Link>
      </div>

      {/* Star Request */}
      <p className="text-sm text-brand-secondary/70 mb-8">
        Loving NextLib? Give us a ⭐ on GitHub—it fuels our passion! 🙌
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/authentication"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Auth 🔒
          </h3>
          <p className="text-sm text-brand-secondary/80">Login, signup, more</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/pagination"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Pagination 📄
          </h3>
          <p className="text-sm text-brand-secondary/80">Page navigation</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/search-filters"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Search 🔍
          </h3>
          <p className="text-sm text-brand-secondary/80">Filter data</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/data-table"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Data Table 📑
          </h3>
          <p className="text-sm text-brand-secondary/80">Tabular display</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/data-grid"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Data Grid 📊
          </h3>
          <p className="text-sm text-brand-secondary/80">All-in-one data</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/form-validation"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Forms ✅
          </h3>
          <p className="text-sm text-brand-secondary/80">Validated inputs</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/notifications"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Toasts 🔔
          </h3>
          <p className="text-sm text-brand-secondary/80">Pop-up messages</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/file-upload"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            File Upload 📤
          </h3>
          <p className="text-sm text-brand-secondary/80">Upload with ease</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/modals"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Modals 📥
          </h3>
          <p className="text-sm text-brand-secondary/80">Popup dialogs</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/dropdowns"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Menu 🍔
          </h3>
          <p className="text-sm text-brand-secondary/80">Dropdown navigation</p>
        </Link>
        <Link
          href="https://github.com/RajonDey/nextjs-component-library/tree/feature/loaders"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-md border border-brand-primary/10 hover:bg-brand-bg/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-brand-secondary">
            Loaders ⏳
          </h3>
          <p className="text-sm text-brand-secondary/80">Skeleton states</p>
        </Link>
      </div>
    </div>
  );
}
