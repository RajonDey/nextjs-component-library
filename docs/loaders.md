# Loading States Feature

A reusable loading component with skeleton placeholders for content.

## Features
- Toggles between loading state and content.
- Customizable skeleton rows and sizes.
- Branded with NextLib’s design system.

## How It Was Built
- **Components**: `Loader` and `Skeleton`, built with React and TypeScript.
- **Styling**: Uses `brand-bg` with `animate-pulse` via Tailwind CSS.
- **Demo**: A page (`/loaders`) with default and custom skeleton examples.

## Project Structure
```
components/
├── loader/
│   └── Loader.tsx    # Loader and Skeleton components
app/
├── loaders/
│   └── page.tsx      # Demo page
```


## Prerequisites
- NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/loader/` into your project.
2. Ensure `components/index.tsx` exports `Loader` and `Skeleton`.

## Usage
```tsx
import { Loader, Skeleton } from "../components";
import { useState } from "react";

function MyPage() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Loader isLoading={isLoading} skeletonCount={2}>
      <p>Content here</p>
    </Loader>
  );
}

// Custom Skeleton
function CustomLoader() {
  const [isLoading, setIsLoading] = useState(true);
  return isLoading ? (
    <Skeleton width="200px" height="20px" />
  ) : (
    <p>Loaded content</p>
  );
}
```
- Visit /loaders to see the demo.

## What You Get
- A Loader component for wrapping content with skeletons.
- A Skeleton component for custom placeholders.
- A demo page with loading examples.

## Customization & Extensions
- **Skeleton**: Adjust width, height, or add className for styling.
- **Loader**: Change skeletonCount for more/fewer rows.
- **Animation**: Modify animate-pulse or add custom animations.

## Limitations
- Static skeleton count (extend for dynamic layouts).
- No content-specific skeletons (add variants).

## Next Steps
- Add skeleton variants (e.g., card, list).
- Integrate with API loading states.