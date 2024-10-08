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
// "use client";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useProduct } from '@/context/Product-Post';
// interface Category {
//   id: string;
//   parent_category?: string;
//   category_name: string;
//   image: string | null;
// }; 


// export default function SearchCategories() {
//   const { product, setCategoryId } = useProduct();
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [query, setQuery] = useState('');
//   const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);
//   const [selectedParentCategoryId, setSelectedParentCategoryId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);


//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/store/search/category?q=${query}`);
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };
//   const handleSelect = (category: string) => {
//     setSelectedCategory(category);
//     setCategoryId(category);
//   };
//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/product/product-categories/`);
//         if (response) {
//           const data = response.data.map((category: Category) => ({
//             ...category,
//             image: category.image?.startsWith('http')
//               ? category.image
//               : `${process.env.NEXT_PUBLIC_HOST}/${category.image}`,
//           }));
//           setCategories(data);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     fetchCategory();
//   }, []);

//   useEffect(() => {
//     const filteredCategories = categories.filter((category) =>
//       category.category_name.toLowerCase().startsWith(query.toLowerCase())
//     );
//     setVisibleCategories(filteredCategories);
//   }, [query, categories]);


//   return (
//     <div className="relative mx-[5%]">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search categories..."
//           className="border p-2"
//         />
//         {query && visibleCategories.length > 0 && (
//           <div className="absolute z-20 mt-3 ml-5 w-full bg-white border border-gray-300 rounded-md shadow-lg">
//             {visibleCategories.map((category, index) => (
//               <div className="flex flex-row gap-6 py-3 ml-5">
//               <input
//                 type="checkbox"
//                 checked={selectedCategory === category.id}
//                 onChange={() => handleSelect(category.id)}
//                 className="mr-2"
//               />
//                   <h1 className='font-inter text-md'>{category.category_name}</h1>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//   );
// }

