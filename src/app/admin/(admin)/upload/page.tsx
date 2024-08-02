// UploadForm.tsx
"use client"

import React, { useState } from 'react';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle file upload logic here
    console.log('File uploaded:', file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block w-[100px] h-[100px] text-gray-700 text-sm font-bold mb-2 border-2 border-sky-500" htmlFor="file">
            <img src="/images/user.png" alt="" />
          </label>
             <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-gray-300 w-full h-full rounded-lg p-2 hidden"
          />         
        </div>
        {file && (
          <div className="mb-4">
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;

