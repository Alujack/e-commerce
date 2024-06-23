"use client"

import React, { useState, useEffect, useContext } from 'react';
import {DataContext} from '@/context/productContext';

const LogisticsShipmentInformation: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { pageData, updatePageData } = context;

  const [formData, setFormData] = useState({
    containerType: 'Box',
    quantity: 42,
    productDimensions: '20 x 20 x 30',
    productWeight: 30,
  });

  useEffect(() => {
    if (pageData.page2) {
      setFormData(pageData.page2);
    }
  }, [pageData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: name === 'quantity' || name === 'productWeight' ? parseInt(value) : value,
    };
    setFormData(newFormData);
    updatePageData('page2', newFormData);
  };

  const containerTypes = ['Box', 'Crate', 'Pallet'];
  const dimensions = ['20 x 20 x 30', '30 x 30 x 40', '40 x 40 x 50'];

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Logistics and Shipment Information</h1>
      
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Container Type</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            name="containerType"
            value={formData.containerType} 
            onChange={handleInputChange}
          >
            {containerTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Quantity in Container</label>
          <input 
            type="number"
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            name="quantity"
            value={formData.quantity} 
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Product Dimensions (H x W x D)</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            name="productDimensions"
            value={formData.productDimensions} 
            onChange={handleInputChange}
          >
            {dimensions.map((dim) => (
              <option key={dim} value={dim}>{dim}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Product Weight</label>
          <input 
            type="number"
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            name="productWeight"
            value={formData.productWeight} 
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default LogisticsShipmentInformation;
