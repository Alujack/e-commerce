"use client"
import React, { createContext, useState, ReactNode } from 'react';

interface DataContextType {
  pageData: any;
  updatePageData: (page: string, data: any) => void;
  submitData: () => void; // New function for submitting data
}

const DataContext = createContext<DataContextType | null>(null);

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pageData, setPageData] = useState({
    page1: {
      name: '',
      description: '',
      image: null,
      price: ''},
    page2: {category:''},
    page3: {
      selectedCategory: '',
      selectedTags: []
    },
  });

  const updatePageData = (page: string, data: any) => {
    setPageData((prevData) => ({
      ...prevData,
      [page]: data,
    }));
  };

  const submitData = () => {
    // Here you would typically send `pageData` to your backend
    console.log('Submitting data:', pageData.page1);
  };

  return (
    <DataContext.Provider value={{ pageData, updatePageData, submitData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
