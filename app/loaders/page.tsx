// app/loaders/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Loader, Skeleton } from "../../components";

export default function LoadersPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Loading States Demo
      </h1>

      {/* Loader with Default Skeleton */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold text-brand-secondary mb-4">
          Default Loader
        </h2>
        <Loader isLoading={isLoading}>
          <div className="space-y-2">
            <div className="bg-white p-4 rounded-md shadow-md border border-brand-primary/20">
              <p className="text-brand-secondary">Content Item 1</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md border border-brand-primary/20">
              <p className="text-brand-secondary">Content Item 2</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md border border-brand-primary/20">
              <p className="text-brand-secondary">Content Item 3</p>
            </div>
          </div>
        </Loader>
      </div>

      {/* Custom Skeleton */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold text-brand-secondary mb-4">
          Custom Skeleton
        </h2>
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton width="50%" height="2rem" />
            <Skeleton width="80%" height="1.5rem" />
            <Skeleton width="100%" height="1rem" />
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-2xl font-bold text-brand-secondary">Title</p>
            <p className="text-lg text-brand-secondary">Subtitle</p>
            <p className="text-brand-secondary">Description text here.</p>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsLoading(true)}
        className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/80"
      >
        Reload
      </button>
    </div>
  );
}
