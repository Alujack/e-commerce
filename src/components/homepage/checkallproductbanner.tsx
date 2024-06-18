import {Img,Heading,Text} from "../."
export default function CheckallProduct(){
    return(
        <div className="flex flex-col justify-center w-full gap-[30px] p-7 sm:p-5 bg-gray-100_03 rounded-[10px]">
                  <div className="flex justify-between items-center gap-5">
                    <div className="flex">
                      <Heading size="3xl" as="h6" className="uppercase">
                        Audios & Cameras
                      </Heading>
                    </div>
                    <div className="flex self-end py-px">
                      <Text size="md" as="p" className="self-start capitalize text-right">
                        View All{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="rounded-[10px]">
                    <div className="flex items-start h-[190px] md:h-auto p-[30px] sm:p-5 bg-[url(/images/img_prod43_png.png)] bg-cover bg-no-repeat rounded-[10px]">
                      <Heading as="p" className="w-[22%] mt-[3px] mb-[59px] !text-white-A700 leading-[22px]">
                        <>
                          Best
                          <br />
                          Speaker
                          <br />
                          2023
                        </>
                      </Heading>
                    </div>
                  </div>
                  <div className="border-gray-500_54 border-t border-solid">
                    <div className="justify-center mt-[30px] gap-[79px] grid-cols-[repeat(auto-fill,_minmax(120px_,_1fr))] grid">
                      <div className="flex flex-col items-center w-full gap-1.5">
                        <div className="self-stretch rounded-[60px]">
                          <Img
                            src="/images/img_prod46_png.png"
                            alt="speaker_one"
                            className="h-[120px] w-[120px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex">
                          <Heading as="p" className="self-end capitalize text-center">
                            Speaker
                          </Heading>
                        </div>
                        <div className="flex py-px">
                          <Text size="s" as="p" className="self-start text-center">
                            12 Items
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full gap-1.5">
                        <div className="self-stretch rounded-[60px]">
                          <Img
                            src="/images/img_prod47_png.png"
                            alt="dslr_camera_one"
                            className="h-[120px] w-[120px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex">
                          <Heading as="p" className="capitalize text-center">
                            DSLR Camera
                          </Heading>
                        </div>
                        <div className="flex py-px">
                          <Text size="s" as="p" className="self-start text-center">
                            9 Items
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full gap-1.5">
                        <div className="self-stretch rounded-[60px]">
                          <Img
                            src="/images/img_prod48_png.png"
                            alt="12_items_one"
                            className="h-[120px] w-[120px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex">
                          <Heading as="p" className="capitalize text-center">
                            Earbuds
                          </Heading>
                        </div>
                        <div className="flex py-px">
                          <Text size="s" as="p" className="self-start text-center">
                            5 Items
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full gap-1.5">
                        <div className="self-stretch rounded-[60px]">
                          <Img
                            src="/images/img_prod49_png.png"
                            alt="9_items_one"
                            className="h-[120px] w-[120px] rounded-[50%]"
                          />
                        </div>
                        <div className="flex">
                          <Heading as="p" className="self-end capitalize text-center">
                            Microphone
                          </Heading>
                        </div>
                        <div className="flex py-px">
                          <Text size="s" as="p" className="self-start text-center">
                            12 Items
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}