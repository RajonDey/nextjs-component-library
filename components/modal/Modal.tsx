// components/modal/Modal.tsx
"use client";

import React, { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md shadow-md max-w-lg w-full mx-4 p-6 border border-brand-primary/20"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-brand-secondary">{title}</h2>
            <button
              onClick={onClose}
              className="text-brand-secondary hover:text-brand-accent focus:outline-none"
            >
              ×
            </button>
          </div>
        )}
        <div className="text-brand-secondary/80">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
