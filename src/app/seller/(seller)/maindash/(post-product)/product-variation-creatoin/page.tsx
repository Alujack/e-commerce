"use client"
import React, { useState, useContext, useEffect } from 'react';
import {DataContext }from '@/context/productContext';

const ProductPricing: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { pageData, updatePageData } = context;

  const [basePrice, setBasePrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  useEffect(() => {
    if (pageData.productPricing) {
      setBasePrice(pageData.productPricing.basePrice);
      setDiscount(pageData.productPricing.discount);
      setFinalPrice(pageData.productPricing.finalPrice);
    }
  }, [pageData]);

  const handleBasePriceChange = (e: any) => {
    const newBasePrice = parseFloat(e.target.value);
    setBasePrice(newBasePrice);
    calculateFinalPrice(newBasePrice, discount);
  };

  const handleDiscountChange = (e: any) => {
    const newDiscount = parseFloat(e.target.value);
    setDiscount(newDiscount);
    calculateFinalPrice(basePrice, newDiscount);
  };

  const calculateFinalPrice = (base: number, disc: number) => {
    const final = base - (base * disc) / 100;
    setFinalPrice(final);
    updatePageData('productPricing', { basePrice: base, discount: disc, finalPrice: final });
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Product Pricing</h1>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Base Price</label>
        <input
          type="number"
          value={basePrice}
          onChange={handleBasePriceChange}
          className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Discount (%)</label>
        <input
          type="number"
          value={discount}
          onChange={handleDiscountChange}
          className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Final Price</label>
        <input
          type="number"
          value={finalPrice}
          readOnly
          className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default ProductPricing;
