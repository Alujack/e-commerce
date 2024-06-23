

import { Img, Heading, Button,Text } from "@/components";
import Inboxsidebar from "@/components/inboxsidebar";
export default function ChatRoom() {
 

  return (
    <>
        <div className="relative z-[1] mt-[-4px] flex flex-col items-start p-[17px]">
              <Heading size="2xl" as="h1" className="ml-[11px] mt-4 tracking-[-0.11px] md:ml-0">
                Inbox
              </Heading>
              <div className="ml-2.5 mt-[23px] flex items-center gap-[21px] self-stretch md:ml-0 md:flex-col">
               <Inboxsidebar className="flex w-[26%] flex-col items-start rounded-[14px] border border-solid border-blue_gray-800  p-[23px] md:w-full sm:p-5" />
                <div className="flex flex-1 flex-col items-center rounded-[14px] border border-solid border-gray-400_01 bg-white-A700 py-[13px] md:self-stretch">
            <div className="flex flex-col items-center self-stretch">
              <div className="flex w-[93%] items-center justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex items-start gap-4 self-end">
                  <Button size="xs" shape="square" className="w-[24px]">
                    <Img src="/images/img_ic_keyboard_arrow_left_24px.svg" width={24} height={24} />
                  </Button>
                  <Heading size="2xl" as="h5" className="!font-bold">
                    Minerva Barnett
                  </Heading>
                  <Heading
                    size="xs"
                    as="p"
                    className="flex h-[22px] items-center justify-center rounded-[3px] bg-purple-A200_33 px-[9px] py-0.5 !text-purple-A200"
                  >
                    Friends
                  </Heading>
                </div>
                <Img
                  src="/images/img_other_action.svg"
                  width={131}
                  height={40}
                  alt="Other Action"
                  className="h-[40px] w-[17%] sm:w-full"
                />
              </div>
              <div className="mt-[13px] h-px w-full self-stretch bg-gray-300_7f" />
              <div className="ml-[29px] mt-10 flex w-[81%] items-center gap-[17px] self-start md:ml-0 md:w-full md:flex-col">
                <Img
                  src="/images/img_mobile.svg"
                  width={40}
                  height={40}
                  alt="mobile"
                  className="h-[40px] w-[40px] self-end md:w-full"
                />
                <div className="flex-1 rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-gray-100_04 p-3 md:self-stretch">
                  <div className="mt-1.5 flex flex-col items-end gap-[13px]">
                    <Text
                      size="md"
                      as="p"
                      className="!font-nunitosans leading-[26px] tracking-[0.10px] !text-gray-900_f2"
                    >
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters.
                    </Text>
                    <div className="flex items-center gap-4">
                      <Text size="xs" as="p" className="self-end text-right !font-nunitosans !text-gray-600">
                        6.30 pm
                      </Text>
                      <Img src="/images/img_more.svg" width={3} height={15} alt="More" className="h-[15px] self-start" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-7 mt-10 flex w-[73%] flex-col items-end gap-[15px] self-end rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-blue-A200_02 p-3.5 md:mr-0 md:w-full">
              <Text
                size="md"
                as="p"
                className="mr-[9px] mt-1.5 !font-nunitosans leading-6 tracking-[0.10px] !text-white-A700 md:mr-0"
              >
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour,
              </Text>
              <div className="mr-[5px] flex items-center gap-[15px] md:mr-0">
                <Text size="xs" as="p" className="text-right !font-nunitosans !text-white-A700">
                  6.34 pm
                </Text>
                <Img src="/images/img_more_white_a700.svg" width={3} height={15} alt="More" className="h-[15px] self-start" />
              </div>
            </div>
            <div className="ml-[29px] mt-10 flex w-[81%] items-center gap-[17px] self-start md:ml-0 md:w-full md:flex-col md:p-5">
              <Img
                src="/images/img_mobile.svg"
                width={40}
                height={40}
                alt="mobile"
                className="h-[40px] w-[40px] self-end md:w-full"
              />
              <div className="flex-1 rounded-tl-[16px] rounded-tr-[16px] bg-gray-100_04 p-4 md:self-stretch">
                <div className="flex flex-col items-end">
                  <Text
                    size="md"
                    as="p"
                    className="!font-nunitosans leading-[26px] tracking-[0.10px] !text-gray-900_f2"
                  >
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                    opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to
                    popular belief, Lorem Ipsum is not simply random text is the model text for your company.
                  </Text>
                  <div className="flex items-center gap-[9px]">
                    <Text size="xs" as="p" className="text-right !font-nunitosans !text-gray-600">
                      6.38 pm
                    </Text>
                    <Img src="/images/img_more.svg" width={3} height={15} alt="More" className="h-[15px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[7px] mt-[132px] flex flex-col items-center gap-[15px] self-stretch">
              <div className="h-px w-full self-stretch bg-gray-300" />
              <div className="flex w-[94%] flex-col items-start md:w-full">
                <Text
                  as="p"
                  className="relative z-[2] ml-[42px] text-right !font-khmerossystem tracking-[0.20px] !text-black-900 md:ml-0"
                >
                  ធុញហាស៎ កុំសួរច្រើនពេកបើថាទិញៗទៅ សួរនោះសួរ
                </Text>
                <div className="relative mt-[-24px] flex items-start justify-between gap-5 self-stretch">
                  <Img src="/images/microphone.png" width={21} height={21} alt="user" className="h-[21px]" />
                  <div className="flex w-[24%] items-start justify-between gap-5">
                    <Img src="/images/upload.png" width={21} height={21} alt="user" className="h-[21px]" />
                    <Img src="/images/imageupload.png" width={21} height={21} alt="user" className="h-[21px]" />
                    <div className="flex w-[51%] flex-col items-center">
                      <Button
                        size="lg"
                        shape="round"
                        rightIcon={
                          <Img
                            src="/images/img_save.svg"
                            width={15}
                            height={15}
                            alt="save"
                            className="h-[15px] w-[15px]"
                          />
                        }
                        className="relative z-[1] w-full gap-2 !rounded-md font-nunitosans font-semibold sm:px-5"
                      >
                        Send
                      </Button>
                      <div className="relative mt-[-3px] h-[5px] w-[45px] rounded-sm bg-deep_orange-400_7a blur-[16.00px] backdrop-opacity-[0.5]" />
                    </div>
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
