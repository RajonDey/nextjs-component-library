// components/auth/LoginForm.tsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import AuthContainer from "./AuthContainer";

type LoginData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter(); // For redirecting

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        // Save user data to localStorage (for MVP simplicity)
        localStorage.setItem("user", JSON.stringify(result.data));
        setMessage(`Logged in as ${result.data.name}`);
        // Redirect to dashboard after a short delay to show the message
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <AuthContainer title="Login" onSubmit={handleSubmit(onSubmit)}>
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

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>

      {message && (
        <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
      )}

      <p className="text-sm text-center mt-2">
        <a href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </p>
    </AuthContainer>
  );
};

export default LoginForm;
