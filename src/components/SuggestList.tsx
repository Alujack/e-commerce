import { Product } from '@/common.type';
import React from 'react';

interface SuggestionListProps {
  suggestions: Product[];
  onSelectSuggestion: (suggestion: string) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions, onSelectSuggestion }) => {
  return (
    <ul className="absolute bg-white-A700 border border-gray-300 w-full mt-1 z-50 max-h-60 overflow-y-auto">
      {suggestions.map((product, index) => (
        <li
          key={index}
          onClick={() => onSelectSuggestion(product.name)}
          className="cursor-pointer p-2 hover:bg-gray-200"
        >
          <div className="inline-flex items-start">
            <div className="h-[20px]"><img src={`http://localhost:8000/${product.image}`} className="object-cover" /></div>
            <h4>{product.name}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
