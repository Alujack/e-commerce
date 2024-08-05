"use client"

import { Text, Img, Heading, Input, Button } from "@/components";
import Link from "next/link";
import Stockpro from "./stockproduct";

const data = [{ rectangle22: "/images/img_rectangle_22.png" }, { rectangle22: "/images/img_rectangle_22_235x350.png" }];
const data1 = [
  {
    iconfinderbusi: "/images/img_iconfinder_busi.svg",
    Data: "-$850",
    depositfrommy: "Deposit from my Card",
    january2021: "28 January 2021",
  },
  {
    iconfinderbusi: "/images/img_iconfinder_payp.svg",
    Data: "+$2,500",
    depositfrommy: "Deposit Paypal",
    january2021: "25 January 2021",
  },
  {
    iconfinderbusi: "/images/img_iconfinder_6_4753731.svg",
    Data: "+$5,400",
    depositfrommy: "Jemi Wilson",
    january2021: "21 January 2021",
  },
];

export default function MainDashboard() {
  return (
    <div>
      <div className="flex w-full flex-col gap-[37px] p-[25px] sm:pb-5 bg-blue_gray-50">
        <div className="flex items-center gap-[30px] pr-20 md:flex-col md:pr-5">
          <div className="flex flex-1 flex-col gap-5 md:self-stretch">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Heading as="h1">My Cards</Heading>
              <Link href="#" className="self-start">
                <Heading size="lg" as="h2" className="text-right">
                  See All
                </Heading>
              </Link>
            </div>
            <div className="flex gap-[3px] md:flex-col">
              {data.map((d, index) => (
                <Img
                  key={"frame1000006432" + index}
                  src={d.rectangle22}
                  width={361}
                  height={235}
                  alt="Rectangle 22"
                  className="h-[235px] w-[50%] rounded-[25px] object-cover md:w-full"
                />
              ))}
            </div>
          </div>
          <div className="flex w-[40%] flex-col items-center gap-[19px] md:w-full">
            <Heading as="h3">Recent Transaction</Heading>
            <div className="flex flex-col gap-2.5 self-stretch rounded-[25px] bg-white-A700_01 p-6 sm:p-5">
              {data1.map((d, index) => (
                <div key={"group398" + index} className="flex items-center gap-[17px]">
                  <Button size="6xl" shape="circle" className="w-[55px] !rounded-[27px] !bg-orange-50_05">
                    <Img src={d.iconfinderbusi} width={55} height={55} />
                  </Button>
                  <div className="mb-[3px] flex flex-col items-start gap-[5px] self-end">
                    <Text size="xl" as="p" className="!font-medium !text-gray-900_07">
                      {d.depositfrommy}
                    </Text>
                    <Text size="lg" as="p">
                      {d.january2021}
                    </Text>
                  </div>
                  <Text size="xl" as="p" className="text-right !font-medium !text-red-A200_05">
                    {d.Data}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full items-center justify-between gap-5 md:flex-col md:p-5">
          <div className="flex w-[50%] flex-col items-start gap-[19px] md:w-full">
            <Heading as="h2">Quick Transfer</Heading>
            <div className="flex flex-col gap-7 self-stretch rounded-[25px] bg-white-A700_01 p-[25px] sm:p-5">
              <div className="mt-2.5 flex items-center gap-4 sm:flex-col">
                <div className="flex flex-1 items-center gap-[29px] sm:self-stretch">
                  <div className="flex flex-1 items-start">
                    <div className="relative z-[1] flex flex-1 flex-col items-start gap-3.5">
                      <Img
                        src="/images/img_pexels_julia_volk_5273755.png"
                        width={70}
                        height={70}
                        alt="pexels julia volk 5273755"
                        className="ml-[5px] h-[70px] w-[70px] rounded-[50%] md:ml-0"
                      />
                      <div className="flex flex-col items-start gap-[3px] self-stretch">
                        <Text size="xl" as="p" className="!text-gray-900_07">
                          Yoeurn Yan
                        </Text>
                        <div className="flex w-[86%] flex-wrap items-center justify-between gap-5 self-end md:w-full">
                          <Text size="lg" as="p">
                            CEO
                          </Text>
                          <Text size="lg" as="p">
                            CTO
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="relative ml-[-51px] flex w-[29%] flex-col gap-3.5">
                      <Img
                        src="/images/img_marcel_strauss.png"
                        width={70}
                        height={70}
                        alt="marcel strauss "
                        className="h-[70px] w-[70px] rounded-[50%]"
                      />
                      <Text size="xl" as="p" className="!text-gray-900_07">
                        Sam Nisa
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[34%] flex-col items-center gap-3.5">
                    <div className="w-[68%] md:w-full">
                      <Img
                        src="/images/img_austin_distel_7.png"
                        width={70}
                        height={70}
                        alt="austin distel 7"
                        className="h-[70px] w-[70px] rounded-[50%]"
                      />
                      <Img
                        src="/images/img_emanuel_minca_j.png"
                        width={70}
                        height={70}
                        alt="emanuel minca j"
                        className="relative mt-[-70px] h-[70px] w-[70px] rounded-[50%]"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-[3px]">
                      <Text size="xl" as="p" className="!text-gray-900_07">
                        Vibol Sen
                      </Text>
                      <Text size="lg" as="p">
                        Administration
                      </Text>
                    </div>
                  </div>
                </div>
                <Button shape="circle" className="w-[50px] !rounded-[25px] !bg-white-A700_01 shadow-xs">
                  <Img src="/images/img_arrow_right.svg" width={50} height={50} />
                </Button>
              </div>
              <div className="mb-2.5 flex items-center gap-[27px] sm:flex-col">
                <Text size="xl" as="p">
                  Write Amount
                </Text>
                <Input name="Group 311" placeholder={`525.50`} className="gap-[35px] bg-blue_gray-50 sm:px-5" />
                <Button shape="round" size="3xl" color="blue_A700">
                  Send
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-[45%] flex-col items-start gap-[17px] md:w-full">
            <Heading as="h3">Balance History</Heading>
            <div className="flex items-start self-stretch rounded-[25px] bg-white-A700_01 p-[23px] sm:flex-col sm:p-5">
              <div className="relative z-[2] mt-[3px] flex w-[7%] flex-col items-end gap-[30px] sm:w-full">
                <div className="flex items-center gap-2 self-stretch">
                  <Text as="p" className="text-right">
                    800
                  </Text>
                  <div className="h-px w-[6px] bg-indigo-300_05" />
                </div>
                <div className="flex items-center gap-2 self-stretch">
                  <Text as="p" className="text-right">
                    600
                  </Text>
                  <div className="h-px w-[6px] bg-indigo-300_05" />
                </div>
                <div className="flex items-center gap-2 self-stretch">
                  <Text as="p" className="text-right">
                    400
                  </Text>
                  <div className="h-px w-[6px] bg-indigo-300_05" />
                </div>
                <div className="flex items-center gap-2 self-stretch">
                  <Text as="p" className="text-right">
                    200
                  </Text>
                  <div className="h-px w-[6px] bg-indigo-300_05" />
                </div>
                <div className="flex items-center gap-2 self-stretch">
                  <Text as="p" className="text-right">
                    0
                  </Text>
                  <div className="h-px w-[6px] bg-indigo-300_05" />
                </div>
              </div>
              <Img
                src="/images/img_group_39.svg"
                width={684}
                height={410}
                alt="Group 30"
                className="mt-[-43px] h-[294px] sm:w-full"
              />
            </div>
          </div>

        </div>
        <div className="flex flex-col p-5 bg-white-A700_01 rounded-[15px]">
          <div className="flex flex-row justify-between mb-8">
            <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">Product Post</h1>
            <div className="flex flex-rows judtify-between">
               <button className="bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300  mr-4">
                    Edit
                  </button>
                  <Link href="/seller/product-post" className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8  rounded">
                    View
                  </Link>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 mr-40">
                  <div className="ml-7 flex w-[30%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
                    <Heading as="p" className="mr-[37px] self-end !font-bold md:mr-0">
                      Product
                  </Heading>          
                  </div>
                  <div className="flex w-[65%] justify-between gap-5 self-end md:w-full">
                    <Heading as="h4" className="self-end !font-bold">
                      ID Product
                    </Heading>
                     <Heading as="h4" className="self-end !font-bold">
                      Price
                    </Heading>
                    <Heading as="h5" className="self-start !font-bold">
                      Stock
                    </Heading>
                  </div>
          </div>
           <div className="h-2 w-full bg-indigo-50_03" />
             <div className="rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800 py-6 sm:py-5 mr-[37px]">
                    <Stockpro/>
                    <Stockpro/>
                    <Stockpro/>
                    <Stockpro/>
                    <Stockpro/>
                    <Stockpro/>
                    </div>       

        </div>
      </div>
    </div>
  );
}
