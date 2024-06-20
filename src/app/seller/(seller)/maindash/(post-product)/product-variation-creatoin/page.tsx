"use client"
import React, { useState } from 'react';

const ProductVariantCreation = () => {
  const [color, setColor] = useState<string>('Red');
  const [size, setSize] = useState<string>('70x140 cm');
  const [pattern, setPattern] = useState<string>('Tropical Print');
  const [edgeDesign, setEdgeDesign] = useState<string>('Stitched');

  const sizes = ['70x140 cm', '80x160 cm', '100x180 cm'];
  const colors = ['Red', 'Blue'];

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Product Variant Creation</h1>
      
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Color</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={color} 
            onChange={(e) => setColor(e.target.value)}
          >
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Size</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={size} 
            onChange={(e) => setSize(e.target.value)}
          >
            {sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Pattern</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={pattern} 
            onChange={(e) => setPattern(e.target.value)}
          >
            <option value="Tropical Print">Tropical Print</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Edge Design</label>
          <select 
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={edgeDesign} 
            onChange={(e) => setEdgeDesign(e.target.value)}
          >
            <option value="Stitched">Stitched</option>
          </select>
        </div>
      </div>

      <h2 className="text-lg font-medium mb-4">Product Options</h2>
      <div className="grid gap-4 mb-6 md:grid-cols-3">
        {colors.map((colorOption) => 
          sizes.map((sizeOption) => (
            <div 
              key={`${colorOption}-${sizeOption}`} 
              className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer"
            >
              <img src="path-to-image" alt={`${colorOption} & ${sizeOption}`} className="w-16 h-16 mx-auto mb-2"/>
              <p className="text-center">{colorOption} & {sizeOption}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductVariantCreation;
