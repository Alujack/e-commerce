"use client"
import React from "react";
import { Text, Heading, Button, Img } from ".";

export default function Footer() {
  return (
   <footer className="p-[10px] sm:p-0 bg-white-A700 max-w-[100wv]">
          <div className="w-full mt-3 mb-4 px-[5px] mx-auto md:p-5 sm:px-5 bg-gray-100_01  rounded-[1px]">
            <div className="flex flex-col gap-[15px]">
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
              <Img src="images/img_frame_947.svg" alt="image_one" className="h-[20px]" />
              <div className="p-2.5">
                <div className="flex md:flex-col justify-between items-start gap-5">
                  <div className="flex flex-col w-[32%] md:w-full">
                    <div className="flex p-1.5">
                      <Heading
                        size="xl"
                        as="h6"
                        className="mt-[5px] mb-[3px] !text-gray-900_08 !font-plusjakartasans !font-bold"
                      >
                        About TECHNESS
                      </Heading>
                    </div>
                    <Text as="p" className="mt-[5px] !text-gray-900_03 !font-plusjakartasans leading-[22px]">
                      TECHNESS is the leading online marketplace, where you can buy and sell everything from cars,
                      motorcycles, mobile phones, computers, electronics, furniture, books, pets, foods, and more.
                      TECHNESS connects buyers and sellers across the country, making it easy and convenient to find
                      what you need or sell what you don’t want.
                    </Text>
                    <div className="flex justify-between w-[73%] md:w-full mt-[-2px] gap-5 relative">
                      <Button size="3xl" shape="square" className="w-[40px]">
                        <Img src="images/img_social_icons_fa_blue_a700_01.svg" />
                      </Button>
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
                  <div className="flex flex-col items-start gap-[21px]">
                    <div className="flex self-center p-1.5">
                      <Heading size="5xl" as="h5" className="mt-[5px] !text-gray-900_02 !font-plusjakartasans">
                        Company
                      </Heading>
                    </div>
                    <ul className="flex flex-col items-start ml-[9px] gap-[27px] md:ml-0">
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                            About
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                            Features
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                            Work
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                            Career
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[22px]">
                    <div className="flex p-1.5">
                      <Heading size="5xl" as="h5" className="self-end !text-gray-900_05 !font-plusjakartasans">
                        Help
                      </Heading>
                    </div>
                    <ul className="flex flex-col self-end items-start gap-[27px]">
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                            Customer Support
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                            Delivery Details
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                            Terms & Conditions
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                            Privacy Policy
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[22px]">
                    <div className="flex self-center p-2">
                      <Heading size="5xl" as="h5" className="!text-gray-900_09 !font-plusjakartasans">
                        Useful Information
                      </Heading>
                    </div>
                    <ul className="flex flex-col items-start ml-2.5 gap-[27px] md:ml-0">
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                            Safety Tip
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                            Ads Posting Rule
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
  );
}
