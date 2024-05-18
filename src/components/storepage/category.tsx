import {Heading, Img, Text,Input,Button,CheckBox} from "../."
export default function Categories(){
    return (
          <div className="flex w-[23%] flex-col gap-2.5 md:w-full">
                <div className="flex flex-col items-start gap-[21px] rounded-[10px] bg-blue_gray-50_10 p-[29px] sm:p-5">
                  <Heading size="2xl" as="h6" className="uppercase !text-black-900_02">
                    categories
                  </Heading>
                  <div className="flex flex-wrap items-center gap-2.5 rounded-lg bg-white-A700 p-[9px]">
                    <Heading size="xs" as="p" className="h-[12px] self-start !text-black-900_02">
                      
                    </Heading>
                    <Heading size="xs" as="p" className="!font-bold !text-black-900_02">
                      All Categories
                    </Heading>
                  </div>
                  <Heading size="md" as="p" className="!text-black-900_02">
                    Cell Phones & Tablets
                  </Heading>
                  <div className="mb-[5px] flex flex-col items-start gap-[9px] self-center">
                    <div className="flex flex-col items-start gap-2.5">
                      <Text as="p" className="h-[17px]">
                        All
                      </Text>
                      <a href="/product"><Text as="p">Iphone</Text></a>
                      <Text as="p">Samsung</Text>
                      <Text as="p">Xiaomi</Text>
                      <Text as="p">Asus</Text>
                      <Text as="p">Oppo</Text>
                      <Text as="p">Gaming Smartphone</Text>
                      <Text as="p">Ipad</Text>
                      <Text as="p">Window Tablets</Text>
                      <Text as="p">eReader</Text>
                      <Text as="p">Smartphone Chargers</Text>
                    </div>
                    <Text as="p">5G Support Smartphone</Text>
                    <Text as="p">Smartphone Accessories</Text>
                    <Text as="p">Tablets Accessories</Text>
                    <div className="flex flex-wrap items-center gap-[3px]">
                      <Text as="p">Cell Phones </Text>
                      <Heading size="md" as="p" className="h-[14px] !font-black !text-black-900_02">
                        
                      </Heading>
                      <Text as="p">$200</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 rounded-[10px] bg-blue_gray-50_10 py-[29px] sm:py-5">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-wrap items-center">
                      <Heading size="2xl" as="h6" className="uppercase !text-black-900_02">
                        categories
                      </Heading>
                      <Heading size="md" as="p" className="ml-2 h-[14px] !font-black !text-black-900_02">
                        
                      </Heading>
                      <Text as="p" className="ml-3 self-end">
                        Reset All
                      </Text>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-wrap items-center gap-[11px] rounded-md bg-white-A700">
                        <Text size="md" as="p" className="self-start">
                          Min: $45.00{" "}
                        </Text>
                        <Heading size="s" as="p" className="self-start text-center !font-black !text-black-900_02">
                          
                        </Heading>
                      </div>
                      <div className="flex flex-wrap items-center gap-[11px] rounded-md bg-white-A700">
                        <Text size="md" as="p" className="self-start">
                          10.9 inch{" "}
                        </Text>
                        <Heading size="s" as="p" className="self-start text-center !font-black !text-black-900_02">
                          
                        </Heading>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-wrap items-center gap-[11px] rounded-md bg-white-A700">
                        <Text size="md" as="p" className="self-start">
                          Color: Red{" "}
                        </Text>
                        <Heading size="s" as="p" className="self-start text-center !font-black !text-black-900_02">
                          
                        </Heading>
                      </div>
                      <div className="flex flex-wrap items-center gap-[11px] rounded-md bg-white-A700">
                        <Text size="md" as="p" className="self-start">
                          128GB{" "}
                        </Text>
                        <Heading size="s" as="p" className="self-start text-center !font-black !text-black-900_02">
                          
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 self-stretch border-b border-solid border-gray-500_33">
                    <div className="mt-[22px] flex w-[89%] flex-wrap items-center justify-between gap-5 md:w-full">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Brands
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <div className="mb-[34px] flex flex-col items-center">
                      <div className="relative h-[38px] self-stretch md:h-auto">
                        <Heading
                          size="2xl"
                          as="h6"
                          className="mr-[23px] mt-[9px] h-[18px] text-center !font-black !text-black-900_02 md:mr-0"
                        >
                          
                        </Heading>
                        <Input
                          color="white_A700_08"
                          size="xs"
                          shape="round"
                          name="input_one"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full border border-solid border-gray-500_33 sm:px-5"
                        />
                      </div>
                      <div className="mt-7 flex w-[76%] items-center md:w-full">
                        <div className="mb-[3px] h-[14px] w-[14px] self-end rounded-[3px] border border-solid border-black-900_3f_07 bg-white-A700" />
                        <div className="flex w-[51%] items-center justify-center gap-2">
                          <Img
                            src="images/img_brand1_png.png"
                            alt="brand1png_one"
                            className="h-[25px] w-[71%] object-cover"
                          />
                          <Text as="p" className="!text-blue_gray-400_07">
                            (14)
                          </Text>
                        </div>
                      </div>
                      <div className="mt-3 flex w-[76%] items-center md:w-full">
                        <div className="mb-[3px] h-[14px] w-[14px] self-end rounded-[3px] border border-solid border-black-900_3f_07 bg-white-A700" />
                        <div className="flex w-[54%] items-center justify-center gap-2 pl-2.5">
                          <Img
                            src="images/img_brand2_png.png"
                            alt="brand2png_one"
                            className="h-[25px] w-[80%] object-cover"
                          />
                          <Text as="p" className="h-[17px] !text-blue_gray-400_07">
                            (6)
                          </Text>
                        </div>
                      </div>
                      <div className="mt-3 flex w-[76%] items-center md:w-full">
                        <div className="mb-[3px] h-[14px] w-[14px] self-end rounded-[3px] border border-solid border-black-900_3f_07 bg-white-A700" />
                        <div className="flex w-[53%] items-center justify-center gap-2 pl-2.5">
                          <Img
                            src="images/img_brand3_png.png"
                            alt="brand3png_one"
                            className="h-[25px] w-[80%] object-cover"
                          />
                          <Text as="p" className="h-[17px] !text-blue_gray-400_07">
                            (7)
                          </Text>
                        </div>
                      </div>
                      <div className="mt-3 flex w-[76%] items-center md:w-full">
                        <div className="mb-[3px] h-[14px] w-[14px] self-end rounded-[3px] border border-solid border-black-900_3f_07 bg-white-A700" />
                        <div className="flex w-[60%] items-center justify-center gap-2">
                          <Img
                            src="images/img_brand4_png.png"
                            alt="brand4png_one"
                            className="h-[25px] w-[77%] object-cover"
                          />
                          <Text as="p" className="!text-blue_gray-400_07">
                            (18)
                          </Text>
                        </div>
                      </div>
                      <div className="mt-3 flex w-[76%] items-center md:w-full">
                        <div className="mb-[3px] h-[14px] w-[14px] self-end rounded-[3px] border border-solid border-black-900_3f_07 bg-white-A700" />
                        <div className="flex w-[60%] items-center justify-center gap-2">
                          <Img
                            src="images/img_brand5_png.png"
                            alt="brand5png_one"
                            className="h-[25px] w-[85%] object-cover"
                          />
                          <Text as="p" className="h-[17px] !text-blue_gray-400_07">
                            (1)
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] self-stretch border-b border-solid border-gray-500_33">
                    <div className="mt-[23px] flex flex-wrap items-center justify-between gap-5">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Price
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <div className="relative h-[10px]">
                      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[90%] justify-between gap-5">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-green-700 shadow-sm" />
                        <div className="h-[10px] w-[10px] self-start rounded-[5px] bg-green-700 shadow-sm" />
                      </div>
                      <div className="absolute left-0 right-0 top-[3.99px] m-auto w-full rounded-[1px] bg-gray-300_34">
                        <div className="h-[2px] rounded-[1px] bg-green-700" />
                      </div>
                    </div>
                    <div className="mb-[30px] flex">
                      <div className="relative h-[40px] flex-1 md:h-auto">
                        <div className="mr-[9px] h-px w-[10px] bg-black-900_02 md:mr-0" />
                        <Input
                          color="white_A700_08"
                          size="sm"
                          shape="round"
                          name="price"
                          placeholder={`\$`}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full font-semibold sm:px-5"
                        />
                      </div>
                      <Input
                        color="white_A700_08"
                        size="sm"
                        shape="round"
                        name="price"
                        placeholder={`\$`}
                        className="flex-grow font-semibold sm:px-5"
                      />
                      <Button
                        color="green_700_08"
                        size="3xl"
                        shape="round"
                        className="ml-5 min-w-[40px] !rounded-[5px] font-bold capitalize"
                      >
                        go
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col self-stretch border-b border-solid border-gray-500_33">
                    <div className="mt-[23px] flex w-[89%] flex-wrap items-center justify-between gap-5 md:w-full">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Rating
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <div className="mt-5 flex gap-2.5">
                      <CheckBox
                        name="input_sixteen"
                        label=""
                        id="inputsixteen"
                        className="flex-1 gap-[11px] self-start text-left text-[15px] font-black text-amber-A700_07"
                      />
                      <Text size="s" as="p" className="self-start">
                        (52)
                      </Text>
                    </div>
                    <div className="mt-[5px] flex gap-2.5">
                      <CheckBox
                        name="input_seventeen"
                        label=""
                        id="inputseventeen"
                        className="flex-1 gap-[11px] self-start text-left text-[15px] font-black text-amber-A700_07"
                      />
                      <Text size="s" as="p" className="self-start">
                        (24)
                      </Text>
                    </div>
                    <div className="mt-[5px] flex gap-2.5">
                      <CheckBox
                        name="input_eighteen"
                        label=""
                        id="inputeighteen"
                        className="flex-1 gap-[11px] self-start text-left text-[15px] font-black text-amber-A700_07"
                      />
                      <Text size="s" as="p" className="h-[15px] self-start">
                        (5)
                      </Text>
                    </div>
                    <div className="mb-[35px] mt-[5px] flex gap-2.5">
                      <CheckBox
                        name="input_nineteen"
                        label=""
                        id="inputnineteen"
                        className="flex-1 gap-[11px] self-start text-left text-[15px] font-black text-amber-A700_07"
                      />
                      <Text size="s" as="p" className="self-start">
                        (1)
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-stretch border-b border-solid border-gray-500_33 py-[23px] sm:py-5">
                    <div className="flex w-[89%] flex-wrap items-center justify-between gap-5 md:w-full">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Screen Size
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <div className="mt-[18px] flex gap-[5px]">
                      <Button color="white_A700_08" size="sm" shape="round" className="min-w-[81px]">
                        7” & Under
                      </Button>
                      <Button color="white_A700_08" size="sm" shape="round" className="min-w-[72px]">
                        7.1” - 8.9”
                      </Button>
                      <Button color="white_A700_08" size="sm" shape="round" className="min-w-[72px]">
                        9” - 10.9”
                      </Button>
                    </div>
                    <Button color="white_A700_08" size="sm" shape="round" className="mb-2.5 mt-1.5 min-w-[94px]">
                      11” & Greater
                    </Button>
                  </div>
                  <div className="flex flex-col self-stretch border-b border-solid border-gray-500_33 py-[23px] sm:py-5">
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Color
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <div className="mt-[22px] flex w-[76%] gap-3.5 md:w-full">
                      <div className="h-[30px] w-[30px] rounded-md bg-red-900_07" />
                      <div className="h-[30px] w-[30px] rounded-md bg-blue_gray-700_08" />
                      <div className="h-[30px] w-[30px] rounded-md bg-teal-300_07" />
                      <div className="h-[30px] w-[30px] rounded-md bg-gray-900_80" />
                      <div className="h-[30px] w-[30px] rounded-md bg-white-A700" />
                    </div>
                    <div className="my-3.5 flex w-[43%] gap-3.5 md:w-full">
                      <div className="h-[30px] w-[30px] rounded-md bg-green-700" />
                      <div className="h-[30px] w-[30px] rounded-md bg-gray-700_15" />
                      <div className="h-[30px] w-[30px] rounded-md bg-deep_purple-700_17" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] self-stretch border-b border-solid border-gray-500_33 py-[23px] sm:py-5">
                    <div className="flex w-[89%] flex-wrap items-center justify-between gap-5 md:w-full">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Memory
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <div className="mb-[7px] flex">
                      <div className="relative z-[1] flex w-full flex-col gap-2.5 py-2">
                        <CheckBox
                          name="12gbfour"
                          label="12GB (4)"
                          id="gbfour"
                          className="gap-[7px] text-left text-sm text-black-900_02"
                        />
                        <CheckBox
                          name="8gbthree"
                          label="8GB (3)"
                          id="gbthree"
                          className="gap-[7px] text-left text-sm text-black-900_02"
                        />
                        <CheckBox
                          name="6gbtwelve"
                          label="6GB (12)"
                          id="gbtwelve"
                          className="gap-[7px] text-left text-sm text-black-900_02"
                        />
                        <div className="flex flex-col items-start gap-3">
                          <CheckBox
                            name="4gbsix"
                            label="4GB (6)"
                            id="gbsix"
                            className="gap-[7px] text-left text-sm text-black-900_02"
                          />
                          <CheckBox
                            name="3gbseven"
                            label="3GB (7)"
                            id="gbseven"
                            className="gap-[7px] text-left text-sm text-black-900_02"
                          />
                        </div>
                      </div>
                      <div className="relative ml-[-29px] flex w-full flex-col items-start gap-3 p-2">
                        <CheckBox
                          name="15gbone"
                          label="1.5GB (1)"
                          id="gbone1"
                          className="ml-1.5 gap-[7px] text-left text-sm text-black-900_02 md:ml-0"
                        />
                        <CheckBox
                          name="1gbone"
                          label="1GB (1)"
                          id="gbone"
                          className="ml-1.5 gap-[7px] text-left text-sm text-black-900_02 md:ml-0"
                        />
                        <CheckBox
                          name="512mbtwo"
                          label="512MB (2)"
                          id="mbtwo"
                          className="mb-[58px] ml-1.5 gap-[7px] text-left text-sm text-black-900_02 md:ml-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-stretch border-b border-solid border-gray-500_33 py-[23px] sm:py-5">
                    <div className="flex w-[89%] flex-wrap items-center justify-between gap-5 md:w-full">
                      <Heading size="md" as="p" className="!text-black-900_02">
                        By Conditions
                      </Heading>
                      <Heading size="md" as="p" className="h-[14px] self-start !font-black !text-black-900_02">
                        
                      </Heading>
                    </div>
                    <CheckBox
                      name="newTwentyOne"
                      label="New (21)"
                      id="newTwentyOne"
                      className="mt-[23px] gap-[7px] text-left text-sm text-black-900_02"
                    />
                    <CheckBox
                      name="likenewTwo"
                      label="Like New (2)"
                      id="likenewTwo"
                      className="mt-3 gap-[7px] text-left text-sm text-black-900_02"
                    />
                    <CheckBox
                      name="openboxThirtyEi"
                      label="Open Box (38)"
                      id="openboxThirtyEi"
                      className="mb-[15px] mt-3 gap-[7px] p-px text-left text-sm text-black-900_02"
                    />
                  </div>
                </div>
                <div className="relative h-[300px] rounded-[15px] md:h-auto">
                  <Img
                    src="images/img_addimg_png.png"
                    alt="addimgpng_one"
                    className="h-[300px] w-full rounded-[15px] object-cover"
                  />
                  <div className="absolute left-[30.00px] top-[29.00px] m-auto flex w-[69%] flex-col items-start">
                    <Heading size="4xl" as="h4" className="!font-bold leading-7 !text-white-A700">
                      <span className="text-white-A700">OKODo&nbsp;</span>
                      <span className="font-medium text-white-A700">
                        <>
                          hero 11+
                          <br />
                          5K wireless
                        </>
                      </span>
                    </Heading>
                    <Text size="s" as="p" className="mt-8 uppercase !text-gray-500">
                      from
                    </Text>
                    <Text size="4xl" as="p" className="mt-[7px] !text-light_green-A700_07">
                      $169
                    </Text>
                  </div>
                </div>
              </div>
    )
}