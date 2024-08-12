"use client";
import { useState } from "react";
import { Text, Heading, Button, Img } from "@/components";
import Cartlabel from "@/components/cartlabel";
import { useCart } from "@/context/cartcontext";
import { Product } from "@/context/productDetail";
export default function ProductDetails({
  product,
}: {
  product: Product | null;
}) {
  const [count, setCount] = useState(1);
  const { cartItems, setCartItems } = useCart();
  console.log(product);
  return (
    <>
      <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-3 mx-auto md:p-5 max-w-[95%]">
            <div className="flex md:flex-col items-end gap-[9px] p-3.5 bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start md:self-stretch mt-[37px] pb-[22px] sm:pb-5 flex-1">
                <Button
                  color="gray_900_01"
                  size="xs"
                  shape="round"
                  className="uppercase min-w-[39px] !rounded-[5px]"
                >
                  new
                </Button>
                <div className="self-stretch">
                  <Img
                    src={`http://localhost:8000/${product?.images}`}
                    alt="image"
                    className="h-[500px] md:h-auto object-cover"
                  />
                </div>
                <div className="flex self-stretch justify-between gap-5">
                  <Img
                    src=""
                    alt="image_one"
                    className="w-[21%] object-cover"
                  />
                  <Img
                    src=""
                    alt="image_two"
                    className="w-[21%] object-cover"
                  />
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
                    <Heading
                      size="xl"
                      as="h1"
                      className="w-[84%] !font-bold leading-[19px]"
                    >
                      {product?.name}
                    </Heading>
                  </div>
                  <Heading size="6xl" as="h2" className="mt-0.5 text-black">
                    $ {product?.price}
                  </Heading>
                  <Text
                    size="s"
                    as="p"
                    className="mt-[7px] ml-[3px] md:ml-0 !text-black-900_02"
                  >
                    {product?.description}
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
                  <Img
                    src="/images/img_checkmark.svg"
                    alt="checkmark_one"
                    className="self-end h-[12px] w-[12px]"
                  />
                  <Text size="s" as="p" className="self-end !text-black-900_02">
                    In stock
                  </Text>
                </div>
                <div className="flex flex-col self-stretch items-start mt-5 gap-2">
                  <Heading as="h3">qty</Heading>
                  <div className="flex sm:flex-col self-stretch items-center">
                    <div className="flex justify-center items-center w-[32%] sm:w-full p-[7px] border-gray-500_33 border border-solid bg-white-A700 rounded-[10px]">
                      <Button onClick={() => setCount(count - 1)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </Button>
                      <div className="flex justify-center bg-white-A700 flex-1">
                        <div className="flex">
                          <Heading as="h4" className="text-center">
                            {count}
                          </Heading>
                        </div>
                      </div>
                      <Button onClick={() => setCount(count + 1)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </Button>
                    </div>
                    <Button
                      color="green_700"
                      size="9xl"
                      className="self-start ml-[23px] sm:ml-0 sm:px-5 uppercase font-medium min-w-[168px] rounded-[10px]"
                      onClick={() => setCartItems([...cartItems, product])}
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
                    <Text
                      size="s"
                      as="p"
                      className="self-start !text-black-900_02"
                    >
                      Guaranteed Safe Checkout
                    </Text>
                  </div>
                  <div className="flex self-stretch pb-[21px] sm:pb-5 border-gray-300_04 border-b border-solid">
                    <Img
                      src="/images/img_pay_png.png"
                      alt="paypng_one"
                      className="w-[58%] object-cover"
                    />
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
                    <Button
                      color="gray_300_07"
                      size="3xl"
                      shape="circle"
                      className="w-[40px] !rounded-[20px]"
                    >
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button
                      color="gray_300_07"
                      size="3xl"
                      shape="circle"
                      className="w-[40px] !rounded-[20px]"
                    >
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button
                      color="gray_300_07"
                      size="3xl"
                      shape="circle"
                      className="w-[40px] !rounded-[20px]"
                    >
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button
                      color="gray_300_07"
                      size="3xl"
                      shape="circle"
                      className="w-[40px] !rounded-[20px]"
                    >
                      <Img src="/images/img_settings.svg" />
                    </Button>
                    <Button
                      color="gray_300_07"
                      size="3xl"
                      shape="circle"
                      className="w-[40px] !rounded-[20px]"
                    >
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
                  {/* <Cartlabel key={product?.id} item={product} qty={count}></Cartlabel> */}
                  <div className="flex items-center gap-3">
                    <Img
                      src="/images/img_settings.svg"
                      alt="settings"
                      className="h-[19px]"
                    />
                    <Text as="p" className="self-end">
                      <span className="text-gray-700_01">Ships from</span>
                      <span className="text-black-900_02">&nbsp;</span>
                      <span className="text-black-900_02 font-bold">
                        United States
                      </span>
                    </Text>
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
