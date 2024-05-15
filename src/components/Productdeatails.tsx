"use client"
import {useState} from "react";
import { Text, Heading, Button, Img } from "@/components";
import Cartlabel from "@/components/cartlabel";
import {useCart} from "@/context/cartcontext"
import { producttype } from "@/common.type";
// import  {useParams} from "react-router-dom";
export default function ProductDetails({product}:{product:producttype}) {
    const [count,setCount] = useState(1);

    const {cartItems, setCartItems} = useCart();
  return (
    <>
      <div key = {product?.id} className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-3 mx-auto md:p-5 max-w-[95%]">
            
            <div className="flex md:flex-col items-end gap-[9px] p-3.5 bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start md:self-stretch mt-[37px] pb-[22px] sm:pb-5 flex-1">
                <Button color="gray_900_01" size="xs" shape="round" className="uppercase min-w-[39px] !rounded-[5px]">
                  new
                </Button>
                <div className="self-stretch">
                  <Img src={product?.src} alt="image" className="h-[500px] md:h-auto object-cover" />
                </div>
                <div className="flex self-stretch justify-between gap-5">
                  <Img src="" alt="image_one" className="w-[21%] object-cover" />
                  <Img src="" alt="image_two" className="w-[21%] object-cover" />
                  <Img   
                    src=""
                    alt="image_three"
                    className="w-[21%] mr-[216px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-[33%] md:w-full">
                <div className="flex flex-col self-stretch items-start">
                  <div className="flex self-stretch">
                    <Heading size="xl" as="h1" className="w-[84%] !font-bold leading-[19px]">
                      <>
                        {product?.title}
                      </>
                    </Heading>
                  </div>
                  <Heading size="6xl" as="h2" className="mt-0.5">
                    ${product?.price}
                  </Heading>
                  <Text size="s" as="p" className="mt-[7px] ml-[3px] md:ml-0 !text-black-900_02">
                    {product?.discription}
                  </Text>
                </div>
                <div className="self-stretch h-[54px] mt-5 pr-[5px] py-[5px] border-gray-300_04 border-b border-solid relative">
                  <div className="h-[28px] w-[29%] opacity-0.05 bg-green-700_5e absolute rounded-md" />
                  <Text
                    size="s"
                    as="p"
                    className="left-[15.00px] top-[10.65px] m-auto !text-green-700 uppercase absolute"
                  >
                    free shipping
                  </Text>
                </div>
                <div className="flex items-center mt-5 gap-[7px]">
                  <Img src="/images/img_checkmark.svg" alt="checkmark_one" className="self-end h-[12px] w-[12px]" />
                  <Text size="s" as="p" className="self-end !text-black-900_02">
                    In stock
                  </Text>
                </div>
                <div className="flex flex-col self-stretch items-start mt-5 gap-2">
                  <Heading as="h3">qty</Heading>
                  <div className="flex sm:flex-col self-stretch items-center">
                    <div className="flex justify-center items-center w-[32%] sm:w-full p-[7px] border-gray-500_33 border border-solid bg-white-A700 rounded-[10px]">
                      <Button onClick={()=>setCount(count-1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                        </Button>
                      <div className="flex justify-center bg-white-A700 flex-1">
                        <div className="flex">
                          <Heading as="h4" className="text-center">
                            {count}
                          </Heading>
                        </div>
                      </div>
                      <Button onClick={()=>setCount(count+1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        </Button>
                    </div>
                    <Button
                      color="green_700"
                      size="9xl"
                      className="self-start ml-[23px] sm:ml-0 sm:px-5 uppercase font-medium min-w-[168px] rounded-[10px]"
                      onClick ={()=>setCartItems([...cartItems, product])}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      color="blue_gray_50_02"
                      size="8xl"
                      shape="circle"
                      className="self-start w-[50px] ml-[42px] sm:ml-0 !rounded-[25px]"
                    >
                      <Img src="/images/img_favorite_gray_500.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col self-stretch items-start mt-3">
                  <div className="flex p-2.5 z-[1]">
                    <Text size="s" as="p" className="self-start !text-black-900_02">
                      Guaranteed Safe Checkout
                    </Text>
                  </div>
                  <div className="flex self-stretch pb-[21px] sm:pb-5 border-gray-300_04 border-b border-solid">
                    <Img src="/images/img_pay_png.png" alt="paypng_one" className="w-[58%] object-cover" />
                  </div>
                  <div className="flex flex-col items-start mt-[19px]">
                    <div className="flex gap-[7px] flex-wrap">
                      <Heading as="h5" className="uppercase">
                        SKU:{" "}
                      </Heading>
                      <Text as="p">ABC025168</Text>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <Heading as="h6" className="uppercase">
                        Category:{" "}
                      </Heading>
                      <Text as="p">Cell Phones & Tablets</Text>
                    </div>
                    <div className="flex items-center gap-[7px] flex-wrap">
                      <Heading as="p" className="my-0.5 uppercase">
                        Tags:{" "}
                      </Heading>
                      <Text as="p" className="self-end">
                        Laptop, Macbook, Computer, M1
                      </Text>
                    </div>
                  </div>
                  <div className="flex mt-5 gap-3.5">
                    <Button color="gray_300_07" size="3xl" shape="circle" className="w-[40px] !rounded-[20px]">
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button color="gray_300_07" size="3xl" shape="circle" className="w-[40px] !rounded-[20px]">
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button color="gray_300_07" size="3xl" shape="circle" className="w-[40px] !rounded-[20px]">
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button color="gray_300_07" size="3xl" shape="circle" className="w-[40px] !rounded-[20px]">
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button color="gray_300_07" size="3xl" shape="circle" className="w-[40px] !rounded-[20px]">
                      <Img src="/images/img_settings.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[23%] md:w-full mb-[63px] gap-3">
                <div className="flex flex-col items-start justify-center gap-[33px] p-[30px] sm:p-5 bg-blue_gray-50_02 rounded-[10px]">
                  <Text as="p" className="mt-[3px]">
                    <span className="text-gray-700_01">Brand:&nbsp;</span>
                    <span className="text-black-900_02 font-bold">Sonex</span>
                  </Text>
                  <Img
                    src="/images/img_brand6_png.png"
                    alt="brand6png_one"
                    className="self-center w-[69%] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <Cartlabel key={product?.id} qty={count} price={product?.price} title={product?.title} src={product?.src} subtitle={product?.subtitle}></Cartlabel>
                  <div className="flex items-center gap-3">
                    <Img src="/images/img_settings.svg" alt="settings" className="h-[19px]" />
                    <Text as="p" className="self-end">
                      <span className="text-gray-700_01">Ships from</span>
                      <span className="text-black-900_02">&nbsp;</span>
                      <span className="text-black-900_02 font-bold">United States</span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-1.5">
              <Img
                src="/images/img_banner2_png.png"
                alt="banner2png_one"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
              <Img
                src="/images/img_banner3_png.png"
                alt="banner3png_one"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-4 bg-white-A700 rounded-[10px]">
              <div className="flex md:flex-col gap-[17px]">
                <div className="flex flex-col md:self-stretch gap-[15px] flex-1">
                  <div className="flex justify-between items-start gap-5 p-3 bg-green-700 rounded-[10px]">
                    <Heading
                      size="5xl"
                      as="h5"
                      className="mt-1 ml-[9px] md:ml-0 !text-white-A700 uppercase !font-semibold"
                    >
                      Explore Our Product’s discount
                    </Heading>
                    <Button
                      color="gray_200_03"
                      size="sm"
                      className="mb-[7px] mr-[9px] md:mr-0 capitalize font-medium min-w-[89px] rounded-[10px]"
                    >
                      View All{" "}
                    </Button>
                  </div>
                  <div className="p-[13px] bg-blue_gray-100_02 rounded-[15px]">
                    <div className="flex md:flex-col items-center gap-[15px] my-[37px]">
                      <div className="flex sm:flex-col justify-center w-[45%] md:w-full gap-[15px]">
                        <div className="flex flex-col md:flex-row w-[22%] sm:w-full gap-[15px]">
                          <div className="flex flex-col items-center p-2.5 bg-gray-200 flex-1">
                            <Img src="/images/img_group_1_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                          <div className="flex flex-col items-center p-2.5 bg-gray-200 flex-1">
                            <Img src="/images/img_group_2_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                          <div className="/flex flex-col items-center p-2.5 bg-gray-200 flex-1">
                            <Img src="/images/img_group_3_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                          <div className="flex flex-col items-center p-2.5 bg-gray-200 flex-1">
                            <Img src="/images/img_group_4_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                        </div>
                        <div className="sm:self-stretch py-[50px] md:py-5 bg-gray-300_06 flex-1">
                          <Img
                            src="/images/img_prod5_png_265x277.png"
                            alt="prod5png_one"
                            className="h-[265px] w-full md:h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center md:self-stretch gap-[7px] p-[15px] bg-gray-200_01 flex-1">
                        <div className="flex justify-center w-[93%] md:w-full p-[5px]">
                          <Heading size="3xl" as="h6" className="my-1 leading-[19px]">
                            <>
                              Xioma Redmi Note 11 Pro 256GB 2023, Black
                              <br />
                              Smartphone
                            </>
                          </Heading>
                        </div>
                        <div className="flex items-center gap-[27px] flex-wrap">
                          <Heading size="6xl" as="h5" className="!text-red-600">
                            $569.00{" "}
                          </Heading>
                          <Heading size="xl" as="h6" className="!text-gray-700_01 line-through">
                            $759.00
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-center w-[93%] md:w-full gap-1.5">
                          <div className="flex items-center w-[88%] md:w-full mt-0.5 gap-[11px]">
                            <div className="h-[6px] w-[6px] bg-gray-700_01 rounded-[3px]" />
                            <Text size="s" as="p" className="!text-black-900_02">
                              Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                            </Text>
                          </div>
                          <div className="flex items-center w-[84%] md:w-full gap-[11px]">
                            <div className="h-[6px] w-[6px] bg-gray-700_01 rounded-[3px]" />
                            <Text size="s" as="p" className="!text-black-900_02">
                              DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                            </Text>
                          </div>
                          <div className="flex items-center w-[91%] md:w-full gap-[11px]">
                            <div className="h-[6px] w-[6px] bg-gray-700_01 rounded-[3px]" />
                            <Text size="s" as="p" className="!text-black-900_02">
                              Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                            </Text>
                          </div>
                        </div>
                        <div className="flex gap-[9px]">
                          <Text
                            size="s"
                            as="p"
                            className="flex justify-center items-center h-[28px] pl-1 pr-8 py-1.5 sm:pr-5 !text-green-700 uppercase bg-green-700 rounded-md"
                          >
                            free shipping
                          </Text>
                          <Button color="red_600" size="sm" shape="round" className="uppercase min-w-[94px]">
                            free gift
                          </Button>
                        </div>
                        <div className="flex sm:flex-col self-stretch justify-between items-center gap-5">
                          <Text
                            size="md"
                            as="p"
                            className="w-[30%] sm:w-full !text-black-900_02 uppercase !font-medium leading-[19px]"
                          >
                            <>
                              hurry up!
                              <br />
                              Promotion will
                              <br />
                              expires in
                            </>
                          </Text>
                          <div className="flex">
                            <div className="flex items-start gap-[5px] p-[7px] bg-blue_gray-50 flex-wrap rounded-md">
                              <Heading size="xl" as="h6" className="mt-[18px] mb-5 text-center !font-bold">
                                -162
                              </Heading>
                              <Heading as="p" className="mt-[18px] !text-gray-700_01 text-center">
                                d
                              </Heading>
                            </div>
                            <div className="flex items-start gap-[5px] p-[17px] bg-blue_gray-50 flex-wrap rounded-md">
                              <Heading size="xl" as="h6" className="mt-2 mb-2.5 text-center !font-bold">
                                -9
                              </Heading>
                              <Heading as="p" className="mt-2 !text-gray-700_01 text-center">
                                h
                              </Heading>
                            </div>
                            <div className="flex items-start gap-[5px] p-2.5 bg-blue_gray-50 flex-wrap rounded-md">
                              <Heading size="xl" as="h6" className="mt-[15px] mb-[18px] text-center !font-bold">
                                -32
                              </Heading>
                              <Heading as="p" className="mt-[15px] !text-gray-700_01 text-center">
                                m
                              </Heading>
                            </div>
                            <div className="flex items-center gap-1 p-2.5 bg-blue_gray-50 flex-wrap rounded-md">
                              <Heading size="xl" as="h6" className="my-4 text-center !font-bold">
                                -34
                              </Heading>
                              <Heading as="p" className="!text-gray-700_01 text-center">
                                s
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="flex self-end mr-[15px] p-2.5 md:mr-0">
                          <Text size="md" as="p" className="my-[3px]">
                            <span className="text-gray-700_01">Sold:&nbsp;</span>
                            <span className="text-black-900_02 font-bold">26/75</span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[25%] md:w-full gap-[7px]">
                  <Img
                    src="images/img_main_section.png"
                    alt="mainsection_one"
                    className="md:w-full flex-1 object-cover rounded-[12px]"
                  />
                  <Img
                    src="/images/img_main_section_177x296.png"
                    alt="mainsection_one"
                    className="md:w-full flex-1 object-cover rounded-[12px]"
                  />
                  <Img
                    src="/images/img_main_section_177x298.png"
                    alt="mainsection_one"
                    className="h-[177px] w-full flex-1 object-cover rounded-[12px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
               {/* <div className="flex md:flex-col gap-[13px] flex-1">
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />      
                </div>
                <div className="flex md:flex-col gap-[13px] flex-1">
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />      
                </div>
                <div className="flex md:flex-col gap-[13px] flex-1">
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  <ProductCard className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                </div> */}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}
