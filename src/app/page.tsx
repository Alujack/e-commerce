
import TopCategory from "@/components/homepage/topcategory";
import Branding from "@/components/homepage/branding";
import HeadingBanner from "@/components/bannerHeading";
import Bestsellerbanner from "@/components/homepage/bestsellerbanner";
import BestsellerProduct from "@/components/homepage/bestsellerproduct";
import Discountproductbanner from "@/components/homepage/discountproductbanner";
import Discountmiddlebanner from "@/components/homepage/discountmiddlebanner";
import Discountrightbanner from "@/components/homepage/discountrightbanner";
import CheckallProduct from "@/components/homepage/checkallproductbanner";
import BankCard from "@/components/homepage/bankcard";
import product from "@/constants/product";
import ProductCarousel from "@/components/HorizentalMove"
export default function Body(){   
 return(<>
 <div className="mx-20 flex flex-col gap-10">
            <div className="flex md:flex-col gap-5">
             <Branding></Branding>
             <TopCategory></TopCategory>
            </div>
            <div className="flex flex-col gap-2.5 bg-white-A700 p-3 ">
              <HeadingBanner title="Explore Our Product’s New Arrival" link="view all"/>
              {<ProductCarousel products={product} />}
            </div>
    
            <div className="flex flex-col gap-3 bg-white-A700 flex-1 rounded-[10px]">
               <HeadingBanner title="Explore Our Product’s Best seller" link="view all"/>
                <div className="flex md:flex-col gap-3">
                  <Bestsellerbanner/>
                  <BestsellerProduct/>
                </div>
               {/* {<ProductCarousel products={product} />} */}
            </div>
            <div className="flex flex-col gap-4 bg-white-A700 flex-1">
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
                {/* {<ProductCarousel products={product} />} */}
              </div>
            <div className="pb-[9px] bg-white-A700 rounded-[10px]">
              <HeadingBanner title="Explore Our Product’s checking all product" link="view all"/>
              <div className="flex md:flex-col gap-[27px]">
               <CheckallProduct></CheckallProduct>
               <CheckallProduct></CheckallProduct>
               <CheckallProduct></CheckallProduct>
              </div> 
               {/* {<ProductCarousel products={product} />} */}
            </div>
            <BankCard></BankCard> 
          </div>   
  </>
);
} 

