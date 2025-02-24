// components/auth/ForgotPasswordForm.tsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";

type ForgotPasswordData = {
  email: string;
};

const ForgotPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        setMessage(result.data.message);
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <AuthContainer title="Forgot Password" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Send Reset Link
      </button>

      {message && (
        <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
      )}
    </AuthContainer>
  );
};

export default ForgotPasswordForm;
