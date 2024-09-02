import { RatingBar } from "@/components";

export default function ProductList() {
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
                <option>Headphone type</option>
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
                <option>Headphone type</option>
                {/* Add more options as needed */}
              </button>
            </div>
          </div>
        </div>

        {/* Prioduct List */}
        <div className="grid grid-rows grid-flow-col gap-4">
          <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="relative">
              <img
                src="/images/productlist/shoes.jpg"
                alt="TDX Sinkers"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none">
                <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">TDX Sinkers</h3>
              <p className="text-sm text-gray-600 mt-1">
                5 types of shoes available
              </p>

              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex items-center space-x-1">
                  <RatingBar
                    value={4} // Assuming `items` has a `rating` field
                    starCount={5}
                    color="grey"
                    activeColor="gold"
                    size={24}
                    isEditable={false} // Set to false if you don't want users to edit the rating
                  />

                </div>

                <span className="ml-2 text-sm text-gray-500 mt-2">(121)</span>
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2">$675.00</p>
              <div className="flex mt-4 space-x-2">
                <button className="flex-1 bg-green-500 text-white text-sm py-2 rounded-full hover:bg-green-600">
                  Add To Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                  Add Shortlist
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="relative">
              <img
                src="/images/productlist/shoes.jpg"
                alt="TDX Sinkers"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none">
                <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">TDX Sinkers</h3>
                <p className="text-xl font-bold text-gray-900">₹675.00</p>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                5 types of shoes available
              </p>

              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex items-center space-x-1">
                  <span>⭐⭐⭐⭐</span>
                  <span className="text-yellow-400">⭐</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">(121)</span>
              </div>
              <div className="flex mt-4 space-x-2">
                <button className="flex-1 bg-green-500 text-white text-sm py-2 rounded-full hover:bg-green-600">
                  Add To Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                  Add Shortlist
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="relative">
              <img
                src="/images/productlist/shoes.jpg"
                alt="TDX Sinkers"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none">
                <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">TDX Sinkers</h3>
                <p className="text-xl font-bold text-gray-900">₹675.00</p>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                5 types of shoes available
              </p>

              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex items-center space-x-1">
                  <span>⭐⭐⭐⭐</span>
                  <span className="text-yellow-400">⭐</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">(121)</span>
              </div>
              <div className="flex mt-4 space-x-2">
                <button className="flex-1 bg-green-500 text-white text-sm py-2 rounded-full hover:bg-green-600">
                  Add To Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                  Add Shortlist
                </button>
              </div>
            </div>
          </div>


          <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="relative">
              <img
                src="/images/productlist/shoes.jpg"
                alt="TDX Sinkers"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none">
                <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">TDX Sinkers</h3>
                <p className="text-xl font-bold text-gray-900">₹675.00</p>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                5 types of shoes available
              </p>

              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex items-center space-x-1">
                  <RatingBar
                    value={4} // Assuming `items` has a `rating` field
                    starCount={5}
                    color="grey"
                    activeColor="gold"
                    size={24}
                    isEditable={false} // Set to false if you don't want users to edit the rating
                  />
                </div>
                <span className="ml-2 text-sm text-gray-500">(121)</span>
              </div>
              <div className="flex mt-4 space-x-2">
                <button className="flex-1 bg-green-500 text-white text-sm py-2 rounded-full hover:bg-green-600">
                  Add To Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                  Add Shortlist
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
