// app/form-validation/page.tsx
"use client";

import { ValidatedForm } from "@/components/iedex";



type FormData = {
  username: string;
  email: string;
  password: string;
};

export default function FormValidationPage() {
  const fields = [
    {
      name: "username",
      label: "Username",
      placeholder: "Enter your username",
      validation: {
        required: "Username is required",
        minLength: { value: 3, message: "Username must be at least 3 characters" },
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: {
        required: "Email is required",
        pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
      },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      validation: {
        required: "Password is required",
        minLength: { value: 6, message: "Password must be at least 6 characters" },
      },
    },
  ];

  const handleSubmit = (data: FormData) => {
    console.log("Form Submitted:", data); // Handle response
    alert("Form submitted successfully: " + JSON.stringify(data)); // Success feedback
  };

  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">Form Validation Demo</h1>
      <div className="w-full max-w-md">
        <ValidatedForm fields={fields} onSubmit={handleSubmit} submitLabel="Sign Up" />
      </div>
    </div>
  );
}