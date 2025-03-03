// app/notifications/page.tsx
"use client";

import { useToast } from "../../components";

export default function NotificationsPage() {
  const { addToast } = useToast();

  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">
        Notifications Demo
      </h1>
      <div className="space-x-4">
        <button
          onClick={() => addToast("Operation successful!", "success")}
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/80"
        >
          Success Toast
        </button>
        <button
          onClick={() => addToast("Something went wrong!", "error")}
          className="bg-brand-accent text-white px-4 py-2 rounded-md hover:bg-brand-accent/80"
        >
          Error Toast
        </button>
        <button
          onClick={() => addToast("Here’s some info.", "info")}
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/80"
        >
          Info Toast
        </button>
      </div>
    </div>
  );
}
