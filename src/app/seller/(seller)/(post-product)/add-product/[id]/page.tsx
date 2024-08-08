"use client"

import { useProduct } from '@/context/Product-Post';
import {useEffect} from "react"
import axios from 'axios';


const ProductInformationForm = ({ params }: { params: { id: string } }) => {
const { product, setProduct } = useProduct();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  
  useEffect(()=>{
    const FetchProduct = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/product/store/product/get/${params.id}/`)
        if(response.data){
            setProduct(response.data);
        }
    }
    FetchProduct();
  },[params.id])

  return (
    <form className="max-w-4xl max-h-3xl bg-white-A700 mx-auto p-2 shadow-md rounded-lg ">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Product Information</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {product.name === '' && <span className="text-red-500 text-xs">Please enter text only</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
        <img src={`http://localhost:8000/${product.image}`} alt="" />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
        <input
          name="description"
          value={product.description}
          onChange={handleChange}
          maxLength={800}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {product.price === '' && <span className="text-red-500 text-xs">Please enter the product currency first.</span>}
      </div>
    </form>
  );
};

export default ProductInformationForm;
