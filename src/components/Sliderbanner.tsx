// // "use client";
// // import { useEffect, useState } from "react";
// // import {Img} from "../../."
// // import { images } from "./constant";

// // const  Sliderbanner = () => {
// //   const [activeImage, setActiveImage] = useState(0);

// //   const clickNext = () => {
// //     activeImage === images.length - 1
// //       ? setActiveImage(0)
// //       : setActiveImage(activeImage + 1);
// //   };
// //   const clickPrev = () => {
// //     activeImage === 0
// //       ? setActiveImage(images.length - 1)
// //       : setActiveImage(activeImage - 1);
// //   };

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       clickNext();
// //     }, 1000);
// //     return () => {
// //       clearTimeout(timer);
// //     };
// //   }, [activeImage]);
// //   return (
// //     <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-3xl rounded-2xl">
// //       <div
// //         className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-1 md:p-0`}
// //       >
// //         {images.map((elem, idx) => (
// //           <div
// //             key={idx}
// //             className={`${
// //               idx === activeImage
// //                 ? "block w-full h-[310px] object-cover transition-all duration-500 ease-in-out"
// //                 : "hidden"
// //             }`}
// //           >
// //             <Img
// //               src={elem.src}
// //               alt="slider"
// //               className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl w-full h-[310px] rounded-[10px] "
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </main>
// //   );
// // };

// // export default  Sliderbanner;
// "use client";
// import {Img} from "../../."
// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";
// import { images } from "./constant";

// export default function Carousel({
//   autoSlide = false,
//   autoSlideInterval = 3000,

// }: {
//   autoSlide?: boolean;
//   autoSlideInterval?: number;

// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className="relative w-[837px]">
//       <div className="max-w-lg">
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {images.map((img) => (
//           <Img key ={img.id} src={img.src} alt="slider" />
//         ))}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {images.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { useState, useEffect } from 'react';
import {Img} from ".";
import {images} from "./constant"; // Add your image URLs here

const Sliderbanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className= " my-5 overflow-hidden">
      <div className=" relative">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={` absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Img src={image.src} alt={`Slide ${index + 1}`} className=" object-cover" />
              </div>
            ))}
          </div>
    </div>
    
  );
};

export default Sliderbanner;
