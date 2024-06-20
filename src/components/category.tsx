import React, { useState } from 'react';

const categories = [
  {
    name: 'Clearance',
    subcategories: ['Sale Items', 'Discounted Products']
  },
  {
    name: 'Accessories',
    subcategories: ['Jewelry', 'Bags', 'Watches']
  },
  {
    name: 'Home & Lifestyle',
    subcategories: ['Furniture', 'Decor', 'Kitchen']
  },
  {
    name: 'Health & Beauty',
    subcategories: ['Skincare', 'Makeup', 'Wellness']
  },
  {
    name: 'Groceries & Pet',
    subcategories: ['Food', 'Pet Supplies']
  },
  {
    name: 'Baby’s & Toys',
    subcategories: ['Toys', 'Baby Gear']
  },
  {
    name: 'Networking',
    subcategories: ['Routers', 'Switches']
  },
  {
    name: 'Sport & Outdoor',
    subcategories: ['Fitness', 'Outdoor Gear']
  },
  {
    name: 'Medicine',
    subcategories: ['Prescription', 'OTC']
  },
  {
    name: 'Electronic',
    subcategories: ['Gadgets', 'Accessories']
  },
  {
    name: 'Man’s Fashion',
    subcategories: ['Clothing', 'Shoes']
  },
  {
    name: 'Woman’s Fashion',
    subcategories: ['Dresses', 'Shoes']
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
            <h1></h1>
            <button
              className="w-full text-left text-black font-medium focus:outline-none"
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
            </button>
            {activeCategory === category.name && (
              <ul className="absolute left-full top-0 mt-0 ml-2 p-2 bg-white shadow-lg rounded-md space-y-1 text-gray-600">
                {category.subcategories.map((sub) => (
                  <li key={sub} className="hover:text-black">{sub}</li>
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
