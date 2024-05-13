"use client"
import { Button, Heading } from "@/components";
import Orderitem from "@/components/orderitem";

export default function WebProfileHistoryOrderPage() {
  return (
    <>
            <div className="flex flex-col self-end items-center md:self-stretch mb-[34px] gap-5 p-[7px] md:p-5 bg-gray-100_02 flex-1 rounded-[10px]">
              <div className="flex justify-between items-center w-[95%] md:w-full gap-5 md:p-5 bg-light_green-600 rounded-[15px]">
                <div className="flex ml-[27px]">
                  <Heading size="5xl" as="h2" className="!text-white-A700 uppercase">
                    History order
                  </Heading>
                </div>
                <Button
                  color="gray_200_03"
                  size="lg"
                  className="mr-[5px] sm:px-5 !text-black-900_02 font-semibold min-w-[106px] rounded-[17px]"
                >
                  View All
                </Button>
              </div>
              <div className="flex flex-col w-[95%] md:w-full mb-20 gap-2.5">
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
              </div>
            </div>
        
    </>
  );
}
