"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface Category {
  id: number;
  category_name: string;
  image: string | null;
  parent_category: number | null;
  subcategories?: Category[];
}



interface CategoryContextType {
  parentCategories: Category[];
  addCategory: (category: Category) => void;
  updateCategory: (id: number, updatedCategory: Partial<Category>) => void;
  deleteCategory: (id: number) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [parentCategories, setParentCategories] = useState<Category[]>([]);
  useEffect(()=>{
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/inventory/parent_categories/');
        if (response) {
        const data = response.data.map((category: Category) => ({
                    ...category,
                    image: category.image?.startsWith('http')
                    ? category.image
                    : `${process.env.NEXT_PUBLIC_HOST}/${category.image}`,
                }));
        const parentCategories = data.filter((cat: Category) => cat.parent_category === null);
        const subcategoriesMap: { [key: number]: Category[] } = {};

        data.forEach((cat: Category) => {
          if (cat.parent_category) {
            if (!subcategoriesMap[cat.parent_category]) {
              subcategoriesMap[cat.parent_category] = [];
            }
            subcategoriesMap[cat.parent_category].push(cat);
          }
        });

        const organizeCategories = (categories: Category[]): Category[] => {
          return categories.map(cat => ({
            ...cat,
            subcategories: subcategoriesMap[cat.id] ? organizeCategories(subcategoriesMap[cat.id]) : [],
          })); 
        };

            setParentCategories(organizeCategories(parentCategories));
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();

  },[])
  


  const addCategory = (category: Category) => {
    setParentCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      if (category.parent_category === null) {
        updatedCategories.push(category);
      } else {
        const addToParent = (cats: Category[]): Category[] => {
          return cats.map(cat => {
            if (cat.id === category.parent_category) {
              cat.subcategories = cat.subcategories || [];
              cat.subcategories.push(category);
            } else if (cat.subcategories) {
              addToParent(cat.subcategories);
            }
            return cat;
          });
        };
        addToParent(updatedCategories);
      }
      return updatedCategories;
    });
  };

  const updateCategory = (id: number, updatedCategory: Partial<Category>) => {
    setParentCategories((prevCategories) => {
      const update = (cats: Category[]): Category[] => {
        return cats.map(cat => {
          if (cat.id === id) {
            return { ...cat, ...updatedCategory };
          }
          if (cat.subcategories) {
            return { ...cat, subcategories: update(cat.subcategories) };
          }
          return cat;
        });
      };
      return update(prevCategories);
    });
  };

  const deleteCategory = (id: number) => {
    setParentCategories((prevCategories) => {
      const remove = (cats: Category[]): Category[] => {
        return cats
          .filter(cat => cat.id !== id)
          .map(cat => ({
            ...cat,
            subcategories: cat.subcategories ? remove(cat.subcategories) : [],
          }));
      };
      return remove(prevCategories);
    });
  };

  return (
    <CategoryContext.Provider value={{ parentCategories, addCategory, updateCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};
