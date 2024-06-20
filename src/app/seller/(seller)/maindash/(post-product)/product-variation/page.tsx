"use client"
import { useState } from 'react';
const ProductDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beach Towels');
  const [selectedMaterial, setSelectedMaterial] = useState('100% Cotton');
  const [selectedProductionTechnique, setSelectedProductionTechnique] =
    useState('Machine Woven');
  const [selectedWeight, setSelectedWeight] = useState('300 g/m²');
  const [selectedAbsorbency, setSelectedAbsorbency] = useState('Quick-Drying');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCategoryChange = (e:any) => {
    setSelectedCategory(e.target.value);
  };

  const handleMaterialChange = (e:any) => {
    setSelectedMaterial(e.target.value);
  };

  const handleProductionTechniqueChange = (e:any) => {
    setSelectedProductionTechnique(e.target.value);
  };

  const handleWeightChange = (e:any) => {
    setSelectedWeight(e.target.value);
  };

  const handleAbsorbencyChange = (e:any) => {
    setSelectedAbsorbency(e.target.value);
  };

  const handleTagClick = (tag:string) => {
  
      setSelectedTags([...selectedTags, tag]);
    
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
      <div className= "grid grid-cols-2 gap-10">
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
        <label
          htmlFor="productionTechnique"
          className="block mb-2 text-gray-700"
        >
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
        <button
          onClick={() => handleTagClick('Pure Cotton Beach Towel')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Pure Cotton Beach Towel
        </button>
        <button
          onClick={() => handleTagClick('Beach Towel Essential')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Beach Towel Essential
        </button>
        <button
          onClick={() => handleTagClick('Soft & Plush Beach Towel')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Soft & Plush Beach Towel
        </button>
        <button
          onClick={() => handleTagClick('Rapid Dry Beach Towel')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Rapid Dry Beach Towel
        </button>
        <button
          onClick={() => handleTagClick('Elegant Embossed')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Elegant Embossed
        </button>
        <button
          onClick={() => handleTagClick('Vibrant Colors')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Vibrant Colors
        </button>
        <button
          onClick={() => handleTagClick('Lightweight & Compact')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Lightweight & Compact
        </button>
        <button
          onClick={() => handleTagClick('Sand Resistant')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Sand Resistant
        </button>
        <button
          onClick={() => handleTagClick('Stylish Design')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Stylish Design
        </button>
        <button
          onClick={() => handleTagClick('Dermatologist Approved')}
          className={`bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 `}
        >
          Dermatologist Approved
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
