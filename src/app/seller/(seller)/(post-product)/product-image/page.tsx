"use client";

import React, { useState } from 'react';
import { useProduct } from '@/context/Product-Post';

const ProductImagePage: React.FC = () => {
  const { productImages, setProductImages } = useProduct();
  const [imageFields, setImageFields] = useState(productImages.length ? productImages : [{ url: null, angle: 'front' }]);

  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImages = [...imageFields];
      newImages[index].url = event.target.files[0];
      setImageFields(newImages);
      setProductImages(newImages);
    }
  };

  const addImageField = () => {
    setImageFields([...imageFields, { url: null, angle: '' }]);
  };

  const handleAngleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = [...imageFields];
    newImages[index].angle = event.target.value;
    setImageFields(newImages);
    setProductImages(newImages);
  };

  return (
    <div className="max-w-4xl max-h-3xl bg-white-A700 mx-auto p-2 shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Product Image Side</h1>
      <div className="grid grid-cols-2 m-4">
        {imageFields.map((image, index) => (
          <div key={index} className="flex flex-col m-4 border-2 border-gray-900_07">
            <div className="h-[50px] w-full">
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e)}
              />
            </div>
            <input
              type="text"
              placeholder="Angle (e.g., Front, Back)"
              value={image.angle}
              onChange={(e) => handleAngleChange(index, e)}
              className="mt-2 p-1 border rounded"
            />
            {image.url && (
              <div className="w-full mt-2">
                  <img src={URL.createObjectURL(image.url)} alt={`${image.angle} view`} className="object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={addImageField} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Add Another Image
      </button>
    </div>
  );
};

export default ProductImagePage;
