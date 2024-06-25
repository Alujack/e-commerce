"use client"
import React, { useState } from 'react';

const categories = [
  {
    name: 'Clearance',
    subcategories: ['Sale Items', 'Discounted Products','Sale Items', 'Discounted Products','Sale Items', 'Discounted Products']
  },
  {
    name: 'Accessories',
    subcategories: ['Jewelry', 'Bags', 'Watches','Jewelry', 'Bags', 'Watches','Jewelry', 'Bags', 'Watches']
  },
  {
    name: 'Home & Lifestyle',
    subcategories: ['Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Health & Beauty',
    subcategories: ['Skincare', 'Makeup', 'Wellness','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Groceries & Pet',
    subcategories: ['Food', 'Pet Supplies','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Baby’s & Toys',
    subcategories: ['Toys', 'Baby Gear','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Networking',
    subcategories: ['Routers', 'Switches','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Sport & Outdoor',
    subcategories: ['Fitness', 'Outdoor Gear','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Medicine',
    subcategories: ['Prescription', 'OTC','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Electronic',
    subcategories: ['Gadgets', 'Accessories','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Man’s Fashion',
    subcategories: ['Clothing', 'Shoes','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Woman’s Fashion',
    subcategories: ['Dresses', 'Shoes','Furniture', 'Decor', 'Kitchen','Furniture', 'Decor', 'Kitchen']
  }
];

const CategoryList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md relative">
      <h2 className="text-xl font-bold text-red-500 mb-4">CATEGORY</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name} className="relative">
            <button
              className="w-full text-left text-black font-medium focus:outline-none"
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
            </button>
            {activeCategory === category.name && (
              <ul className="absolute left-full top-0 mt-0 ml-[30px] p-[15px] bg-transparent rounded-md space-y-1">
                {category.subcategories.map((sub) => (
                  <li key={sub} className="hover:text-black cursor-pointer">{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
