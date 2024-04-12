import {Heading, Img, Text,Input,Button,CheckBox} from "../."
export default function PopularCategories(){
    return (
              <div className="flex gap-[11px] rounded-[10px] bg-gray-100_03 py-2.5 md:flex-col">
                <div className="flex w-full flex-col items-center gap-3.5 md:p-5 rounded-[50%] bg-gray-300_33">
                  <div className="self-stretch rounded-[10px]  p-6 sm:p-5">
                    <Img
                      src="images/img_cat1_png.png"
                      alt="gaming_one"
                      className="mb-0.5 mt-1 h-[55px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="h2" className="text-center !text-black-900_02">
                    Gaming
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-3.5 md:p-5">
                  <div className="flex flex-col items-center justify-center self-stretch rounded-[55px] bg-gray-300_33 p-[26px] sm:p-5">
                    <Img
                      src="images/img_cat2_png.png"
                      alt="cat2png_one"
                      className="mt-0.5 h-[55px] w-[58%] object-cover"
                    />
                  </div>
                  <Heading size="s" as="h3" className="text-center !text-black-900_02">
                    Sport Equip
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-[26px] sm:p-5">
                    <Img
                      src="images/img_cat3_png.png"
                      alt="cat3png_one"
                      className="mt-0.5 h-[55px] w-[56px] object-cover"
                    />
                  </div>
                  <Heading size="s" as="h4" className="text-center !text-black-900_02">
                    Kitchen
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-[26px] sm:p-5">
                    <Img
                      src="images/img_cat4_png.png"
                      alt="cat4png_one"
                      className="mt-0.5 h-[55px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="h5" className="text-center !text-black-900_02">
                    Robot Cleaner
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="flex flex-col items-center justify-center self-stretch rounded-[55px] bg-gray-300_33 p-[26px] sm:p-5">
                    <Img
                      src="images/img_cat5_png.png"
                      alt="cat5png_one"
                      className="mt-0.5 h-[55px] w-[71%] object-cover"
                    />
                  </div>
                  <Heading size="s" as="h6" className="text-center !text-black-900_02">
                    Mobiles
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-3.5">
                    <Img
                      src="images/img_cat6_png.png"
                      alt="cat6png_one"
                      className="mb-[13px] mt-[15px] h-[53px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !text-black-900_02">
                    Office
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-[22px] sm:p-5">
                    <Img
                      src="images/img_cat7_png.png"
                      alt="cat7png_one"
                      className="mb-[3px] mt-1.5 h-[55px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !text-black-900_02">
                    Cameras
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-3.5 md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-[17px]">
                    <Img
                      src="images/img_cat8_png.png"
                      alt="cat8png_one"
                      className="mb-3.5 mt-4 h-[44px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !text-black-900_02">
                    Computers
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-4">
                    <Img
                      src="images/img_cat9_png.png"
                      alt="cat9png_one"
                      className="mb-3 mt-[15px] h-[50px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !text-black-900_02">
                    Televisions
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-[13px] md:p-5">
                  <div className="self-stretch rounded-[55px] bg-gray-300_33 p-[19px]">
                    <Img
                      src="images/img_cat10_png.png"
                      alt="cat10png_one"
                      className="mb-[9px] mt-[11px] h-[51px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !text-black-900_02">
                    Audios
                  </Heading>
                </div>
              </div>
           
    )
}