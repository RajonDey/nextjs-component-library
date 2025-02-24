// components/auth/AuthContainer.tsx
import React from "react";

type AuthContainerProps = {
  title: string;
  children: React.ReactNode;
  onSubmit: (data: any) => void;
};

const AuthContainer: React.FC<AuthContainerProps> = ({
  title,
  children,
  onSubmit,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthContainer;
