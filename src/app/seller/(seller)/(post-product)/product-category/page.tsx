"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProduct } from '@/context/Product-Post';

interface Category {
  id: string;
  parent_category?: string;
  category_name: string;
  image?: string;
};

const CategorySelector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [newCategory, setNewCategory] = useState<string>('');
  const { product, setCategoryId } = useProduct();
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setCategoryId(category);
  };

  const handleAddCategory = () => {
    // Add logic for adding a new category if needed
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/store/category/get/${product.id}/`);
        if (response) {
          setCategoriesList(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategory();
  }, [product.id]);

  return (
    <div className="max-w-4xl max-h-3xl bg-white mx-auto p-2 shadow-md rounded-lg">
      <h2 className="text-[30px] font-[Poppins] text-green-600 mb-4">Select a category</h2>
      <input
        type="text"
        placeholder="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button onClick={handleAddCategory} className="mb-4 px-4 py-2 bg-green-600 text-white rounded">
        Add Category
      </button>
      <div className="p-[30px] pl-[10px]">
        {categoriesList.map((category) => (
          <div key={category.id} className="flex flex-col gap-[15px]">
            <div className="space-y-4">
              <input
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => handleSelect(category.id)}
                className="mr-2"
              />
              <span className="font-medium">{category.category_name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
