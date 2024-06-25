
import Category from "@/components/category";
import ProductCard from "@/components/ProductCard";
import Sliderbanner from "@/components/Sliderbanner";
import Adsbanner from "@/components/homepage/adsbanner";
import Discover from "@/components/homepage/discover";
import TopCategory from "@/components/homepage/topcategory";
import Branding from "@/components/homepage/branding";
import HeadingBanner from "@/components/bannerHeading";
import Bestsellerbanner from "@/components/homepage/bestsellerbanner";
import BestsellerProduct from "@/components/homepage/bestsellerproduct";
import Discountproductbanner from "@/components/homepage/discountproductbanner";
import Discountmiddlebanner from "@/components/homepage/discountmiddlebanner";
import Discountrightbanner from "@/components/homepage/discountrightbanner";
import Membership from "@/components/homepage/membership";
import CheckallProduct from "@/components/homepage/checkallproductbanner";
import BankCard from "@/components/homepage/bankcard";
import product from "@/constants/product";
import { producttype } from "@/common.type";
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
                 <Adsbanner image={"/images/ads1.png"}></Adsbanner>
                </div>
                <div className="flex-end justify-center h-[245px] md:h-auto gap-[5px] p-[20px] sm:p-5  rounded-[10px]">
                <Adsbanner image={"/images/ads2.png"}></Adsbanner>
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
                {
                  product.map((item, index)=>(

                    <ProductCard key={index} {...item} items={item} className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                     
                  ))
                 
                }
                
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
                 {
                  product.map((item)=>(
                    <ProductCard key={item.id} {...item} items={item}  className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  ))
                }

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
                 {
                  product.map((item)=>(
                      <ProductCard key={item.id} {...item} items={item}  className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  ))
                }

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
                 {
                  product.map((item:producttype)=>(
                    <ProductCard key={item.id} {...item} items={item}  className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  ))
                }
                </div>
            </div>
            <BankCard></BankCard>
          </div>   
  </>
);
} 