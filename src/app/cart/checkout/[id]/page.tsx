"use client"

import { Text, Heading, Button, Img, CheckBox } from "@/components";
import  product,{cart}  from "@/components/constant";
import {useRouter} from "next/navigation";
export default function Checkout({params: {id},}:{params:{id:string}}) {
   let product_one = product.find(n => n.id === Number(id));
   const router = useRouter();
  return (
    <>
      <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col w-full gap-[11px] mx-auto md:p-5 max-w-[99%]">
          
            <div className="flex items-end p-7 sm:p-5 bg-white-A700 flex-wrap rounded-[10px]">
              <Heading as="h1" className="mt-[3px] mb-0.5 !text-gray-500">
                Home
              </Heading>
              <Heading as="h2" className="mb-0.5 ml-[7px] !text-gray-600_01">
                /
              </Heading>
              <Heading as="h3" className="ml-[7px] !text-gray-500">
                pages
              </Heading>
              <Heading as="h4" className="mb-0.5 ml-[7px] !text-gray-600_01">
                /
              </Heading>
              <Heading as="h5" className="ml-[7px] !text-gray-500">
                checkout
              </Heading>
              <Heading as="h6" className="mb-0.5 ml-[7px] !text-gray-600_01">
                /
              </Heading>
              <Heading as="p" className="ml-2.5">
                Conform Payment
              </Heading>
            </div>
            <div className="flex justify-center items-center h-[1015px] md:h-auto px-14 py-[138px] md:p-5 bg-[url(/images/img_frame.png)] bg-cover bg-no-repeat">
              <div className="flex flex-col items-start w-[47%] md:w-full mb-0.5 gap-2">
                <Heading size="xl" as="h6" className="!font-bold">
                  Your Order
                </Heading>
                <div className="flex flex-col self-stretch gap-2">
                  <div className="p-[23px] sm:p-5 bg-blue_gray-50_01 rounded-[10px]">
                    <div className="flex justify-between pb-2.5 gap-5 border-gray-300_04 border-b border-solid flex-wrap">
                      <Text size="s" as="p" className="uppercase !font-medium">
                        Product
                      </Text>
                      <Text size="s" as="p" className="uppercase !font-medium">
                        sub total
                      </Text>
                    </div>
                    <div className="flex flex-col mt-2 gap-[23px] py-[9px] border-gray-300_04 border-b border-solid">
                      <div className="flex items-center w-[59%] md:w-full gap-[15px]">
                        <Img src={product_one?.src} alt="prod37png_one" className="w-[60px] object-cover" />
                        <div className="flex flex-col items-start gap-[3px] flex-1">
                          <Text as="p" className="!text-black-900_02 !font-medium leading-[19px]">
                            <>
                              {product_one?.title} <br/>
                              {product_one?.subtitle}
                            </>
                          </Text>
                          <Text as="p">x 3</Text>
                        </div>
                      </div>
                      <div className="flex justify-between gap-5 flex-wrap">
                        <Text as="p" className="self-end !text-black-900_02">
                          Worldwide Standard Shipping Free
                        </Text>
                        <Text as="p" className="self-start !text-red-600">
                          + $9.50
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5 my-[18px] flex-wrap">
                      <Heading size="xl" as="h6" className="self-start !font-bold">
                        Order Total
                      </Heading>
                      <Heading size="xl" as="h6" className="!text-green-700 !font-bold">
                        $1,746.50
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[79px] p-6 md:gap-[59px] sm:gap-[39px] sm:p-5 bg-gray-300_05 rounded-[10px]">
                    <div className="flex flex-col mt-6">
                      <div className="flex flex-col items-start gap-[7px]">
                        <div className="flex items-center gap-[11px]">
                          <Img src="/images/img_image_fill.svg" alt="imagefill_one" className="h-[20px] w-[20px]" />
                          <Heading as="p" className="self-start">
                            Direct Bank Transfer
                          </Heading>
                        </div>
                        <Text size="md" as="p" className="self-end w-[90%] md:w-full leading-[22px]">
                          <>
                            Make your payment directly into our bank account. Please use your
                            <br />
                            Order ID as the payment reference. Your order will not be shipped
                            <br />
                            until the funds have cleared in our account.
                          </>
                        </Text>
                      </div>
                      <CheckBox
                        name="cashondelivery"
                        label="Cash on Delivery"
                        id="cashondelivery"
                        className="mt-[9px] pt-1 gap-[11px] text-black-900_02 text-left text-sm font-bold"
                      />
                      <div className="flex justify-between items-start mt-[15px] gap-5">
                        <CheckBox
                          name="bank"
                          label="Bank"
                          id="bank"
                          className="mt-[3px] gap-[11px] py-px text-black-900_02 text-left text-sm font-bold"
                        />
                        <div className="flex gap-2">
                          <Img src="/images/img_chip.png" alt="visa_one" className="object-cover" />
                          <Img src="/images/img_chip.png" alt="mastercard_one" className="object-cover" />
                          <Img src="/images/img_chip.png" alt="nagad_one" className="object-cover" />
                        </div>
                      </div>
                      <div className="flex justify-between items-start mt-[25px] gap-5">
                        <div className="flex justify-center items-center w-[40%] mb-0.5">
                          <div className="self-start h-[20px] w-[20px] border-black-900_3f border border-solid bg-white-A700 rounded-[5px]" />
                          <Heading as="p" className="self-end ml-[11px]">
                            Paypal{" "}
                          </Heading>
                          <Text as="p" className="self-end ml-1.5 !text-blue-A400 underline">
                            What’s Paypal?
                          </Text>
                        </div>
                        <Img
                          src="/images/img_label_paypal_png.png"
                          alt="labelpaypal_one"
                          className="w-[13%] mb-0.5 object-cover"
                        />
                      </div>
                    </div>
                    <Button
                      color="green_700"
                      size="9xl"
                      className="w-full mb-[19px] sm:px-5 uppercase font-medium rounded-[10px]"
                     onClick= {()=>{alert("You have ordered Sucessfully please feel free to wait for delivery");router.back()}}
                    >
                      place order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-3.5">
              <div className="h-[230px] w-[47%] md:w-full md:h-auto relative rounded-[20px]">
                <Img
                  src="/images/img_head_3_png.png"
                  alt="ipad_mini2022"
                  className="h-[230px] w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col items-start w-[26%] gap-2 left-[30.00px] top-[30.00px] m-auto absolute">
                  <Heading size="11xl" as="h3" className="w-[90%] md:w-full leading-9">
                    <>
                      iPad mini
                      <br />
                      2022
                    </>
                  </Heading>
                  <Text size="md" as="p">
                    Mega Power in mini size
                  </Text>
                </div>
              </div>
              <div className="h-[230px] md:w-full md:h-auto flex-1 relative rounded-[20px] md:flex-none">
                <Img
                  src="/images/img_head_4_png.png"
                  alt="head4png_one"
                  className="h-[230px] w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col items-start w-[23%] pb-1 gap-[7px] left-[30.00px] top-[30.00px] m-auto absolute">
                  <Text size="4xl" as="p" className="!text-white-A700 leading-6">
                    <>
                      Air
                      <br />
                      Purifier
                    </>
                  </Text>
                  <Text size="xs" as="p" className="!text-gray-500 uppercase">
                    from
                  </Text>
                  <Text size="4xl" as="p" className="!text-light_green-A200 !font-normal">
                    $169
                  </Text>
                </div>
              </div>
              <div className="h-[230px] md:w-full md:h-auto flex-1 relative rounded-[20px] md:flex-none">
                <Img
                  src="/images/img_head_5_png.png"
                  alt="head5png_one"
                  className="h-[230px] w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col items-start w-[35%] left-[30.00px] top-[30.00px] m-auto absolute">
                  <Text size="xs" as="p" className="!text-white-A700 uppercase">
                    washing machine
                  </Text>
                  <Text size="4xl" as="p" className="w-[68%] md:w-full mt-[9px] !text-white-A700 leading-6">
                    <>
                      Anatico
                      <br />
                      Max 2
                    </>
                  </Text>
                  <Button
                    color="white_A700"
                    size="lg"
                    className="w-full mt-[50px] sm:px-5 text-black-900_02 font-semibold rounded-[17px]"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-1.5">
              <Img
                src="/images/img_banner2_png.png"
                alt="banner2png_one"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
              <Img
                src="/images/img_banner3_png.png"
                alt="banner3png_one"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
}
