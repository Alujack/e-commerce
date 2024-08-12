"use client"
import React from "react";
import {Button, Img } from ".";

export default function Footer() {
  return (
   <footer className=" sm:p-0  max-w-[100wv]">
          <div className="w-full mt-3  mx-auto  bg-[#131921] rounded-[1px] px-4">
            <div className="flex flex-col gap-[15px]">
              <div className="flex md:flex-col justify-between items-center pr-2.5 gap-5">
                <div className="flex justify-center w-[48%] md:w-full p-2.5">
                  <h2  className=" text-2xl text-white-A700 leading-[42px]">
                    Enjoy your shopping with TECHNESS the biggest online market.{" "}
                  </h2>
                </div>
                <Button
                  color="gray_200_04"
                  size="9xl"
                  className="text-white-A700 font-plusjakartasans font-bold border-gray-900 border border-solid min-w-[213px] rounded-[25px]"
                >
                  Contact Us
                </Button>
              </div>
              <div className="h-2 border-b-gray-300 w-full"></div>
              <div className="p-2.5">
                <div className="flex md:flex-col justify-between items-start gap-5">
                  <div className="flex flex-col w-[32%] md:w-full">
                    <div className="flex p-1.5">
                      <h6    
                        className="mt-[5px] mb-[3px] !text-gray-900_08 !font-plusjakartasans !font-bold"
                      >
                        About TECHNESS
                      </h6>
                    </div>
                    <p  className="mt-[5px] text-white-A700 leading-[22px] mb-4">
                      TECHNESS is the leading online marketplace, where you can buy and sell everything from cars,
                      motorcycles, mobile phones, computers, electronics, furniture, books, pets, foods, and more.
                      TECHNESS connects buyers and sellers across the country, making it easy and convenient to find
                      what you need or sell what you don’t want.
                    </p>
                    <div className="flex justify-between w-[73%] md:w-full mt-[-2px] gap-5 relative">
                      <Img src="/images/img_social_icons_fa_blue_a700_01.svg" className="w-[40px] object-cover" />     
                      <Img src="/images/img_logo_multiple.png" alt="logomultiple" className="w-[40px] object-cover" />
                      <Img src="/images/img_social_icons_tiktok_original.svg"alt="socialicons_one" className="h-[40px] w-[40px]"/>
                      <Img src="/images/img_social_icons_x.svg" alt="socialiconsx" className="h-[40px] w-[40px]" />
                      <Img src="/images/img_save.svg" className="w-[40px] object-cover"/>  
                    </div>
                  </div>
                  <div className="text-white-A700 flex flex-col items-start gap-[21px]">
                    <div className="flex self-center p-1.5">
                      <h5  className="mt-[5px] text-xl">
                        Company
                      </h5>
                    </div>
                    <ul className="flex flex-col items-start ml-[9px] gap-[27px] md:ml-0">
                      <li>
                        <a href="#">
                          <p  className="">
                            About
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p  className="">
                            Features
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="">
                            Work
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="">
                            Career
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-white-A700 flex flex-col items-start gap-[22px]">
                    <div className="flex p-1.5">
                      <h5 className="text-white self-end text-xl">
                        Help
                      </h5>
                    </div>
                    <ul className="text-white-A700 flex flex-col self-end items-start gap-[27px]">
                      <li>
                        <a href="#">
                          <p  className="">
                            Customer Support
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p  className="">
                            Delivery Details
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p  className="">
                            Terms & Conditions
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p  className="">
                            Privacy Policy
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-white-A700 flex flex-col items-start gap-[22px]">
                    <div className="flex self-center p-2">
                      <h5  className="">
                        Useful Information
                      </h5>
                    </div>
                    <ul className="flex flex-col items-start ml-2.5 gap-[27px] md:ml-0">
                      <li>
                        <a href="#">
                          <p  className="">
                            Safety Tip
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p  className="">
                            Ads Posting Rule
                          </p>
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
