"use client"

import { useProduct } from '@/context/Product-Post';
const ProductInformationForm: React.FC = () => {
const { productId, product, setProduct } = useProduct();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  

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
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {product.image && (
          <div className="mt-2">
            <img
              src={`http://localhost:8000/${product.image}`}
              alt="Preview"
              className="w-48 h-48 object-cover"
            />
          </div>
        )}
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
