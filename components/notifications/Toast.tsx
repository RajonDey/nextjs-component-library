// components/notifications/Toast.tsx
import React from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-brand-accent"
      : "bg-brand-primary";

  return (
    <div
      className={`${bgColor} text-white p-4 rounded-md shadow-md flex justify-between items-center max-w-sm`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
