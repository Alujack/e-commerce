"use client"
import {Img,Heading,Text,Button} from "./"
import Header from "./Header"
import Orderitem from "./orderitem"
export default function OrderHistory(){
    return (
        <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col w-full gap-2.5 mx-auto md:p-5 max-w-[99%]">
            <Header/>
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
          <footer className="p-[35px] sm:p-5 bg-white-A700">
            <div className="flex flex-col justify-center w-full mt-9 mb-4 pb-2.5 px-2.5 mx-auto md:p-5 bg-gray-100_03 max-w-[1320px] rounded-[10px]">
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
                  <div className="flex flex-col items-start gap-[15px]">
                    <div className="flex self-center p-2">
                      <Heading size="5xl" as="h5" className="!text-gray-900_09 !font-plusjakartasans">
                        Useful Information
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start gap-[15px]">
                      <div className="flex">
                        <Text size="xl" as="p" className="self-end !text-gray-900_09 !font-plusjakartasans">
                          Safety Tip
                        </Text>
                      </div>
                      <div className="flex self-center">
                        <Text size="xl" as="p" className="self-end !text-gray-900_09 !font-plusjakartasans">
                          Ads Posting Rule
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}