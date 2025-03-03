# Modals/Dialogs Feature

A reusable modal component for displaying content in a popup.

## Features
- Open/close control with state.
- Optional title with close button.
- Closes on Escape key or outside click.
- Branded with NextLib’s design system.

## How It Was Built
- **Component**: Client Component (`"use client"`) using React and TypeScript.
- **Styling**: Uses `brand-primary` for borders, `brand-secondary` for text via Tailwind CSS.
- **Demo**: A page (`/modals`) with simple and form modals.

## Project Structure
```
components/
├── modal/
│   └── Modal.tsx    # Modal component
app/
├── modals/
│   └── page.tsx     # Demo page
```


## Prerequisites
- NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/modal/` into your project.
2. Ensure `components/index.tsx` exports `Modal`.

## Usage
```tsx
import { Modal } from "../components";
import { useState } from "react";

function MyPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
}
```
- Visit /modals to see the demo.

## What You Get
- A reusable Modal component for popups.
- A demo page with simple and form examples.

## Customization & Extensions
- **Content**: Pass any ReactNode as children (e.g., forms, images).
- **Styling**: Modify Tailwind classes in Modal.tsx.
- **Behavior**: Add custom close triggers or animations.

## Limitations
- Basic styling (no animations yet).
- Single modal at a time (extend for stacking).

## Next Steps
- Add animation for open/close.
- Support multiple modals.