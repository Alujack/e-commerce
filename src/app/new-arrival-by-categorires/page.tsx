"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface Category {
  id: number;
  category_name: string;
  image: string | null;
  parent_category_id: number | null;
}

const CategoryList: React.FC = () => {

  const [categories, setCategories] = useState<Category[]>([])
  useEffect(()=>{const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/inventory/parent_categories/');
            if (response) {
                const data = response.data.map((category: Category) => ({
                    ...category,
                    image: category.image?.startsWith('http')
                    ? category.image
                    : `${process.env.NEXT_PUBLIC_HOST}/${category.image}`,
                }));
                setCategories(data);}
            
      // Process categories
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  fetchCategories()
},[])
  
// Empty dependency array to run once on mount
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.category_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
