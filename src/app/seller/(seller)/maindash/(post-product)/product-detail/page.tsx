
"use client"
import { useState } from 'react';

interface Category {
  name: string;
  path: string[];
}

const categories: Category[] = [
  { name: 'Beach Towels', path: ['Home&Living', 'Bathroom', 'Beach Towels'] },
  { name: 'Bath Towels', path: ['Home&Living', 'Bathroom', 'Bath Towels'] },
  { name: 'Tea Towels', path: ['Home&Living', 'Kitchen & Dining', 'Linens', 'Dishcloths & Kitchen Towels', 'Tea Towels'] },
  { name: 'Hooded Towels', path: ['Home&Living', 'Bathroom', 'Bath Towels', 'Hooded Towels'] },
  { name: 'Towel Racks & Rods', path: ['Home&Living', 'Bathroom', 'Bath Towels', 'Towel Racks & Rods'] },
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Beach Towels');

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-[15px]">
      <h2 className="text-[30px] font-[Poppins] text-green-600 mb-4">Select a category</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="p-[30px] pl-[10px]">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-[15px]">
            <div className="space-y-4">
            <input
              type="checkbox"
              checked={selectedCategory === category.name}
              onChange={() => handleSelect(category.name)}
              className="mr-2"
            />
            <span className="font-medium ">{category.name}</span>
            </div>
            
            <div className="ml-4 text-gray-500 text-sm">
              {category.path.join(' > ')}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-[50%] items-center p-2 bg-blue-600 text-white rounded">Save</button>
    </div>
  );
};

export default CategorySelector;
