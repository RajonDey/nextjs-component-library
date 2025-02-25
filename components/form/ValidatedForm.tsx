// components/form/ValidatedForm.tsx
"use client";

import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type InputField = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  validation?: {
    required?: string | boolean;
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
};

type ValidatedFormProps<T extends FieldValues> = {
  fields: InputField[];
  onSubmit: SubmitHandler<T>;
  submitLabel?: string;
};

const ValidatedForm = <T extends FieldValues>({
  fields,
  onSubmit,
  submitLabel = "Submit",
}: ValidatedFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 bg-white rounded-md shadow-md border border-brand-primary/20"
    >
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-brand-secondary mb-1"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder}
            {...register(field.name as keyof T, field.validation)} // Controlled input with validation
            className="px-4 py-2 border border-brand-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          {errors[field.name] && (
            <p className="text-brand-accent text-sm mt-1">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-brand-primary text-white py-2 rounded-md hover:bg-brand-primary/80 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default ValidatedForm;
