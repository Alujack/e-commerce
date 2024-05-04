"use client"
import{Heading,Img,Button}from"@/components/."
import { Accordion, AccordionItem } from "react-accessible-accordion";
export default function Favorite(){
    return <>
    <div className="px-[30px] w-[100%] md:w-full">
              <div className="flex items-center justify-between gap-5">
                <Heading size="5xl" as="h1" className="self-start tracking-[-0.11px]">
                  To-Do List
                </Heading>
                <Button color="blue_A200_08" size="6xl" className="min-w-[147px] rounded-md font-bold sm:px-5">
                  Add New Task
                </Button>
              </div>
              <div className="mt-[53px] flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-[30px] sm:p-5">
                <div className="flex w-[17%] items-center justify-center gap-6">
                  <div className="h-[30px] w-[30px] rounded-md border border-solid border-blue_gray-800_01 bg-blue_gray-800_04" />
                  <Heading size="lg" as="h2" className="self-end">
                    Meeting with CEO
                  </Heading>
                </div>
                <div className="flex w-[8%] items-center justify-between gap-5">
                  <Img src="/images/img_signal_blue_gray_100_08.svg" alt="signal_one" className="h-[26px] w-[26px]" />
                  <Button
                    color="blue_gray_800_05"
                    size="sm"
                    shape="circle"
                    className="w-[30px] !rounded-[15px] border-[0.5px] border-solid border-gray-300"
                  >
                    <Img src="/images/img_close_blue_gray_100_01.svg" />
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-[30px] sm:p-5">
                <div className="flex w-[21%] items-center justify-center gap-6">
                  <div className="h-[30px] w-[30px] rounded-md border border-solid border-blue_gray-800_01 bg-blue_gray-800_04" />
                  <Heading size="lg" as="h3" className="self-end">
                    Pick up kids from school
                  </Heading>
                </div>
                <div className="flex w-[8%] items-center justify-between gap-5">
                  <Img src="/images/img_signal_orange_a100.svg" alt="signal_three" className="h-[26px] w-[26px]" />
                  <Button
                    color="blue_gray_800_05"
                    size="sm"
                    shape="circle"
                    className="w-[30px] !rounded-[15px] border-[0.5px] border-solid border-gray-300"
                  >
                    <Img src="/images/img_close_blue_gray_100_01.svg" />
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-[30px] sm:p-5">
                <div className="flex w-[20%] items-center justify-center gap-6">
                  <div className="h-[30px] w-[30px] rounded-md border border-solid border-blue_gray-800_01 bg-blue_gray-800_04" />
                  <Heading size="lg" as="h4" className="self-end">
                    Shopping with Brother
                  </Heading>
                </div>
                <div className="flex w-[8%] items-center justify-between gap-5">
                  <Img src="/images/img_signal_blue_gray_100_08.svg" alt="signal_five" className="h-[26px] w-[26px]" />
                  <Button
                    color="blue_gray_800_05"
                    size="sm"
                    shape="circle"
                    className="w-[30px] !rounded-[15px] border-[0.5px] border-solid border-gray-300"
                  >
                    <Img src="/images/img_close_blue_gray_100_01.svg" />
                  </Button>
                </div>
              </div>
              <Accordion preExpanded={[0]} className="mt-6">
                {[...Array(1)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistc${i}`}>
                    <div className="flex flex-1 items-start justify-between gap-5 rounded-[12px] bg-blue-A200_04 p-6 sm:p-5">
                      <div className="ml-2 flex items-center gap-6 md:ml-0">
                        <Img src="/images/img_close_black_900.svg" alt="close_seven" className="h-[30px] w-[30px]" />
                        <Heading size="lg" as="h5" className="mb-0.5 self-end !font-bold">
                          Review with HR
                        </Heading>
                      </div>
                      <div className="mb-1 flex w-[6%] justify-center rounded-[12px] border border-solid border-gray-400_58 bg-blue-300_01 p-[11px]">
                        <Img src="/images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[18px] w-[19px]" />
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6 flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-[30px] sm:p-5">
                <div className="flex w-[19%] items-center justify-center gap-6">
                  <div className="h-[30px] w-[30px] rounded-md border border-solid border-blue_gray-800_01 bg-blue_gray-800_04" />
                  <Heading size="lg" as="h6" className="self-end">
                    Going to Dia’s School
                  </Heading>
                </div>
                <div className="flex w-[8%] items-center justify-between gap-5">
                  <Img
                    src="/images/img_signal_blue_gray_100_08.svg"
                    alt="signal_seven"
                    className="h-[26px] w-[26px] self-start"
                  />
                  <Button
                    color="blue_gray_800_05"
                    size="sm"
                    shape="circle"
                    className="w-[30px] !rounded-[15px] border-[0.5px] border-solid border-gray-300"
                  >
                    <Img src="/images/img_close_blue_gray_100_01.svg" />
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-[30px] sm:p-5">
                <div className="flex w-[17%] items-center justify-center gap-6">
                  <div className="h-[30px] w-[30px] rounded-md border border-solid border-blue_gray-800_01 bg-blue_gray-800_04" />
                  <Heading size="lg" as="h6" className="self-end">
                    Check design files
                  </Heading>
                </div>
                <div className="flex w-[8%] items-center justify-between gap-5">
                  <Img
                    src="/images/img_signal_orange_a100.svg"
                    alt="signal_nine"
                    className="h-[26px] w-[26px] self-start"
                  />
                  <Button
                    color="blue_gray_800_05"
                    size="sm"
                    shape="circle"
                    className="w-[30px] !rounded-[15px] border-[0.5px] border-solid border-gray-300"
                  >
                    <Img src="/images/img_close_blue_gray_100_01.svg" />
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-[30px] sm:p-5">
                <div className="flex w-[13%] items-center justify-center gap-6">
                  <div className="h-[30px] w-[30px] rounded-md border border-solid border-blue_gray-800_01 bg-blue_gray-800_04" />
                  <Heading size="lg" as="h6" className="self-end">
                    Update File
                  </Heading>
                </div>
                <div className="flex w-[8%] items-center justify-between gap-5">
                  <Img src="/images/img_signal_blue_gray_100_08.svg" alt="signal_eleven" className="h-[26px] w-[26px]" />
                  <Button
                    color="blue_gray_800_05"
                    size="sm"
                    shape="circle"
                    className="w-[30px] !rounded-[15px] border-[0.5px] border-solid border-gray-300"
                  >
                    <Img src="/images/img_close_gray_100.svg" />
                  </Button>
                </div>
              </div>
            </div>
    </>
}