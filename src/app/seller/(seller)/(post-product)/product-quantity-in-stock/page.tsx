"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProduct } from '@/context/Product-Post';

interface VariationOption {
  id: string;
  value: string;
}

const QuantityInStock: React.FC = () => {
  const { product, variations,setStocks, stocks,categoryId,productImages } = useProduct();
  const [variationId, setVariationId] = useState<string>("");
  const [variationOptionId, setVariationOptionId] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [variationOptionList, setVariationOptionList] = useState<VariationOption[]>([]);
  const data ={
    product,variations,stocks,categoryId,productImages
  }

  useEffect(() => {
    const fetchVariationOptions = async () => {
      if (variationId) {
        try {
          const response = await axios.get(`http://localhost:8000/api/product/store/options/get/${variationId}/`);
          if (response.data) {
            setVariationOptionList(response.data);
          }
        } catch (error) {
          console.error('Error fetching variation options:', error);
        }
      }
    };
    fetchVariationOptions();
  }, [variationId]);

  const handleVariationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVariationId(e.target.value);
    setVariationOptionId("");
    setVariationOptionList([]); // Clear previous options
  };

  const handleVariationOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionId = e.target.value;
    setVariationOptionId(selectedOptionId);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const addStock = () => {
    console.log("variation:", variations)
    if (variationOptionId && quantity > 0) {
      const newStock = {
        variation_option: variationOptionId ,
        quantity: quantity
      };

      setStocks([...stocks, newStock]);
    }
  };

  const ConsoleLog = () => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl max-h-3xl bg-white mx-auto p-10 shadow-md rounded-lg">
      <h1 className="self-center text-2xl font-bold mb-7">Stock Control For this Product</h1>

      <div className="mb-10">
        <div className="flex flex-row justify-between">
          <div className="flex w-full flex-col gap-5">
            <label className="block mb-2 text-xl text-gray-900">Product Variation</label>
            <select
              name="variation"
              className="block w-[75%] mb-3 p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={handleVariationChange}
            >
              <option value="">Select Variation</option>
              {variations?.map((variation) => (
                <option key={variation.id} value={variation.id}>
                  {variation.attribute_type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col gap-5">
            <label className="block mb-2 text-xl text-gray-900">Product Variation Option</label>
            <select
              name="option"
              className="block w-[75%] mb-3 p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={handleVariationOptionChange}
              value={variationOptionId}
            >
              <option value="">Select Option</option>
              {variationOptionList.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">How many products are in stock?</p>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">Quantity in stock</label>
        <div className="w-[50%] p-2 border-2 border-blue-600">
          <input
            type="number"
            name="qty"
            value={quantity}
            onChange={handleQuantityChange}
            className="block w-full"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={addStock} className="bg-blue-500 text-white px-4 py-2 rounded">Add Stock</button>
        <button onClick={ConsoleLog} className="bg-gray-500 text-white px-4 py-2 rounded">Console Log Stocks</button>
      </div>
    </div>
  );
};

export default QuantityInStock;