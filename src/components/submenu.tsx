import React from "react";

interface SubMenuProps {
  category: any[];
  onBack: () => void;
}

const SubMenuComponent = ({ category, onBack }: SubMenuProps) => {
  return (
    <div className="ml-10 overflow-y-scroll h-full cursor-pointer pr-4">
       <button onClick={onBack} className="hover:bg-gray-400 font-bold text-lg mb-4  mr-10 px-10">
        &larr; Main Menu
      </button>
      <h2 className="font-bold text-lg mb-2">Categories</h2>
      <ul>
        {category.map((item, index) => (
          <li key={index} className="py-2 hover:text-gray-300">
            <a href={item.id}>{item.category_name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenuComponent;
