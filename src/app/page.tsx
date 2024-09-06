
import TopCategory from "@/components/homepage/topcategory";
import Branding from "@/components/homepage/branding";
import HeadingBanner from "@/components/bannerHeading";
import Bestsellerbanner from "@/components/homepage/bestsellerbanner";
import BestsellerProduct from "@/components/homepage/bestsellerproduct";
import BestMultiple from "./components/bestseller"
import NewArrival from "./components/new-arrial"
import Multiple from "./components/multple"
export default function Body(){   
 return(<>
 <div className="mx-20 flex flex-col gap-10 mt-3">
            <div className="flex md:flex-col gap-5">
             <Branding></Branding>
             <TopCategory></TopCategory>
            </div>
            <div className="flex flex-col gap-2.5 bg-white-A700 p-3 ">
              <HeadingBanner title="Explore Our Product’s New Arrival" link="view all"/>
              <NewArrival/>
            </div>
    
            <div className="flex flex-col gap-3 bg-white-A700 flex-1 rounded-[10px]">
               <HeadingBanner title="Explore Our Product’s Best seller" link="view all"/>
                <div className="flex md:flex-col gap-3">
                  <Bestsellerbanner/>
                  <BestsellerProduct/>
                </div>
               <BestMultiple/>
            </div>
            <div className="pb-[9px] bg-white-A700 rounded-[10px]">
              <HeadingBanner title="Explore Our Product’s checking all product" link="view all"/>
              <div className="flex md:flex-col gap-[27px]">
              </div> 
              <Multiple/>
            </div>
          </div>   
  </>
);
} 

