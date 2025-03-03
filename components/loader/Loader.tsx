// components/loader/Loader.tsx
import React from "react";

type SkeletonProps = {
  width?: string;
  height?: string;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  className = "",
}) => {
  return (
    <div
      className={`bg-brand-bg/50 animate-pulse rounded-md ${className}`}
      style={{ width, height }}
    />
  );
};

type LoaderProps = {
  isLoading: boolean;
  children: React.ReactNode;
  skeletonCount?: number; // Number of skeleton rows
};

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  children,
  skeletonCount = 3,
}) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="space-y-2">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

export { Loader, Skeleton };
