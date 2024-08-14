"use client";
import { useState } from "react";
import { Text, Heading, Button, Img } from "@/components";
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
      <div className="w-full  mt-9">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-3 mx-auto md:p-5 max-w-[95%]">
            <div className="flex md:flex-col items-end gap-[9px] p-3.5 bg-white-A700 rounded-[10px]">
              <div className="flex flex-col md:self-stretch mt-[37px] pb-[22px] sm:pb-5 flex-1 mb-40">
                <Button
                  color="gray_900_01"
                  size="xs"
                  shape="round"

                  className="uppercase min-w-[39px] !rounded-[5px] self-start mb-10"
                >
                  new
                </Button>
                <div className="">
                  <img

                    src={`http://localhost:8000/${product?.product?.image}`}
                    alt="image_three"
                    className=" object-cover border border-gray-300 ml-[30%]"
                  />
                </div>
                <div className="flex self-stretch justify-between gap-5 mt-5">
                  {product?.images.map((image)=>(
                  <img
                    src={`http://localhost:8000/${image.image}/`}
                    alt="image_four"
                    className="w-[21%] object-cover border border-gray-300"
                  />
                  ))}
                  
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

                      {product?.product?.name}  {product?.product?.name} {product?.product?.name}

                    </Heading>
                  </div>
                  <Heading size="6xl" as="h2" className="mt-0.5 text-black">
                     $  {product?.product?.price}
                  </Heading>
                  <Text
                    size="s"
                    as="p"

                    className="mt-[7px] ml-[3px] md:ml-0 !text-black-900_02 text-sm"
                  >
                    {product?.product?.description}
                  </Text>
                </div>
                <div className="self-stretch h-[54px] mt-5 pr-[5px] py-[5px] relative">
                  <div className="h-[28px] w-[29%] opacity-0.05 bg-green-700_5e absolute rounded-md" />
                  <Text
                    size="s"
                    as="p"
                    className="left-[15.00px] top-[10.65px] m-auto !text-green-700 uppercase absolute bg-gray-300_12 rounded-sm py-3 px-5 "
                  >
                    free shipping
                  </Text>
                  <div className="border-gray-400 border-b border-solid mt-16"></div>
                </div>


                <div className="flex items-center mt-9 gap-[7px]">
                  <Img
                    src="/images/icons/check.png"
                    alt="checkmark_one"
                    className="self-end h-[12px] w-[12px]"
                  />
                  <Text
                    size="s"
                    as="p"
                    className="self-end !text-black-900_02 "
                  >

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
                      
                    >
                      Add To Cart
                    </Button>

                    <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        />
                      </svg>
                    </div>
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

                  <div className="flex self-stretch pb-[21px] sm:pb-5 border-gray-400 border-b border-solid">


                    <Img
                      src="/images/img_pay_png.png"
                      alt="paypng_one"
                      className="w-[58%] object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start mt-[19px]">
                    <div className="flex gap-[7px] flex-wrap">
                      <Heading as="h5" className="uppercase my-2">
                        SKU:{" "}
                      </Heading>
                      <Text as="p" className="my-2">
                        ABC025168
                      </Text>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <Heading as="h6" className="uppercase">
                        Category:{" "}
                      </Heading>
                      {product?.categories.map((category)=>(<p>{category.category_name}</p>))}
                    </div>
                    <div className="flex items-center gap-[7px] flex-wrap">
                      <Heading as="p" className=" uppercase my-2">
                        Tags:{" "}
                      </Heading>
                      <Text as="p" className="self-end my-2">
                        Laptop, Macbook, Computer, M1
                      </Text>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/facebook.png"
                        alt="checkmark_one"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* Twiter */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/twiter.png"
                        alt="checkmark_one"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* Instagram */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/instargram.jpg"
                        alt="checkmark_one"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* YouTube */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/youtube.png"
                        alt="checkmark_one"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* Dribbble */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/Dribbble.jpg"
                        alt="checkmark_one"
                        className="h-6 w-6 text-black"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center p-4 mb-36">
                {/* <!-- Brand Section --> */}
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center w-full">
                  <p className="text-gray-700 font-medium">
                    Brand: <span className="font-semibold">Apple MacBook</span>
                  </p>
                  <img
                    src="/images/productdetail/mac-logo.png"
                    alt="Sonex Logo"
                    className="w-32 mt-2"
                  />
                </div>

                {/* <!-- Cart Section --> */}
                <div className="bg-white border-2 border-green-400 rounded-lg p-4 mt-5 w-full">
                  <h2 className="text-lg font-semibold my-3">Your Cart</h2>
                  <div className="flex items-center mt-3">
                    <img
                      src="/images/productdetail/2.jpg"
                      alt="Pinnaeple Macbook Pro"
                      className="w-16 h-16 object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">
                        Pinnaeple Macbook Pro 2022 M1/ 512GB
                      </p>
                      <p className="text-gray-500 py-2">3 x $579.00</p>
                    </div>
                  </div>
                  <hr className="my-3 border border-gray-200" />
                  <div className="flex justify-between">
                    <p className="font-medium ">Sub Total:</p>
                    <p className="font-semibold ">$1,737.00</p>
                  </div>
                  <hr className="my-3 border border-gray-200" />
                  <div className="flex justify-between  mt-4">
                    <button className=" bg-gray-200 text-white px-4 py-2 rounded-md hover hover:bg-slate-500 hover:text-white-A700">
                      VIEW CART
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover hover:bg-slate-500 hover:text-white-A700">
                      CHECKOUT
                    </button>
                  </div>
                </div>

                {/* <!-- Shipping Section --> */}
                <div className="flex items-center mt-4 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18M3 10h18m-2 10H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p>
                    Ships from{" "}
                    <span className="font-semibold">United States</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex flex-col w-full gap-3 mx-auto md:p-5 max-w-[95%]">
            <div className="flex md:flex-col items-end gap-[9px] p-3.5 bg-white-A700 rounded-[10px] shadow-lg">
              <div className="bg-white p-6 rounded-lg ">
                {/* <!-- Tabs Section --> */}
                <div className="flex justify-center border-b border-gray-200 mb-4">
                  <a
                    href="#description"
                    className="px-4 py-2 text-sm font-medium text-gray-700 border-b-2 border-orange-500"
                  >
                    DESCRIPTION
                  </a>
                  <a
                    href="#additional-information"
                    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    ADDITIONAL INFORMATION
                  </a>
                  <a
                    href="#specification"
                    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    SPECIFICATION
                  </a>
                  <a
                    href="#review"
                    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    REVIEW
                  </a>
                </div>

                {/* <!-- Content Section --> */}
                <div className="flex">
                  {/* <!-- Description --> */}
                  <div className="w-2/3 pr-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Description
                    </h2>
                    <p className="text-gray-600 text-sm">
                      The most powerful MacBook Pro ever is here. With the
                      blazing-fast M1 Pro or M1 Max chip — the first Apple
                      silicon designed for pros — you get groundbreaking
                      performance and amazing battery life. Add to that a
                      stunning Liquid Retina XDR display, the best camera and
                      audio ever in a Mac notebook, and all the ports you need.
                      The first notebook of its kind, this MacBook Pro is a
                      beast. M1 Pro takes the exceptional performance of the M1
                      architecture to a whole new level for pro users.
                    </p>
                    <p className="text-gray-600 text-sm mt-4">
                      Even the most ambitious projects are easily handled with
                      up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural
                      Engine, and dedicated encode and decode media engines that
                      support H.264, HEVC, and ProRes codecs.
                    </p>
                  </div>

                  {/* <!-- Feature List --> */}
                  <div className="w-1/3 border-l border-gray-200 pl-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Feature
                    </h2>
                    <ul className="text-gray-600 text-sm space-y-3">
                      <li className="flex items-center">
                        <img
                          src="/images/icons/warranty.png"
                          alt="Warranty Icon"
                          className="w- 8 h-8 mr-2"
                        />
                        Free 1 Year Warranty
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/shipping.png"
                          alt="Shipping Icon"
                          className="w-8 h-8 mr-2"
                        />
                        Free Shipping & Fast Delivery
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/money_back.jpg"
                          alt="Money Back Icon"
                          className="w-8 h-8 mr-2"
                        />
                        100% Money-back guarantee
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/support.png"
                          alt="Support Icon"
                          className="w-8 h-8 mr-2"
                        />
                        24/7 Customer support
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/secure_payment.jpg"
                          alt="Secure Payment Icon"
                          className="w-8 h-8 mr-2"
                        />
                        Secure payment method
                      </li>
                    </ul>

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
