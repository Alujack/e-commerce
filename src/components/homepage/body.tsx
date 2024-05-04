"use client"
import Category from "../category";
import ProductCard from "../ProductCard";
import Sliderbanner from "../Sliderbanner";
import Adsbanner from "./adsbanner";
import Discover from "./discover";
import TopCategory from "./topcategory";
import Branding from "./branding";
import HeadingBanner from "../bannerHeading";
import Bestsellerbanner from "./bestsellerbanner";
import BestsellerProduct from "./bestsellerproduct";
import Discountproductbanner from "./discountproductbanner";
import Discountmiddlebanner from "./discountmiddlebanner";
import Discountrightbanner from "./discountrightbanner";
import Membership from "./membership";
import CheckallProduct from "./checkallproductbanner";
import BankCard from "./bankcard";
export default function Body(){
 return(<>
 <div className="flex flex-col gap-[11px]">
            <div className="flex md:flex-col sm:hidden gap-2.5 bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start md:self-stretch gap-[7px] p-[13px] md:p-5 bg-gray-50_01 flex-1 rounded-[10px]">
                <Category></Category>
              </div>
              <div className="flex flex-col w-[54%] md:w-full gap-2.5 md:p-5">
                 <div className="items-center w-[100%] md:w-full mb-0.5 ml-5 md:ml-0 py-3 ">
                  
                 <Sliderbanner/>
                
                  </div>
                < Discover/>
              </div>

              <div className="flex flex-col md:flex-row sm:flex-col md:self-stretch gap-2.5 md:p-5 flex-1">
                <div className="flex-start justify-center h-[245px] md:h-auto gap-[5px] p-[20px] sm:p-5 rounded-[10px]">
                 <Adsbanner image={"images/ads1.png"}></Adsbanner>
                </div>
                <div className="flex-end justify-center h-[245px] md:h-auto gap-[5px] p-[20px] sm:p-5  rounded-[10px]">
                <Adsbanner image={"images/ads2.png"}></Adsbanner>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-2.5">
             <Branding></Branding>
             <TopCategory></TopCategory>
            </div>
            <div className="flex flex-col gap-2.5 bg-white-A700 rounded-[10px]">
              <HeadingBanner title="Explore Our Product’s New Arrival" link="view all"/>
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
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col gap-3 bg-white-A700 flex-1 rounded-[10px]">
               <HeadingBanner title="Explore Our Product’s Best seller" link="view all"/>
                <div className="flex md:flex-col gap-3">
                  <Bestsellerbanner></Bestsellerbanner>

                  <BestsellerProduct></BestsellerProduct>
    
                </div>
                <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] grid">
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />

                </div>
              </div>
              <div className="flex flex-col gap-4 bg-white-A700 flex-1 rounded-[10px]">
                <div className="flex md:flex-col gap-[17px]">
                  <div className="flex flex-col md:self-stretch gap-[15px] flex-1">
                   <HeadingBanner title="Explore Our Product’s discount" link="view all"/>

                    <div className="flex md:flex-col items-center gap-[15px] p-[13px] bg-blue_gray-100_02 rounded-[15px]">
                      <Discountproductbanner></Discountproductbanner>
                      <Discountmiddlebanner></Discountmiddlebanner>
                    </div>
                  </div>
                  <Discountrightbanner></Discountrightbanner>
                </div>
                 <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] grid">
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />

                </div>
              </div>
            </div>

            <Membership></Membership>

            <div className="pb-[9px] bg-white-A700 rounded-[10px]">
              <HeadingBanner title="Explore Our Product’s checking all product" link="view all"/>
              <div className="flex md:flex-col gap-[27px]">
               <CheckallProduct></CheckallProduct>
               <CheckallProduct></CheckallProduct>
               <CheckallProduct></CheckallProduct>
              </div> 
                <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] grid">
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />

                </div>
            </div>
            <BankCard></BankCard>
          </div>   
  </>
);
} 