import React from "react";
interface prop{
    show:boolean;
    onclose:()=> void;
}

const MenuComponent = ({show, onclose}:prop) => {
    if(!show) return null;
    return (
      <div className="fixed inset-0 flex flex-row-reverse gap-2  bg-black-900_01 bg-opacity-75 z-50 pb-80 ">
        <div className="w-[100%] sticky ml-[371px] h-56">
           <button className=" ml-4 place-self-start w-24 h-24 py-5" onClick={onclose}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" fill="white" fill-opacity="0"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.34315 6.34315C6.73367 5.95262 7.36683 5.95262 7.75736 6.34315L12 10.5858L16.2426 6.34315C16.6332 5.95262 17.2663 5.95262 17.6569 6.34315C18.0474 6.73367 18.0474 7.36683 17.6569 7.75736L13.4142 12L17.6569 16.2426C18.0474 16.6332 18.0474 17.2663 17.6569 17.6569C17.2663 18.0474 16.6332 18.0474 16.2426 17.6569L12 13.4142L7.75736 17.6569C7.36683 18.0474 6.73367 18.0474 6.34315 17.6569C5.95262 17.2663 5.95262 16.6332 6.34315 16.2426L10.5858 12L6.34315 7.75736C5.95262 7.36683 5.95262 6.73367 6.34315 6.34315Z" fill="white"/>
            </svg>  
           
            </button>
        </div>  
        <div className="fixed top-0 left-0 z-40 w-[371px] h-screen bg-white-A700 dark:bg-gray-800">
          <div className="flex items-center bg-[#232F3E] w-full text-white-A700 px-0  mb-6 py-5 ">
            <div className="ml-10 rounded-full w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM5 7C5 3.68629 7.68629 1 11 1C14.3137 1 17 3.68629 17 7C17 10.3137 14.3137 13 11 13C7.68629 13 5 10.3137 5 7ZM19 21C19 18.2386 16.7614 16 14 16H10C7.23858 16 5 18.2386 5 21V22C5 22.5523 5.44772 23 6 23H18C18.5523 23 19 22.5523 19 22V21ZM6 20C6 18.8954 6.89543 18 8 18H16C17.1046 18 18 18.8954 18 20V21H6V20Z" fill="#FFFFFF"/>
              </svg>
            </div>
            <h1 className="ml-3 text-xl  font-poppins font-bold">Hello, Yoeurn Yan</h1>  
          </div>
          <div className="ml-10 overflow-y-scroll h-full cursor-pointer pr-4">
          
          <div className="mb-4">
            <h2 className="font-bold text-lg mb-2">Trending</h2>
            <ul>
              <li className="py-1 hover:text-gray-300">Best Sellers</li>
              <li className="py-1 hover:text-gray-300">New Releases</li>
              <li className="py-1 hover:text-gray-300">Movers & Shakers</li>
            </ul>
          </div>
          
          <div className="mb-4 ">
            <h2 className="font-bold text-lg mb-2 ">Digital Content & Devices</h2>
            <ul>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Prime Video <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Amazon Music <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Echo & Alexa <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Fire Tablets <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Fire TV <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Kindle E-readers & Books <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Audible Books & Originals <span>›</span>
              </li>
              <li className="py-1 hover:text-gray-300 flex justify-between items-center">
                Amazon Photos <span>›</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h2 className="font-bold text-lg mb-2">Shop by Department</h2>
            <ul>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg mb-2">Program and Feature</h2>
            <ul>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div className="pb-32">
            <h2 className="font-bold text-lg mb-3">help and setting</h2>
            <ul>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          </div>
        </div>
    </div>
  );
};

export default MenuComponent;
