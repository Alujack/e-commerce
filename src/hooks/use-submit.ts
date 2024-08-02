import { useState } from 'react';

type FormField = {
  name: string;
  type: 'text' | 'email' | 'file'; // Add more types as needed
};

type FormData = { [key: string]: string | File | null };

type UseDynamicSubmitProps = {
  initialValues: FormData;
  onSubmit: (formData: FormData) => void;
};

export const useDynamicSubmit = ({ initialValues, onSubmit }: UseDynamicSubmitProps) => {
  const [formData, setFormData] = useState<FormData>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? (files ? files[0] : null) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
