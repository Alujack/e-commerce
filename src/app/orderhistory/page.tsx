"use client"
import {Img,Heading,Text,Button} from "@/components"
import Orderitem from "@/components/orderitem"
export default function OrderHistory(){
    return (
        <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col w-full gap-2.5 mx-auto md:p-5 max-w-[99%]">
         
            <div className="flex md:flex-col gap-2">
              <div className=" rounded-[10px]">
                <Img
                  src="images/img_about2_png.png"
                  alt="about2png_one"
                  className="h-[420px] w-full md:h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-10 p-[38px] sm:p-5 bg-white-A700 rounded-[10px]">
                <div className="flex flex-col self-end w-[89%] md:w-full mt-[31px] gap-[29px]">
                  <Heading size="3xl" as="h1" className="leading-[21px]">
                    <>
                      We connect millions of buyers and sellers around
                      <br />
                      the world, empowering people & creating economic
                      <br />
                      opportunity for all.
                    </>
                  </Heading>
                  <Text as="p" className="leading-[23px]">
                    <>
                      Within our markets, millions of people around the world connect,
                      <br />
                      both online and offline, to make, sell and buy unique goods. We also
                      <br />
                      offer a wide range of Seller Services and tools that help creative
                      <br />
                      entrepreneurs start, manage & scale their businesses.
                    </>
                  </Text>
                </div>
                <Button
                  color="green_700"
                  size="9xl"
                  className="mb-8 ml-[58px] md:ml-0 sm:px-5 uppercase font-black min-w-[174px] rounded-[10px]"
                >
                 Our service
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-[7px] bg-gray-100_02 rounded-[10px]">
              <div className="flex justify-between items-center w-[80%] md:w-full gap-5 md:p-5 bg-light_green-600 rounded-[15px]">
                <div className="flex ml-[27px]">
                  <Heading size="5xl" as="h2" className="!text-black-900_02 uppercase">
                    History order
                  </Heading>
                </div>
                <Button
                  color="gray_200_03"
                  size="lg"
                  className="mr-[19px] sm:px-5 !text-black-900_02 font-semibold min-w-[106px] rounded-[17px]"
                >
                  View All
                </Button>
              </div>
              <div className="flex flex-col w-[96%] md:w-full  mb-20 gap-2.5">
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
                <Orderitem className="flex md:flex-col items-center pr-2.5 py-2.5 bg-gray-300_03 flex-1 rounded-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}