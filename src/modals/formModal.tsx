// components/modals/DynamicModal.tsx
import React, { ChangeEvent, FormEvent, useState, useCallback } from 'react';

type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'file' | 'select'; // Added 'select' type
  options?: string[]; // Options for select input
};

type DynamicModalProps = {
  heading: string;
  isVisible: boolean;
  onClose: () => void;
  formFields: FormField[];
  onSubmit: (formData: { [key: string]: string | File | null }) => void;
};

const DynamicModal: React.FC<DynamicModalProps> = ({ heading, isVisible, onClose, formFields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string | File | null }>(() =>
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: field.type === 'select' ? '' : '' }), {})
  );

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 100, left: 100 });

 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? (files ? files[0] : null) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  }, [position.left, position.top]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      });
    }
  }, [isDragging, offset.y, offset.x]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bg-gray-800 bg-opacity-75 z-50"
      style={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        onMouseDown={handleMouseDown}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">{heading}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
             {field.type === 'file' ? (
                <input
                  type="file"
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm"
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] as string || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>Select an option</option>
                  {field.options?.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] as string || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicModal;
