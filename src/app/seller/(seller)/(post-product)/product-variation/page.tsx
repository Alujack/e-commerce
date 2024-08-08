"use client"
import React, { useState, useEffect } from 'react';
import { useProduct } from '@/context/Product-Post';
import axios from 'axios';

interface Variation {
  id: string;
  attribute_type: string;
}

const ProductDetail: React.FC = () => {
  const { categoryId, setVariations } = useProduct();
  const [variationList, setVariationList] = useState<Variation[]>([]);

  useEffect(() => {
    const fetchVariations = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/store/category/variations/get/${categoryId}/`);
        console.log(response.data);
        setVariationList(response.data);
      } catch (error) {
        console.error('Error fetching variations:', error);
      }
    };
    if (categoryId) {
      fetchVariations();
    }
  }, [categoryId]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVariations = Array.from(e.target.selectedOptions, option => {
      const variation = variationList.find(variation => variation.id === option.value);
      return variation ? { id: variation.id, attribute_type: variation.attribute_type } : null;
    }).filter(Boolean) as Variation[];
    
    setVariations(selectedVariations);
  }

  return (
    <div className="max-w-4xl max-h-3xl bg-white mx-auto p-2 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Product Detail Information</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 text-gray-700">
          Product Variations
        </label>
        <select
          name="variation"
          multiple
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
        >
          {variationList.map((option) => (
            <option key={option.id} value={option.id}>
              {option.attribute_type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductDetail;
