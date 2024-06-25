
import { Heading, Img, SelectBox } from "@/components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DarkOnePage() {
  return (
    <> 
      <div className="flex w-[95%] flex-col items-start gap-[25px] md:w-full p-[20px]">
              <Heading size="8xl" as="h1" className="tracking-[-0.11px]">
                Dashboard
              </Heading>
              <div className="flex gap-[30px] self-stretch md:flex-col">
                <div className="flex w-full flex-col gap-[27px] rounded-[14px] border border-solid border-blue_gray-800_21  p-[15px]">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-4">
                      <Heading size="lg" as="h2" className="!text-white-A700_b2_02">
                        Total User
                      </Heading>
                      <Heading size="6xl" as="h3" className="tracking-[1.00px]">
                        40,689
                      </Heading>
                    </div>
                    <Img src="/images/img_user.svg" alt="total_user_one" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="/images/img_checkmark_teal_a700.svg" alt="image" className="h-[24px] w-[24px]" />
                    <Heading size="lg" as="h4" className="!text-teal-A700_02">
                      <span className="text-teal-A700_02">8.5%</span>
                      <span className="text-gray-900_05">&nbsp;</span>
                      <span className="text-white-A700">Up from yesterday</span>
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[29px] rounded-[14px] border border-solid border-blue_gray-800_21  p-[15px]">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col gap-[15px]">
                      <Heading size="lg" as="h5" className="!text-white-A700_b2_02">
                        Total Order
                      </Heading>
                      <Heading size="6xl" as="h6" className="tracking-[1.00px]">
                        10293
                      </Heading>
                    </div>
                    <Img src="/images/img_close.svg" alt="closeoneoneone" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="/images/img_checkmark_teal_a700.svg" alt="checkmarkone" className="h-[24px] w-[24px]" />
                    <Heading size="lg" as="h6" className="!text-teal-A700_02">
                      <span className="text-teal-A700_02">1.3%</span>
                      <span className="text-gray-900_05">&nbsp;</span>
                      <span className="text-white-A700">Up from past week</span>
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[14px] border border-solid border-blue_gray-800_21  p-3.5">
                  <div className="flex items-start justify-between gap-5 self-stretch">
                    <div className="flex flex-col items-start gap-[15px]">
                      <Heading size="lg" as="h6" className="!text-white-A700_b2_02">
                        Total Sales
                      </Heading>
                      <Heading size="6xl" as="h3" className="tracking-[1.00px]">
                        $89,000
                      </Heading>
                    </div>
                    <Img src="/images/img_floating_icon.svg" alt="floatingicon" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2 self-start">
                    <Img src="/images/img_ic_trending_down_24px.svg" alt="ictrendingone" className="h-[24px] w-[24px]" />
                    <Heading size="lg" as="h6" className="!text-pink-400">
                      <span className="text-pink-400">4.3%</span>
                      <span className="text-gray-900_05">&nbsp;</span>
                      <span className="text-white-A700">Down from yesterday</span>
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[29px] rounded-[14px] border border-solid border-blue_gray-800_21  p-4">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[13px]">
                      <Heading size="lg" as="h6" className="!text-white-A700_b2_02">
                        Total Pending
                      </Heading>
                      <Heading size="6xl" as="h3" className="tracking-[1.00px]">
                        2040
                      </Heading>
                    </div>
                    <Img
                      src="/images/img_close_deep_orange_300_02.svg"
                      alt="closeoneoneone"
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="/images/img_checkmark_teal_a700.svg" alt="checkmarkone" className="h-[24px] w-[24px]" />
                    <Heading size="lg" as="h6" className="!text-teal-A700_02">
                      <span className="text-teal-A700_02">1.8%</span>
                      <span className="text-gray-900_05">&nbsp;</span>
                      <span className="text-white-A700_01">Up from yesterday</span>
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 self-stretch rounded-[14px] border border-solid border-blue_gray-800_21  p-[30px] sm:p-5">
                <div className="flex items-center justify-between gap-5">
                  <Heading size="4xl" as="h4" className="!font-bold">
                    Sales Details
                  </Heading>
                  <SelectBox
                    color="blue_gray_800_11"
                    size="sm"
                    shape="round"
                    indicator={<Img src="/images/img_arrowdown.svg" alt="arrow_down" className="h-[10px] w-[10px]" />}
                    name="october"
                    placeholder={`October`}
                    options={dropDownOptions}
                    className="w-[10%] gap-px self-start border border-solid border-blue_gray-100_1d_02 font-nunitosans font-semibold sm:pr-5"
                  />
                </div>
                <div className="mb-6 flex items-start justify-between gap-5 md:flex-col">
                  <div className="flex flex-col items-start gap-[42px]">
                    <Heading size="xs" as="p" className="!text-white-A700_e4_02">
                      100%
                    </Heading>
                    <Heading size="xs" as="p" className="!text-white-A700_e4_02">
                      80%
                    </Heading>
                    <Heading size="xs" as="p" className="!text-white-A700_e4_02">
                      60%
                    </Heading>
                    <Heading size="xs" as="p" className="!text-white-A700_e4_02">
                      40%
                    </Heading>
                    <Heading size="xs" as="p" className="!text-white-A700_e4_02">
                      20%
                    </Heading>
                  </div>
                  <div className="mt-2 flex flex-1 flex-col gap-[18px] md:self-stretch">
                    <div className="flex flex-col items-start">
                      <div className="ml-[3px] h-px self-stretch bg-gray-300_07 md:ml-0" />
                      <div className="ml-[237px] flex h-[33px] items-center bg-[url(/public/images/img_top_sale.svg)] bg-cover bg-no-repeat p-1.5 md:ml-0 md:h-auto">
                        <Heading size="xs" as="p" className="self-start !font-bold">
                          64,3664.77
                        </Heading>
                      </div>
                      <div className="relative h-[205px] self-stretch">
                        <Img
                          src="/images/img_graph.png"
                          alt="graphoneoneone"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[195px] w-full object-cover"
                        />
                        <Img
                          src="/images/img_point.svg"
                          alt="pointoneoneone"
                          className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[205px] w-[94%]"
                        />
                      </div>
                    </div>
                    <div className="flex w-[96%] flex-wrap justify-between gap-5 md:w-full">
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        5k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        10k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        15k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        20k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        25k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        30k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        35k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        40k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        45k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        50k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        55k
                      </Heading>
                      <Heading size="xs" as="p" className="text-center !text-white-A700_e4_02">
                        60k
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7 self-stretch rounded-[14px] border border-solid border-blue_gray-800_21  p-[18px]">
                <div className="mt-[18px] flex items-start justify-between gap-5">
                  <Heading size="4xl" as="h4" className="!font-bold">
                    Deals Details
                  </Heading>
                  <SelectBox
                    color="blue_gray_800_11"
                    size="sm"
                    shape="round"
                    indicator={<Img src="/images/img_arrowdown.svg" alt="arrow_down" className="h-[9px] w-[10px]" />}
                    name="octoberone"
                    placeholder={`October`}
                    options={dropDownOptions}
                    className="mt-0.5 w-[10%] gap-px border border-solid border-blue_gray-100_1d_02 font-nunitosans font-semibold sm:pr-5"
                  />
                </div>
                <div>
                  <div className="flex justify-between gap-5 rounded-[12px] border border-solid border-blue_gray-100_1a_02  p-3 md:flex-col">
                    <div className="ml-[11px] flex w-[27%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
                      <Heading as="p">Product Name</Heading>
                      <Heading as="p">Location</Heading>
                    </div>
                    <Heading as="p" className="self-end">
                      Date - Time
                    </Heading>
                    <div className="mr-12 flex w-[33%] justify-between gap-5 self-end md:mr-0 md:w-full">
                      <div className="flex w-[49%] flex-wrap justify-between gap-5">
                        <Heading as="p">Piece</Heading>
                        <Heading as="p">Amount</Heading>
                      </div>
                      <Heading as="p">Status</Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-[23px] sm:pt-5">
                    <div className="ml-6 flex w-[3%] rounded-[17px]  md:ml-0 md:w-full">
                      <Img
                        src="/images/img_bitmap_35x36.png"
                        alt="bitmaponeone"
                        className="h-[35px] w-[36px] rounded-[50%]"
                      />
                    </div>
                    <Heading
                      as="p"
                      className="relative z-[5] mr-[37px] mt-[-30px] flex h-[26px] items-center justify-center self-end rounded-[13px] bg-teal-A700_02 px-[15px] py-[3px] md:mr-0"
                    >
                      Delivered
                    </Heading>
                    <Heading as="p" className="relative mt-[-23px] self-center !font-semibold !text-white-A700_cc_06">
                      12.09.2019 - 12.53 PM
                    </Heading>
                    <Heading
                      as="p"
                      className="relative mr-[366px] mt-[-20px] self-end !font-semibold !text-white-A700_cc_06 md:mr-0"
                    >
                      423
                    </Heading>
                    <Heading
                      as="p"
                      className="relative z-[4] mr-[230px] mt-[-19px] self-end !font-semibold !text-white-A700_cc_06 md:mr-0"
                    >
                      $34,295
                    </Heading>
                    <Heading
                      as="p"
                      className="relative ml-[76px] mt-[-18px] !font-semibold !text-white-A700_cc_06 md:ml-0"
                    >
                      Apple Watch
                    </Heading>
                    <Heading
                      as="p"
                      className="relative ml-[236px] mt-[-19px] !font-semibold !text-white-A700_cc_06 md:ml-0"
                    >
                      6096 Marjolaine Landing
                    </Heading>
                    <div className="mt-[25px] h-px w-full self-stretch bg-gray-500_66_02" />
                  </div>
                </div>
              </div>
            </div>
         
    </>
  );
}
