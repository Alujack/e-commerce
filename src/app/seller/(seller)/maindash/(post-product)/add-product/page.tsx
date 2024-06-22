"use client"
import { useState, useEffect, useContext } from 'react';
import {DataContext} from '@/context/productContext';

const ProductInformationForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', description: '',shortDescription:'', priceCurrency:'', price: '' });
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { pageData, updatePageData } = context;

  useEffect(() => {
    if (pageData && pageData.page1 ) {
      setFormData(pageData.page1);
    }
  }, [pageData.page1]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    updatePageData('page1', newFormData);
  };

  const handleNext = () => {
    console.log(formData);
  }

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
        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Product Short Description</label>
        <input
          type="text"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">Product Images</label>
        <div id="images" className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32">
          <span className="text-gray-500">Browser or Desktop</span>
        </div>
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
        <label htmlFor="priceCurrency" className="block text-sm font-medium text-gray-700">Product Price Currency</label>
        <select
          name="priceCurrency"
          value={formData.priceCurrency}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Unselected</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currencies as needed */}
        </select>
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
      <button type="button" onClick={handleNext}>Continue</button>
    </form>
  );
};

export default ProductInformationForm;
