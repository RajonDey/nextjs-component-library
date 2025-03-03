# File Upload Feature

A reusable component for uploading files with size and type restrictions.

## Features
- Supports single or multiple file uploads.
- Configurable file type acceptance (e.g., images, PDFs).
- Size validation with error messages.
- Branded with NextLib’s design system.

## How It Was Built
- **Component**: Client Component (`"use client"`) using React and TypeScript.
- **Styling**: Uses `brand-primary` for borders, `brand-secondary` for text, and `brand-bg` for background via Tailwind CSS.
- **Demo**: A page (`/file-upload`) showing uploaded file details.

## Project Structure
```
components/
├── file-upload/
│   └── FileUpload.tsx    # File Upload component
app/
├── file-upload/
│   └── page.tsx         # Demo page
```


## Prerequisites
- NextLib setup (Next.js 15, TypeScript, Tailwind CSS).

## Installation
1. Copy `components/file-upload/` into your project.
2. Ensure `components/index.tsx` exports `FileUpload`.

## Usage
```tsx
import { FileUpload } from "../components";
import { useState } from "react";

function MyPage() {
  const [files, setFiles] = useState([]);
  return (
    <FileUpload
      onFilesChange={(files) => setFiles(files)}
      multiple={true}
      accept="image/*"
      maxSize={1024 * 1024} // 1MB
    />
  );
}
```
- Visit /file-upload to see the demo.


## What You Get
A reusable FileUpload component with validation.
A demo page listing uploaded files.

## Customization & Extensions
- **File Types**: Adjust accept prop (e.g., .pdf,image/*).
- **Size Limit**: Change maxSize in bytes (e.g., 10 * 1024 * 1024 for 10MB).
- **Styling**: Modify Tailwind classes in FileUpload.tsx.

## Limitations
- No upload to server (client-side only; add API integration).
- Basic error handling (extend for more cases).

## Next Steps
- Add server-side upload with an API.
- Support drag-and-drop functionality.