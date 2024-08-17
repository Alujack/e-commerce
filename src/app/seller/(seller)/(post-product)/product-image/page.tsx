"use client";

import React from 'react';
import { useProduct } from '@/context/Product-Post';

const ProductImagePage: React.FC = () => {
  const { productImages, setProductImages } = useProduct();

  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImages = [...productImages];
      newImages[index].url = event.target.files[0];
      setProductImages(newImages);
    }
  };

  return (
    <div className="max-w-4xl max-h-3xl bg-white mx-auto p-2 shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Product Image Side</h1>
      <div className="grid grid-cols-2 m-4">
        {['Front', 'Back', 'Left', 'Right'].map((side, index) => (
          <div key={index} className="flex flex-col m-4 border-2 border-gray-900_07">
            <div className="h-[50px] w-full">
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e)}
              />
            </div>
            <h4>{side}</h4>
            {/* {productImages[index].url && (
              <img src={URL.createObjectURL(productImages[index].url)} alt={`${side} view`} className="h-40 w-full object-cover mt-2" />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImagePage;
