"use client"
import React, { useState, useContext, useEffect } from 'react';
import {DataContext} from '@/context/productContext';

const ProductDetail: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { pageData, updatePageData } = context;

  const [selectedCategory, setSelectedCategory] = useState('Beach Towels');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (pageData.productDetail) {
      setSelectedCategory(pageData.productDetail.selectedCategory);
      setSelectedTags(pageData.productDetail.selectedTags || []);
    }
  }, [pageData]);

  const handleCategoryChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedCategory(newValue);
    updatePageData('productDetail', { ...pageData.productDetail, selectedCategory: newValue });
  };

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      const newTags = [...selectedTags, tag];
      setSelectedTags(newTags);
      updatePageData('productDetail', { ...pageData.productDetail, selectedTags: newTags });
    }
  };

  return (
    <div className="p-[30px] w-[75%]">
      <h1 className="text-2xl font-bold mb-4">Product Detail Information</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 text-gray-700">
          Product Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="Beach Towels">Beach Towels</option>
          <option value="Home & Living">Home & Living</option>
          <option value="Bathroom">Bathroom</option>
        </select>
      </div>
       <h2 className="text-xl font-bold mb-4">Product Tags</h2>
      <div className="grid grid-cols-4 gap-4">
        {[
          'Size','Color'
        ].map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${selectedTags.includes(tag) ? 'bg-blue-200' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <h1 className="text-2xl font-bold mb-4">Product Specification</h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="mb-4">
          <label htmlFor="material" className="block mb-2 text-gray-700">
            Attribute
          </label>
          <input type="text" className="border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
      </div>
     
    </div>
  );
};

export default ProductDetail;
