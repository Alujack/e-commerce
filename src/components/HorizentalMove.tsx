"use client"
import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { producttype } from '@/common.type';

interface ProductCarouselProps {
  products: producttype[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-screen px-5">
      <button 
        onClick={scrollLeft} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full shadow-lg">
        ←
      </button>
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto gap-5 scroll-container hide-scrollbar snap-x snap-mandatory w-full">
        {products.map((item, index) => (
          <div key={item.id} className="snap-center">
            {/* <ProductCard key={index} {...item} items={item} /> */}
          </div>
        ))}
      </div>
      <button 
        onClick={scrollRight} 
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full shadow-lg">
        →
      </button>
    </div>
  );
};

export default ProductCarousel;
