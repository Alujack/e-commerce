"use client"
import HeadingBanner from "../bannerHeading";
import {Heading,Img} from "../.";
import ProductCard from "../ProductCard";
import Sliderbanner from "../Sliderbanner";
import PopularCategories from "./popularcat";
import Preorder from "./preorder";
import BestExperience from "./bestexp";
import BestExperienceBanner from "./bestexpbanner";
import Categories from "./category";
import Card from "./card";
export default function Store(){
    return (
  <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-[15px] pb-3">
                <HeadingBanner title="Popular Categories " link=" view all"></HeadingBanner>
                <PopularCategories/>
                
              </div>
              <div className="flex flex-col gap-5 p-[19px] bg-white-A700 rounded-[10px]">
                <div className="flex p-[9px]">
                  <Heading size="3xl" as="h6" className="self-start uppercase">
                    top cell phones & tablets
                  </Heading>
                </div>
                <div className="mb-2.5 ml-2.5 flex gap-[21px] md:ml-0 md:flex-col">
                    <div className="flex h-[310px] flex-1 items-center rounded-[10px] p-[29px] md:h-auto sm:p-5">
                     <Sliderbanner/>
                   </div>
                   <div className="relative h-[310px] w-[35%] rounded-[10px] md:h-auto md:w-full">
                   <Img
                      src="images/img_banner1_png.png"
                      alt="banner1png_one"
                      className="h-[310px] w-full object-cover rounded-[10px]"
                    />
                  </div>
                  
                </div>
              </div>
               <Preorder></Preorder>
              <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] grid">
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
              </div>
              <BestExperienceBanner/>

              <BestExperience></BestExperience>

              <div className="flex items-center gap-[15px] md:flex-col">
                <Categories></Categories>
                <Card></Card>
              </div>
         </div>
       

    )
}