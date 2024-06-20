"use client"


import React, { useState } from 'react';

const LogisticsShipmentInformation = () => {
  const [containerType, setContainerType] = useState<string>('Box');
  const [quantity, setQuantity] = useState<number>(42);
  const [productDimensions, setProductDimensions] = useState<string>('20 x 20 x 30');
  const [productWeight, setProductWeight] = useState<number>(30);

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
            value={containerType} 
            onChange={(e) => setContainerType(e.target.value)}
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
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Product Dimensions (H x W x D)</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={productDimensions} 
            onChange={(e) => setProductDimensions(e.target.value)}
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
            value={productWeight} 
            onChange={(e) => setProductWeight(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default LogisticsShipmentInformation;
