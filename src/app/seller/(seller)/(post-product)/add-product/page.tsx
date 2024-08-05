"use client"
import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { DataContext } from '@/context/productContext';

interface FormData {
  name: string;
  description: string;
  shortDescription: string;
  image: File | null;
  priceCurrency: string;
  price: string;
}

const ProductInformationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    shortDescription: '',
    image: null,
    priceCurrency: '',
    price: ''
  });

  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { pageData, updatePageData } = context;

  useEffect(() => {
    if (pageData && pageData.page1) {
      setFormData(pageData.page1);
    }
  }, [pageData.page1]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'image' && files && files.length > 0) {
      const file = files[0];
      const newFormData = { ...formData, [name]: file };
      setFormData(newFormData);
      updatePageData('page1', newFormData);
    } else {
      const newFormData = { ...formData, [name]: value };
      setFormData(newFormData);
      updatePageData('page1', newFormData);
    }
  };

  const handleNext = () => {
    console.log(formData);
  };

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Product Information</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {formData.name === '' && <span className="text-red-500 text-xs">Please enter text only</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {formData.image && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="w-full h-48 object-cover"
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          maxLength={800}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {formData.price === '' && <span className="text-red-500 text-xs">Please enter the product currency first.</span>}
      </div>
      
      <button type="button" onClick={handleNext}>{formData.price}</button>
    </form>
  );
};

export default ProductInformationForm;
