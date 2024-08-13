import React from "react";
interface prop{
    show:boolean;
    onclose:()=> void;
}

const MenuComponent = ({show, onclose}:prop) => {
    if(!show) return null;
    return (
    <div className="fixed top-0 left-0 z-40 w-80 h-screen bg-white-A700 dark:bg-gray-800">
      <div className="flex bg-[#232F3E] w-full px-0 items-center mb-6 py-5">
        <div className="rounded-full w-8 h-8 flex text-white-A700 items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <span className="ml-3 text-lg">Hello, Yoeurn</span>
         <button onClick={onclose}>close</button>
      </div>
     
      
      <div>
      
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Trending</h2>
        <ul>
          <li className="py-1 hover:text-gray-300">Best Sellers</li>
          <li className="py-1 hover:text-gray-300">New Releases</li>
          <li className="py-1 hover:text-gray-300">Movers & Shakers</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Digital Content & Devices</h2>
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
          <li className="py-1 hover:text-gray-300 flex justify-between items-center">
            Amazon Appstore <span>›</span>
          </li>
        </ul>
      </div>
      
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Shop by Department</h2>
        <ul>
          <li className="py-1 hover:text-gray-300">Clothing, Shoes, Jewelry & Watches</li>
          {/* Add more items as needed */}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default MenuComponent;
