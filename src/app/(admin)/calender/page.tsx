"use client"
import{Heading,Img,Button,Text}from"@/components/."
export default function Favorite(){
    return <>
    <div className="flex flex-col items-start gap-[15px] p-[11px]">
              <Heading size="5xl" as="h1" className="ml-[17px] mt-[17px] tracking-[-0.11px] md:ml-0">
                Calender
              </Heading>
              <div className="ml-[17px] flex gap-5 self-stretch md:ml-0 md:flex-col">
                <div className="flex w-[26%] flex-col items-center rounded-[14px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 md:w-full">
                  <Button
                    color="blue_A200_e5"
                    size="5xl"
                    className="mt-5 min-w-[238px] rounded-lg font-bold tracking-[-0.05px] sm:px-5"
                  >
                    + Add New Event
                  </Button>
                  <Heading size="xl" as="h2" className="ml-5 mt-6 self-start !font-bold md:ml-0">
                    You are going to
                  </Heading>
                  <div className="mt-3.5 h-px self-stretch bg-gray-300_19" />
                  <div className="mt-6 flex flex-col gap-[22px] self-stretch px-5">
                    <div className="flex items-start gap-3">
                      <Img src="images/img_mobile.svg" alt="design" className="h-[38px] w-[38px]" />
                      <div className="mt-1 flex flex-col items-start gap-[5px]">
                        <Heading as="h3" className="!font-bold !text-white-A700_f2">
                          Design Conference
                        </Heading>
                        <Heading size="s" as="h4" className="!text-white-A700_cc">
                          Today 07:19 AM
                        </Heading>
                        <Heading size="s" as="h5" className="!text-white-A700_cc">
                          56 Davion Mission Suite 157
                        </Heading>
                        <Heading size="s" as="h6" className="!text-white-A700_cc">
                          Meaghanberg
                        </Heading>
                        <div className="flex gap-2">
                          <Img src="images/img_man_image.png" alt="image" className="h-[24px] w-[24px] object-cover" />
                          <Img src="images/img_mobile.svg" alt="image_one" className="h-[24px] w-[24px]" />
                          <Img src="images/img_mobile.svg" alt="meaghanberg_two" className="h-[24px] w-[24px]" />
                          <div className="flex h-[24px] flex-col items-end justify-center bg-[url(/public/images/img_more.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                            <Heading size="xs" as="p" className="mb-0.5 mt-[3px] !text-blue-A200_04">
                              15+
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-px w-[279px] bg-gray-300_19" />
                    <div className="flex items-start gap-3">
                      <Img src="images/img_image.png" alt="image_one" className="h-[38px] w-[38px] object-cover" />
                      <div className="mt-[3px] flex flex-col items-start">
                        <Heading as="p" className="!font-bold !text-white-A700_f2">
                          Weekend Festival
                        </Heading>
                        <Heading size="s" as="p" className="mt-1 !text-white-A700_cc">
                          16 Octuber 2019 at 5.00 PM
                        </Heading>
                        <Heading size="s" as="p" className="mt-1.5 !text-white-A700_cc">
                          853 Moore Flats Suite 158
                        </Heading>
                        <Heading size="s" as="p" className="mt-1.5 !text-white-A700_cc">
                          Sweden
                        </Heading>
                        <div className="mt-2 flex gap-2">
                          <Img
                            src="images/img_man_image_24x24.png"
                            alt="manimage_one"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <Img
                            src="images/img_man_image_1.png"
                            alt="manimage_three"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <Img
                            src="images/img_man_image_2.png"
                            alt="manimage_five"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <div className="flex h-[24px] flex-col items-end justify-center bg-[url(/public/images/img_more.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                            <Heading size="xs" as="p" className="mb-0.5 mt-[3px] !text-blue-A200_04">
                              20+
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-px w-[279px] bg-gray-300_19" />
                    <div className="flex items-start gap-3">
                      <Img
                        src="images/img_image_38x38.png"
                        alt="image_one"
                        className="h-[38px] w-[38px] object-cover"
                      />
                      <div className="mt-1 flex flex-col items-start">
                        <Heading as="p" className="!font-bold !text-white-A700_f2">
                          Glastonbury Festival
                        </Heading>
                        <Heading size="s" as="p" className="mt-[3px] !text-white-A700_cc">
                          20-22 Octuber 2019 at 8.00 PM
                        </Heading>
                        <Heading size="s" as="p" className="mt-[7px] !text-white-A700_cc">
                          646 Walter Road Apt. 571
                        </Heading>
                        <Heading size="s" as="p" className="mt-1 !text-white-A700_cc">
                          Turks and Caicos Islands
                        </Heading>
                        <div className="mt-2 flex gap-2">
                          <Img
                            src="images/img_man_image_3.png"
                            alt="manimage_one"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <Img
                            src="images/img_man_image_4.png"
                            alt="manimage_three"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <Img
                            src="images/img_man_image_5.png"
                            alt="manimage_five"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <div className="flex h-[24px] flex-col items-end justify-center bg-[url(/public/images/img_more.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                            <Heading size="xs" as="p" className="mb-0.5 mt-[3px] !text-blue-A200_04">
                              14+
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-px w-[279px] bg-gray-300_19" />
                    <div className="flex items-start gap-3">
                      <Img src="images/img_image_1.png" alt="image_one" className="h-[38px] w-[38px] object-cover" />
                      <div className="mt-1 flex flex-col items-start">
                        <Heading as="p" className="!font-bold !text-white-A700_f2">
                          Ultra Europe 2019
                        </Heading>
                        <Heading size="s" as="p" className="mt-[3px] !text-white-A700_cc">
                          25 Octuber 2019 at 10.00 PM
                        </Heading>
                        <Heading size="s" as="p" className="mt-[7px] !text-white-A700_cc">
                          506 Satterfield Tunnel Apt. 963
                        </Heading>
                        <Heading size="s" as="p" className="mt-1 !text-white-A700_cc">
                          San Marino
                        </Heading>
                        <div className="mt-2 flex gap-2">
                          <Img
                            src="images/img_man_image_6.png"
                            alt="manimage_one"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <Img
                            src="images/img_man_image_7.png"
                            alt="manimage_three"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <Img
                            src="images/img_man_image_8.png"
                            alt="manimage_five"
                            className="h-[24px] w-[24px] object-cover"
                          />
                          <div className="flex h-[24px] flex-col items-end justify-center bg-[url(/public/images/img_more.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                            <Heading size="xs" as="p" className="mb-0.5 mt-[3px] !text-blue-A200_04">
                              42+
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="blue_gray_800_02"
                    size="2xl"
                    className="mb-[23px] ml-[68px] mt-[38px] min-w-[126px] self-start rounded-[12px] font-bold md:ml-0 sm:px-5"
                  >
                    See More
                  </Button>
                </div>
                <div className="flex flex-1 flex-col gap-12 rounded-[14px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 p-4 md:self-stretch">
                  <div className="mt-[13px] flex items-center justify-between gap-5 sm:flex-col">
                    <Heading as="p" className="mb-2 self-end !text-white-A700_cc">
                      Today
                    </Heading>
                    <div className="flex w-[63%] items-center justify-between gap-5 sm:w-full sm:flex-col">
                      <div className="flex flex-wrap items-center gap-3.5">
                        <Img src="images/img_arrow_left_gray_400_01.svg" alt="arrowleft_one" className="h-[14px]" />
                        <Heading size="4xl" as="h4">
                          October 2019
                        </Heading>
                        <Img src="images/img_arrow_right_gray_400_01.svg" alt="arrowright_one" className="h-[14px]" />
                      </div>
                      <div className="flex items-center gap-4 rounded-[12px] border border-solid border-blue_gray-100_1d bg-blue_gray-800_03 pl-4">
                        <div className="flex items-center gap-4">
                          <Heading size="s" as="p">
                            Day
                          </Heading>
                          <div className="h-full w-px bg-gray-500_33" />
                        </div>
                        <Heading size="s" as="p">
                          Week
                        </Heading>
                        <Button
                          color="blue_A200_05"
                          size="2xl"
                          className="min-w-[68px] rounded-br-[12px] rounded-tr-[12px] font-semibold"
                        >
                          Month
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative z-[1] flex flex-wrap justify-between gap-5 rounded-tl-[12px] rounded-tr-[12px] border border-solid border-blue_gray-800_01 bg-blue_gray-800_06 p-3">
                      <Heading as="p" className="ml-[23px] self-end !font-bold md:ml-0">
                        MON
                      </Heading>
                      <Heading as="p" className="self-end !font-bold">
                        TUE
                      </Heading>
                      <Heading as="p" className="self-end !font-bold">
                        WED
                      </Heading>
                      <Heading as="p" className="self-end !font-bold">
                        THE
                      </Heading>
                      <Heading as="p" className="self-end !font-bold">
                        FRI
                      </Heading>
                      <Heading as="p" className="self-end !font-bold">
                        SAT
                      </Heading>
                      <Heading as="p" className="mr-[25px] self-end !font-bold md:mr-0">
                        SUN
                      </Heading>
                    </div>
                    <div className="relative mt-[-11px] border border-solid border-gray-800_38 pt-[11px]">
                      <div className="flex flex-col items-end">
                        <div className="mr-3 flex items-start justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                          <div className="flex w-[87%] items-center justify-center md:w-full md:flex-col">
                            <div className="flex h-[121px] w-full flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[11px] md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[76px] !text-white-A700_7f">
                                25
                              </Heading>
                            </div>
                            <div className="flex h-[122px] w-full flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[11px] md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[77px] !text-white-A700_7f">
                                26
                              </Heading>
                            </div>
                            <div className="flex h-[122px] w-full flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[11px] md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[77px] !text-white-A700_7f">
                                27
                              </Heading>
                            </div>
                            <div className="flex h-[123px] w-full flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[11px] md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[78px] !text-white-A700_7f">
                                28
                              </Heading>
                            </div>
                            <div className="flex h-[123px] w-full flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[11px] md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[78px] !text-white-A700_7f">
                                29
                              </Heading>
                            </div>
                            <div className="relative ml-[-2px] flex h-[123px] w-full flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[11px] md:ml-0 md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[78px] !text-white-A700_7f">
                                30
                              </Heading>
                            </div>
                          </div>
                          <Heading size="lg" as="h6" className="mt-[11px]">
                            1
                          </Heading>
                        </div>
                        <div className="mr-3 mt-[13px] flex w-[88%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                          <Heading size="lg" as="h6" className="text-right">
                            2
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            3
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            4
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            5
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            6
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            7
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            8
                          </Heading>
                        </div>
                        <div className="ml-28 mt-[47px] flex self-start bg-deep_purple-A200_33 md:ml-0">
                          <div className="flex h-[36px] items-center bg-[url(/public/images/img_group_135.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                            <Heading size="xs" as="p" className="self-end text-right !text-deep_purple-A200">
                              Design Conference
                            </Heading>
                          </div>
                        </div>
                        <div className="mr-3 mt-3.5 flex w-[89%] flex-col gap-[97px] md:mr-0 md:w-full">
                          <div className="flex flex-1 flex-wrap justify-between gap-5">
                            <Heading size="lg" as="h6" className="text-right">
                              9
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              10
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              11
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              12
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              13
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              14
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              15
                            </Heading>
                          </div>
                          <div className="flex flex-1 flex-wrap justify-between gap-5">
                            <Heading size="lg" as="h6" className="text-right">
                              16
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              17
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              18
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              19
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              20
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              21
                            </Heading>
                            <Heading size="lg" as="h6" className="text-right">
                              22
                            </Heading>
                          </div>
                        </div>
                        <div className="mt-[47px] flex justify-between gap-5 self-stretch sm:flex-col">
                          <div className="flex bg-pink-300_33">
                            <div className="flex h-[36px] items-center bg-[url(/public/images/img_group_135.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                              <Heading size="xs" as="p" className="self-start text-right !text-pink-300">
                                Weekend Festival
                              </Heading>
                            </div>
                          </div>
                          <div className="flex w-[43%] justify-center bg-deep_orange-300_33 sm:w-full">
                            <div className="flex h-[36px] w-full items-center justify-center bg-[url(/public/images/img_group_135.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                              <Heading size="xs" as="p" className="text-right !text-deep_orange-300_01">
                                Glastonbury Festival
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="mr-3 mt-3.5 flex w-[90%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                          <Heading size="lg" as="h6" className="text-right">
                            23
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            24
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            25
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            26
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            27
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            28
                          </Heading>
                          <Heading size="lg" as="h6" className="text-right">
                            29
                          </Heading>
                        </div>
                        <div className="ml-56 mt-[47px] flex self-start bg-indigo-A200_33 md:ml-0">
                          <div className="flex h-[36px] items-center bg-[url(/public/images/img_group_135.svg)] bg-cover bg-no-repeat p-[7px] md:h-auto">
                            <Heading size="xs" as="p" className="mb-0.5 mt-[3px] text-right !text-indigo-A200_01">
                              Glastonbury Festival
                            </Heading>
                          </div>
                        </div>
                        <div className="flex w-[90%] items-start justify-between gap-5 md:w-full md:flex-col">
                          <Heading size="lg" as="h6" className="mt-[13px] text-right">
                            30
                          </Heading>
                          <div className="flex w-[84%] items-center justify-center md:w-full">
                            <Heading size="lg" as="h6" className="mt-[13px] self-start text-right">
                              31
                            </Heading>
                            <div className="ml-3 flex h-[116px] flex-1 flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-3 md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[68px] text-right !text-white-A700_7f">
                                1
                              </Heading>
                            </div>
                            <div className="flex h-[116px] flex-1 flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-3 md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[68px] text-right !text-white-A700_7f">
                                2
                              </Heading>
                            </div>
                            <div className="flex h-[116px] flex-1 flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-3 md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[68px] text-right !text-white-A700_7f">
                                3
                              </Heading>
                            </div>
                            <div className="flex h-[116px] flex-1 flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-[13px] md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[67px] text-right !text-white-A700_7f">
                                4
                              </Heading>
                            </div>
                            <div className="flex h-[116px] flex-1 flex-col items-end bg-[url(/public/images/img_group_99.svg)] bg-cover bg-no-repeat p-3 md:h-auto">
                              <Heading size="lg" as="h6" className="mb-[68px] text-right !text-white-A700_7f">
                                5
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
}