// app/modals/page.tsx
"use client";

import { useState } from "react";
import { Modal } from "../../components";

export default function ModalsPage() {
  const [isSimpleOpen, setIsSimpleOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">Modals Demo</h1>
      <div className="space-x-4">
        <button
          onClick={() => setIsSimpleOpen(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/80"
        >
          Simple Modal
        </button>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/80"
        >
          Form Modal
        </button>
      </div>

      {/* Simple Modal */}
      <Modal
        isOpen={isSimpleOpen}
        onClose={() => setIsSimpleOpen(false)}
        title="Simple Modal"
      >
        <p>
          This is a simple modal with some content. Click outside or press
          Escape to close.
        </p>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Form Modal"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-secondary">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-brand-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-2 rounded-md hover:bg-brand-primary/80"
            onClick={(e) => {
              e.preventDefault();
              setIsFormOpen(false);
              alert("Form submitted!");
            }}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
