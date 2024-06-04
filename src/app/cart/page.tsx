"use client"
import { Text, Heading, Button, Img, Input } from "@/components";
import Ordercart from "@/components/ordercart";
import Totalsummery from "@/components/totalsummery";
import "@/styles/index.css";
import {useState} from"react";
import {useRouter} from "next/navigation";
import { useCart } from "@/context/cartcontext";
import { producttype } from "@/common.type";
export default function AddCart() {
  const [qty, setQty] = useState(1);  
  const { cartItems, removeFromCart} = useCart();
  console.log(cartItems)
 const router = useRouter();
 const totalsumery = (<>
  <Button
        color="green_700"
        size="9xl"
        className="mt-[31px] mb-[512px] sm:pl-5 uppercase font-medium min-w-[124px] rounded-[10px]"
        onClick ={()=>{
          router.push(`/cart/checkout`)
        }}
      >
        checkout
      </Button>
 </>)
 
  return (

    <>
     
      <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col w-full gap-[11px] mx-auto md:p-5 max-w-[99%]">
            <Input
              size="5xl"
              name="mainsection_one"
              placeholder={`Checking your product cart`}
              className="sm:px-5 font-bold rounded-[10px]"
            />
            <div className="flex md:flex-col items-center gap-2.5 p-[7px] bg-white-A700 rounded-[10px]">
              <div className=" scrollable-div flex flex-col flex-start md:self-stretch gap-[15px] flex-1">

              {cartItems.map((item:producttype, index:number) => (
                    <Ordercart key={index} save={100}  src ={item.src} price={item.price} item={item} index={index} className="flex md:flex-col items-start gap-5 p-4 bg-gray-50 flex-1 rounded-[10px]" />
                ))}
              </div>
             
                <Totalsummery  className="flex flex-col items-center w-[32%] md:w-full p-[30px] my-10 sm:p-5 border-green-700 border border-solid rounded-[10px]" Children={totalsumery}  />
             
              
            </div>
            <div className="flex md:flex-col justify-evenly items-start gap-16 bg-blue_gray-900_02 rounded-[20px]">
              <div className="flex flex-col items-start mt-[29px] px-[11px] md:p-5 md:mt-0">
                <Text size="5xl" as="p" className="ml-[3px] md:ml-0 !text-teal-A200 uppercase">
                  Pre Order
                </Text>
                <Text size="xs" as="p" className="mt-1 ml-[3px] md:ml-0 !text-gray-500 uppercase">
                  be the first to own
                </Text>
                <Text as="p" className="mt-[11px] ml-[3px] md:ml-0 !text-white-A700">
                  From $399
                </Text>
              </div>
              <div className="flex md:flex-col justify-center items-center w-[60%] md:w-full gap-0.5 md:p-5">
                <div className="md:self-stretch h-[140px] md:w-full flex-1 relative md:flex-none">
                  <div className="h-[140px] w-[93%] right-[0.21px] bottom-0 top-0 my-auto bg-gradient3 absolute rounded-[70px]" />
                  <Img
                    src="images/img_banner_png.png"
                    alt="bannerpng_one"
                    className="h-[125px] w-[72%] bottom-[0.00px] left-[0.00px] m-auto object-cover absolute"
                  />
                </div>
                <div className="flex flex-col items-start w-[44%] md:w-full gap-[13px] px-2">
                  <Text size="s" as="p" className="w-[37%] md:w-full ml-1.5 md:ml-0 !text-teal-A200 leading-[18px]">
                    <>
                      Opplo Watch Sport
                      <br />
                      Series 8
                    </>
                  </Text>
                  <Text size="6xl" as="p" className="ml-1.5 md:ml-0 !text-white-A700">
                    A healthy leap ahead
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-2">
              <Img
                src="images/img_about2_png.png"
                alt="about2png_one"
                className="w-[51%] md:w-full object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-center w-[49%] md:w-full gap-10 p-[38px] sm:p-5 bg-gray-300_07 rounded-[10px]">
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
          </div>
          <div className="p-[35px] sm:p-5 bg-white-A700">
            <div className="flex flex-col w-full mt-9 mb-4 pb-2.5 px-2.5 mx-auto md:p-5 bg-gray-100_03 max-w-[1320px] rounded-[10px]">
              <div className="w-[98%] md:w-full">
                <div className="flex md:flex-col justify-between items-center pr-2.5 gap-5">
                  <div className="flex justify-center w-[48%] md:w-full p-2.5">
                    <Heading size="12xl" as="h2" className="!text-gray-900_06 !font-plusjakartasans leading-[42px]">
                      Enjoy your shopping with TECHNESS the biggest online market.{" "}
                    </Heading>
                  </div>
                  <Button
                    color="gray_200_04"
                    size="9xl"
                    className="sm:px-5 font-plusjakartasans font-bold border-gray-900 border border-solid min-w-[213px] rounded-[25px]"
                  >
                    Contact Us
                  </Button>
                </div>
                <Img src="images/img_frame_947.svg" alt="image" className="h-[20px] w-full md:h-auto mt-[15px]" />
                <div className="flex md:flex-col justify-between items-start mt-[25px] gap-5">
                  <div className="flex flex-col w-[32%] md:w-full">
                    <div className="flex p-1.5 z-[1]">
                      <Heading
                        size="xl"
                        as="h3"
                        className="mt-[5px] mb-[3px] !text-gray-900_08 !font-plusjakartasans !font-bold"
                      >
                        About TECHNESS
                      </Heading>
                    </div>
                    <div className="h-[202px] mt-[-5px] relative">
                      <div className="w-full top-[0.00px] right-0 left-0 m-auto absolute">
                        <Text as="p" className="my-2 !text-gray-900_03 !font-plusjakartasans leading-[22px]">
                          TECHNESS is the leading online marketplace, where you can buy and sell everything from cars,
                          motorcycles, mobile phones, computers, electronics, furniture, books, pets, foods, and more.
                          TECHNESS connects buyers and sellers across the country, making it easy and convenient to find
                          what you need or sell what you don’t want.
                        </Text>
                      </div>
                      <div className="flex justify-between w-[73%] bottom-[0.00px] left-[0.00px] gap-5 m-auto absolute">
                        <Img src="images/img_social_icons_fa.svg" alt="socialiconsfa" className="h-[40px] w-[40px]" />
                        <Img src="images/img_logo_multiple.png" alt="logomultiple" className="w-[40px] object-cover" />
                        <Img
                          src="images/img_social_icons_tiktok_original.svg"
                          alt="socialicons_one"
                          className="h-[40px] w-[40px]"
                        />
                        <Img src="images/img_social_icons_x.svg" alt="socialiconsx" className="h-[40px] w-[40px]" />
                        <Button
                          size="3xl"
                          variant="gradient"
                          shape="circle"
                          color="light_blue_400_blue_600"
                          className="w-[40px] !rounded-[20px]"
                        >
                          <Img src="images/img_save.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[21px]">
                    <div className="flex self-center p-1.5">
                      <Heading size="5xl" as="h4" className="mt-[5px] !text-gray-900_02 !font-plusjakartasans">
                        Company
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start pb-[5px] gap-5">
                      <div className="flex flex-col self-end items-start gap-[27px]">
                        <a href="About" target="_blank" rel="noreferrer">
                          <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                            About
                          </Text>
                        </a>
                        <a href="Features" target="_blank" rel="noreferrer">
                          <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                            Features
                          </Text>
                        </a>
                      </div>
                      <div className="flex p-[5px]">
                        <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                          Work
                        </Text>
                      </div>
                      <a href="Career" target="_blank" rel="noreferrer" className="ml-2.5 md:ml-0">
                        <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                          Career
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[22px]">
                    <div className="flex p-1.5">
                      <Heading size="5xl" as="h5" className="self-end !text-gray-900_05 !font-plusjakartasans">
                        Help
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start gap-[27px]">
                      <a href="#" className="self-center">
                        <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                          Customer Support
                        </Text>
                      </a>
                      <a href="#" className="ml-[5px] md:ml-0">
                        <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                          Delivery Details
                        </Text>
                      </a>
                      <a href="#" className="ml-[5px] md:ml-0">
                        <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                          Terms & Conditions
                        </Text>
                      </a>
                      <a href="#" className="ml-[5px] md:ml-0">
                        <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                          Privacy Policy
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[15px]">
                    <div className="flex self-center p-2">
                      <Heading size="5xl" as="h6" className="!text-gray-900_09 !font-plusjakartasans">
                        Useful Information
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start gap-[22px]">
                      <div className="flex">
                        <Text size="xl" as="p" className="self-end !text-gray-900_09 !font-plusjakartasans">
                          Safety Tip
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="self-end !text-gray-900_09 !font-plusjakartasans">
                        Ads Posting Rule
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
