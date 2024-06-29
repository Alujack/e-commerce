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

    // // Example fetch request to send data to backend
    // fetch('https://example.com/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(pageData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Submission successful:', data);
    //     // Optionally update local state or show a success message
    //   })
    //   .catch(error => {
    //     console.error('Error submitting data:', error);
    //     // Handle errors as needed
    //   });
  };

  return (
    <DataContext.Provider value={{ pageData, updatePageData, submitData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
