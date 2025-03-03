// app/file-upload/page.tsx
"use client";

import { useState } from "react";
import { FileUpload } from "../../components";

export default function FileUploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFilesChange = (files: File[]) => {
    setUploadedFiles(files);
    console.log("Uploaded Files:", files);
  };

  return (
    <div className="flex flex-col items-center space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold text-brand-secondary">
        File Upload Demo
      </h1>
      <div className="w-full max-w-md">
        <FileUpload
          onFilesChange={handleFilesChange}
          multiple={true}
          accept="image/*,.pdf"
          maxSize={2 * 1024 * 1024} // 2MB limit
        />
      </div>
      {uploadedFiles.length > 0 && (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold text-brand-secondary mb-2">
            Uploaded Files:
          </h2>
          <ul className="space-y-2 text-brand-secondary/80">
            {uploadedFiles.map((file) => (
              <li key={file.name} className="bg-brand-bg p-2 rounded-md">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
