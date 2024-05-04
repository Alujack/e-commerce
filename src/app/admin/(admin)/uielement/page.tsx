"use client";
import {Img,Heading} from "@/components"
export default function Favorite(){
    return <>
    {/* <div className="px-[40px] flex w-[100%] flex-col items-start gap-7 md:w-full"> */}
     <div className="flex flex-col items-end gap-4 p-[27px] sm:p-5">
                <div className="mt-3 flex w-[94%] items-start justify-between gap-5 md:w-full sm:flex-col">
                  <Heading size="2xl" as="h2" className="tracking-[-0.11px]">
                    UI Elements
                  </Heading>
                  <div className="flex w-[33%] flex-col items-start sm:w-full">
                    <div className="flex flex-col items-end self-stretch">
                      <div className="flex gap-[109px] self-stretch rounded-[14px] border border-solid border-blue_gray-100_1d_01 bg-blue_gray-800_05 px-[25px] sm:px-5">
                        <div className="flex items-center gap-[25px]">
                          <Img src="/images/img_filter_white_a700_01.svg" alt="filter_one" className="h-[17px]" />
                          <div className="h-full w-px bg-gray-500_af_01" />
                        </div>
                        <div className="h-full w-px bg-gray-500_af_01" />
                      </div>
                      <div className="relative mr-[22px] mt-[-29px] flex flex-col items-start gap-[55px] md:mr-0 sm:gap-[27px]">
                        <Img src="/images/img_arrow_down.svg" alt="arrowdown_one" className="h-[5px] self-end" />
                        <Heading as="p" className="!font-bold">
                          Charts
                        </Heading>
                      </div>
                    </div>
                    <Heading as="p" className="relative ml-[97px] mt-[-18px] !font-bold md:ml-0">
                      Filter By
                    </Heading>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-5 self-stretch rounded-[14px] border border-solid border-blue_gray-800_03 bg-blue_gray-900_01 p-6 md:flex-col sm:p-5">
                  <div className="relative mb-[30px] mt-[69px] h-[177px] w-[21%] md:w-full">
                    <Img
                      src="/images/img_bar_1.svg"
                      alt="barone_one"
                      className="absolute bottom-[-0.20px] right-[0.00px] m-auto h-[151px] w-[88%]"
                    />
                    <Heading
                      size="xl"
                      as="h4"
                      className="absolute left-[0.00px] top-[0.00px] m-auto !text-white-A700_e5_01"
                    >
                      Bar Chart
                    </Heading>
                  </div>
                  <Img src="/images/img_bar_2.svg" alt="bartwo_one" className="mb-[30px] h-[142px] w-[19%] md:w-full" />
                  <div className="mb-[30px] mr-[26px] flex w-[45%] items-center justify-between gap-5 md:mr-0 md:w-full sm:flex-col">
                    <Img src="/images/img_bar_3.svg" alt="barthree_one" className="h-[168px] w-[47%] sm:w-full" />
                    <Img
                      src="/images/img_bar_4.svg"
                      alt="barfour_one"
                      className="h-[142px] w-[42%] self-end sm:w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[63px] self-stretch rounded-[14px] border border-solid border-blue_gray-800_03 bg-blue_gray-900_01 p-6 sm:gap-[31px] sm:p-5">
                  <Heading size="xl" as="h4" className="!text-white-A700_e5_01">
                    Pie Chart
                  </Heading>
                  <div className="mb-[25px] flex w-[91%] justify-between gap-5 self-center md:w-full md:flex-col">
                    <Img src="/images/img_pie_1.svg" alt="pieone_one" className="h-[165px] w-[16%] md:w-full" />
                    <Img src="/images/img_pie_2.svg" alt="pietwo_one" className="h-[165px] w-[16%] md:w-full" />
                    <Img src="/images/img_pie_3.svg" alt="piethree_one" className="h-[165px] w-[16%] md:w-full" />
                    <Img src="/images/img_pie_4.svg" alt="piefour_one" className="h-[165px] w-[16%] md:w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[75px] self-stretch rounded-[14px] border border-solid border-blue_gray-800_03 bg-blue_gray-900_01 md:gap-14 sm:gap-[37px]">
                  <Heading size="xl" as="h4" className="mt-[17px] !text-white-A700_e5_01">
                    Donut Chart
                  </Heading>
                  <div className="mb-[46px] flex w-[90%] justify-between gap-5 self-center md:w-full md:flex-col md:p-5">
                    <Img src="/images/img_1.svg" alt="one_two" className="h-[172px] w-[16%] md:w-full" />
                    <Img src="/images/img_2.svg" alt="two_four" className="h-[172px] w-[16%] md:w-full" />
                    <Img src="/images/img_3.svg" alt="three_two" className="h-[172px] w-[16%] md:w-full" />
                    <Img src="/images/img_4.svg" alt="four_three" className="h-[172px] w-[16%] md:w-full" />
                  </div>
                </div>
              </div>
            
    </>
}