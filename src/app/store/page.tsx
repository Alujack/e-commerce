"use client"
import HeadingBanner from "@/components/bannerHeading";
import {Heading,Img} from "@/components";
import ProductCard from "@/components/ProductCard";
import Sliderbanner from "@/components/Sliderbanner";
import PopularCategories from "@/components/storepage/popularcat";
import Preorder from "@/components/storepage/preorder";
import BestExperience from "@/components/storepage/bestexp";
import BestExperienceBanner from "@/components/storepage/bestexpbanner";
import Categories from "@/components/storepage/category";
import Card from "@/components/storepage/card";
import  product  from "@/constants/product";
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
                <div className="flex flex-row justify-center space-evenly w-[100%] md:w-full gap-2.5 md:p-5">
                   
                   <div className="static h-[310px] w-[35%] rounded-[10px] md:h-auto md:w-full">
                   <Img
                      src="images/img_banner1_png.png"
                      alt="banner1png_one"
                      className="h-[310px] w-full object-cover rounded-[10px]"
                    />
                  </div>
                   <div className="items-center h-[310px] w-[65%] md:w-full md:ml-0 ">
                     <Sliderbanner/>
                    </div>
                  
                </div>
              </div>
               <Preorder></Preorder>
              <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] grid">
                 {
                  product.map((item)=>(
                    <ProductCard key={item.id} {...item} items={item}  className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  ))
                }
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