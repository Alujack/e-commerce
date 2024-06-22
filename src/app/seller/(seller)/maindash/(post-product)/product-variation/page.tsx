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
  const [selectedMaterial, setSelectedMaterial] = useState('100% Cotton');
  const [selectedProductionTechnique, setSelectedProductionTechnique] = useState('Machine Woven');
  const [selectedWeight, setSelectedWeight] = useState('300 g/m²');
  const [selectedAbsorbency, setSelectedAbsorbency] = useState('Quick-Drying');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (pageData.productDetail) {
      setSelectedCategory(pageData.productDetail.selectedCategory);
      setSelectedMaterial(pageData.productDetail.selectedMaterial);
      setSelectedProductionTechnique(pageData.productDetail.selectedProductionTechnique);
      setSelectedWeight(pageData.productDetail.selectedWeight);
      setSelectedAbsorbency(pageData.productDetail.selectedAbsorbency);
      setSelectedTags(pageData.productDetail.selectedTags || []);
    }
  }, [pageData]);

  const handleCategoryChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedCategory(newValue);
    updatePageData('productDetail', { ...pageData.productDetail, selectedCategory: newValue });
  };

  const handleMaterialChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedMaterial(newValue);
    updatePageData('productDetail', { ...pageData.productDetail, selectedMaterial: newValue });
  };

  const handleProductionTechniqueChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedProductionTechnique(newValue);
    updatePageData('productDetail', { ...pageData.productDetail, selectedProductionTechnique: newValue });
  };

  const handleWeightChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedWeight(newValue);
    updatePageData('productDetail', { ...pageData.productDetail, selectedWeight: newValue });
  };

  const handleAbsorbencyChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedAbsorbency(newValue);
    updatePageData('productDetail', { ...pageData.productDetail, selectedAbsorbency: newValue });
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
      <h1 className="text-2xl font-bold mb-4">Product Specification</h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="mb-4">
          <label htmlFor="material" className="block mb-2 text-gray-700">
            Material
          </label>
          <select
            id="material"
            value={selectedMaterial}
            onChange={handleMaterialChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="100% Cotton">100% Cotton</option>
            <option value="Microfiber">Microfiber</option>
            <option value="Bamboo">Bamboo</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="productionTechnique" className="block mb-2 text-gray-700">
            Production Technique
          </label>
          <select
            id="productionTechnique"
            value={selectedProductionTechnique}
            onChange={handleProductionTechniqueChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Machine Woven">Machine Woven</option>
            <option value="Hand Woven">Hand Woven</option>
            <option value="Knitted">Knitted</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block mb-2 text-gray-700">
            Weight
          </label>
          <select
            id="weight"
            value={selectedWeight}
            onChange={handleWeightChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="300 g/m²">300 g/m²</option>
            <option value="400 g/m²">400 g/m²</option>
            <option value="500 g/m²">500 g/m²</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="absorbency" className="block mb-2 text-gray-700">
            Absorbency
          </label>
          <select
            id="absorbency"
            value={selectedAbsorbency}
            onChange={handleAbsorbencyChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Quick-Drying">Quick-Drying</option>
            <option value="High Absorbency">High Absorbency</option>
            <option value="Ultra-Absorbent">Ultra-Absorbent</option>
          </select>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Product Tags</h2>
      <div className="grid grid-cols-4 gap-4">
        {[
          'Pure Cotton Beach Towel', 'Beach Towel Essential', 'Soft & Plush Beach Towel', 
          'Rapid Dry Beach Towel', 'Elegant Embossed', 'Vibrant Colors', 
          'Lightweight & Compact', 'Sand Resistant', 'Stylish Design', 'Dermatologist Approved'
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
    </div>
  );
};

export default ProductDetail;
