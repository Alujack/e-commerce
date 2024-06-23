"use client"

import React, { useState, useContext, useEffect } from 'react';
import {DataContext} from '@/context/productContext';


const BulkPurchaseDiscounts = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { pageData, updatePageData,submitData } = context;

  const [productQuantity, setProductQuantity] = useState<string>('0 - 100 Amount Products');
  const [discount, setDiscount] = useState<string>('% 8');

  useEffect(() => {
    if (pageData.bulkPurchaseDiscounts) {
      setProductQuantity(pageData.bulkPurchaseDiscounts.productQuantity);
      setDiscount(pageData.bulkPurchaseDiscounts.discount);
    }
  }, [pageData]);

  const quantities = ['0 - 100 Amount Products', '101 - 200 Amount Products', '201 - 300 Amount Products'];
  const discounts = ['% 5', '% 10', '% 15', '% 20'];

  const handleProductQuantityChange = (e: any) => {
    const newQuantity = e.target.value;
    setProductQuantity(newQuantity);
    updatePageData('bulkPurchaseDiscounts', { productQuantity: newQuantity, discount });
  };

  const handleDiscountChange = (e: any) => {
    const newDiscount = e.target.value;
    setDiscount(newDiscount);
    updatePageData('bulkPurchaseDiscounts', { productQuantity, discount: newDiscount });
  };
const handleSubmit = () => {
    // Call the submitData function when the button is clicked
    submitData();
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Bulk Purchase Discounts</h1>
      
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">Product Quantity</label>
        <select 
          className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          value={productQuantity} 
          onChange={handleProductQuantityChange}
        >
          {quantities.map((quantity) => (
            <option key={quantity} value={quantity}>{quantity}</option>
          ))}
        </select>
        <p className="mt-2 text-sm text-gray-500">How many product purchases do you want to determine the product discount?</p>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">Discount</label>
        <select 
          className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          value={discount} 
          onChange={handleDiscountChange}
        >
          {discounts.map((discountOption) => (
            <option key={discountOption} value={discountOption}>{discountOption}</option>
          ))}
        </select>
        <p className="mt-2 text-sm text-gray-500">What percentage discount do you want to set?</p>
      </div>
      <button onClick={handleSubmit}> handle </button>
    </div>
  );
}

export default BulkPurchaseDiscounts;
