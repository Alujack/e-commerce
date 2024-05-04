"use client"

import { Button, Heading} from "@/components";
import Productcardadmin from "@/components/productcardadmin";
import Topbar from "@/components/topbar";
export default function DarkThreePage() {
return (
    <>
       
            <div className="flex w-[95%] flex-col items-start gap-[78px] md:w-full md:gap-[58px] sm:gap-[39px]">
              <Heading size="7xl" as="h1" className="tracking-[-0.11px]">
                Products
              </Heading>
              <div className="ml-[129px] flex w-[41%] flex-col items-start md:ml-0 md:w-full">
                <Heading size="lg" as="h2">
                  September 12-22
                </Heading>
                <Heading size="8xl" as="h3" className="mt-[11px] leading-[48px]">
                  <>
                    Enjoy free home
                    <br />
                    delivery in this summer
                  </>
                </Heading>
                <Heading size="lg" as="h4" className="mt-3 !text-white-A700_cc_06">
                  Designer Dresses - Pick from trendy Designer Dress.
                </Heading>
                <Button
                  color="deep_orange_400_04"
                  className="mt-[33px] min-w-[156px] rounded-[11px] font-nunitosans font-bold tracking-[1.00px] sm:px-5"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex gap-[21px] self-stretch md:flex-col">
                <Productcardadmin className="flex w-full flex-col items-center gap-[22px] border border-solid border-blue_gray-800_21 bg-blue_gray-900_03 pb-[23px] sm:pb-5" />
                <Productcardadmin className="flex w-full flex-col items-center gap-[22px] border border-solid border-blue_gray-800_21 bg-blue_gray-900_03 pb-[23px] sm:pb-5" />
                <Productcardadmin className="flex w-full flex-col items-center gap-[22px] border border-solid border-blue_gray-800_21 bg-blue_gray-900_03 pb-[23px] sm:pb-5" />
              </div>
          </div>
    </>
  );
}
