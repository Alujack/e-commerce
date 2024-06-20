"use client"
import {Heading} from "@/components"
import Sellerprod from "@/components/sellerprod"
export default function Product(){
    return (
        <div className="flex h-[969px] flex-col items-start gap-5 bg-[url(/images/img_group_18.svg)] bg-cover bg-no-repeat pt-[27px] md:h-auto sm:pt-5">
              <Heading size="5xl" as="h1" className="ml-7 tracking-[-0.11px] !text-gray-900_14 md:ml-0">
                Products
              </Heading>
              <div className="flex flex-col gap-[61px] self-stretch p-5 md:pb-5 md:pr-5">
                {[...Array(2)].map((d, index) => (
                  <Sellerprod
                    key={"frame1000006217" + index}
                    className="flex w-[26%] flex-col items-center justify-center gap-[33px] bg-white-A700 shadow-xs md:w-full"
                  />
                ))}
              </div>
            </div>
    )
}