import {Text ,Heading,Button} from "../."
export default function Discountmiddlebanner(){
    return(
                      <div className="flex flex-col items-center md:self-stretch gap-[2px]  md:p-5  flex-1">
                        <div className="flex justify-center w-[100%] md:w-full p-[5px]">
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
                            className="w-[35%] sm:w-full !text-black-900_02 uppercase !font-medium leading-[19px]"
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
    )
}