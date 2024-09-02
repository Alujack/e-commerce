'use client'
import { useEffect } from "react";
import { useProducts } from "@/context/productListByCategory"
import ProductCard from "@/components/ProductCard";

export default function ProductList({ params }: { params: { id: string } }) {
  const id = params.id;
  const { products, fetchProducts } = useProducts();
  useEffect(() => {
    fetchProducts(id)
  }, [id])

  return (
    <>
      <div>
        {/* First section with the promotional banner */}
        <div className="px-8 lg:px-16">
          <div className="bg-gradient-to-r from-purple-300 via-white to-white rounded-lg shadow-lg flex items-center justify-between p-8 mx-auto my-3 max-w-screen-xl">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                Grab Up to 50% Off On Selected Headphone
              </h2>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Buy Now
              </button>
            </div>

            <div>
              <img
                src="/images/productlist/1_main.jpg"
                alt="Headphone"
                className="max-w-xs rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Filter options and product list */}
        <div className="px-8 lg:px-16 py-4">
          {/* Filter options */}
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Macbook types</option>
                {/* Add more options as needed */}
              </button>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Best Sellers</option>
                {/* Add more options as needed */}
              </button>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Price</option>
                {/* Add more options as needed */}
              </button>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Color</option>
                {/* Add more options as needed */}
              </button>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Review</option>
                {/* Add more options as needed */}
              </button>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Material</option>
                {/* Add more options as needed */}
              </button>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Offer</option>
                {/* Add more options as needed */}
              </button>
            </div>
            <div>
              <button className="border border-gray-300 rounded-lg p-2 bg-gray-300">
                <option>Macbook types</option>
                {/* Add more options as needed */}
              </button>
            </div>
          </div>
        </div>

        {/* Prioduct List */}
        {products.length > 0 ?
          <div className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 self-center bg-[#FFFFFF]">
            {products.map((product, index) => (
              <ProductCard product={product} />
            ))}
          </div> :
          <div className="flex flex-col gap- ml-[10%] mb-[10%] mt-5">
            <h1 className="text-start font-bold text-xl p-2"> We're Sorry!</h1>
            <p className="text-start text-md p-2">It looks like there are no products available in this category right now. We're constantly updating our inventory, so please check back soon!</p>

          </div>
        }



      </div>
    </>
  );
}
