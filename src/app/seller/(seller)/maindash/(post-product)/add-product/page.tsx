"use client"
import React, { useState } from 'react';
import { useProductContext } from '@/context/productContext';
const ProductInformationForm: React.FC = () => {
  const {name, description, productprice , setProductData } = useProductContext();
  const [productName, setProductName] = useState<string>('');
  const [productShortDescription, setProductShortDescription] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPriceCurrency, setProductPriceCurrency] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleProductShortDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductShortDescription(e.target.value);
  };

  const handleProductDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductDescription(e.target.value);
  };

  const handleProductPriceCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductPriceCurrency(e.target.value);
  };

  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value);
  };
  const handleNext = ()=>{
  setProductData({name:productName, description:productDescription, productprice:Number(productPrice)})
console.log(name);
}

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Product Information</h2>
      
      <div className="mb-4">
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleProductNameChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {productName === '' && <span className="text-red-500 text-xs">Please enter text only</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="productShortDescription" className="block text-sm font-medium text-gray-700">Product Short Description</label>
        <input
          type="text"
          id="productShortDescription"
          value={productShortDescription}
          onChange={handleProductShortDescriptionChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productImages" className="block text-sm font-medium text-gray-700">Product Images</label>
        <div id="productImages" className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32">
          <span className="text-gray-500">Browser or Desktop</span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Product Description</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={handleProductDescriptionChange}
          maxLength={800}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productPriceCurrency" className="block text-sm font-medium text-gray-700">Product Price Currency</label>
        <select
          id="productPriceCurrency"
          value={productPriceCurrency}
          onChange={handleProductPriceCurrencyChange}
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
        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Product Price</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={handleProductPriceChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {productPrice === '' && <span className="text-red-500 text-xs">Please enter the product currency first.</span>}
      </div>
      <button onClick={handleNext}>Contine</button>
    </form>
  );
};

export default ProductInformationForm;
