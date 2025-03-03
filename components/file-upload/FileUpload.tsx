// components/file-upload/FileUpload.tsx
"use client";

import React, { ChangeEvent, useState } from "react";

type FileUploadProps = {
  onFilesChange: (files: File[]) => void;
  multiple?: boolean;
  accept?: string; // e.g., "image/*,.pdf"
  maxSize?: number; // in bytes
};

const FileUpload: React.FC<FileUploadProps> = ({
  onFilesChange,
  multiple = false,
  accept,
  maxSize = 5 * 1024 * 1024, // Default: 5MB
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    // Reset error
    setError(null);

    // Check file size
    const oversizedFiles = files.filter((file) => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      setError(`File(s) exceed max size of ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    onFilesChange(files);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-brand-primary/20 border-dashed rounded-md cursor-pointer bg-brand-bg hover:bg-brand-primary/10 transition-colors"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 text-brand-secondary mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V4m0 12l-4-4m4 4l4-4m-4 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h12"
              />
            </svg>
            <p className="text-sm text-brand-secondary">
              {multiple
                ? "Drop files here or click to upload"
                : "Drop a file here or click to upload"}
            </p>
            {maxSize && (
              <p className="text-xs text-brand-secondary/80">
                Max size: {(maxSize / (1024 * 1024)).toFixed(1)}MB
              </p>
            )}
          </div>
          <input
            id="file-upload"
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
      {error && <p className="text-brand-accent text-sm">{error}</p>}
    </div>
  );
};

export default FileUpload;
