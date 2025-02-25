# Form Validation Feature

A reusable form component with built-in validation using `react-hook-form`.

## Features
- Configurable input fields with labels, types, and validation rules.
- Real-time error messages.
- Responsive and branded with NextLib’s design system.

## How It Was Built
- **Component**: Client Component (`"use client"`) using `react-hook-form` for validation, built with React and TypeScript.
- **Styling**: Uses `brand-primary` for buttons/accents, `brand-secondary` for text, and `brand-accent` for errors via Tailwind CSS.
- **Demo**: A page (`/form-validation`) with a sample signup form.

## Project Structure
```
components/
├── form/
│   └── ValidatedForm.tsx    # Form Validation component
app/
├── form-validation/
│   └── page.tsx            # Demo page
```

## Prerequisites
- NextLib setup (Next.js 15, TypeScript, Tailwind CSS).
- `react-hook-form` (already in dependencies).

## Installation
1. Copy `components/form/` and `app/form-validation/` into your Next.js project.
2. Ensure `components/index.tsx` exports `ValidatedForm`.

## Usage
```tsx
import { ValidatedForm } from "../components";

const fields = [
  { name: "username", label: "Username", validation: { required: "Required" } },
  { name: "email", label: "Email", type: "email", validation: { required: "Required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } } },
];

function MyPage() {
  const handleSubmit = (data) => console.log(data);
  return <ValidatedForm fields={fields} onSubmit={handleSubmit} submitLabel="Save" />;
}
```

## What You Get
- A reusable ValidatedForm component with validation and error handling.
- A demo page with a sample form.

## Customization & Extensions
- Validation Rules: Add rules (e.g., maxLength, min):
```tsx
validation: { required: "Required", maxLength: { value: 20, message: "Too long" } }
```

## Field Types
- Extend to support more input types (e.g., textarea, checkbox).

## Limitations
- Basic input support (extend for complex fields).
- Static demo data (replace with real submission logic).

## Next Steps
- Add support for custom field components.
- Integrate with APIs for form submission.