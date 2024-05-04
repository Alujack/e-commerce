"use client"
import{Heading,Img,Button,Text}from"@/components/."
export default function Favorite(){
    return <>
    <div className="px-[40px] flex w-[100%] flex-col items-start gap-7 md:w-full">
              <Heading size="5xl" as="h1" className="tracking-[-0.11px]">
                Pricing
              </Heading>
              <div className="flex items-center gap-10 self-stretch md:flex-col">
                <div className="relative h-[848px] w-full rounded-[24px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 py-[7px] md:h-auto">
                  <Img src="/images/img_pattern.svg" alt="20_user" className="h-[831px] w-full rounded-[24px]" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center">
                    <Heading size="3xl" as="h2">
                      Basic
                    </Heading>
                    <Text size="s" as="p" className="mt-[11px] text-center">
                      Monthly Charge
                    </Text>
                    <Heading size="6xl" as="h3" className="mt-2 !text-blue-A200_04">
                      $14.99
                    </Heading>
                    <Heading size="xl" as="h4" className="mt-[83px] text-center">
                      Free Setup
                    </Heading>
                    <Heading size="xl" as="h5" className="mt-[27px] text-center">
                      Bandwidth Limit 10 GB
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[29px] text-center">
                      20 User Connection
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[30px] text-center !text-white-A700_66">
                      Analytics Report
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[27px] text-center !text-white-A700_66">
                      Public API Access
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[30px] text-center !text-white-A700_66">
                      Plugins Intregation
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-7 text-center !text-white-A700_66">
                      Custom Content Management
                    </Heading>
                    <Button
                      color="blue_A200_04"
                      size="9xl"
                      variant="outline"
                      className="mt-20 min-w-[180px] rounded-[30px] font-bold sm:px-5"
                    >
                      Get Started
                    </Button>
                    <Heading size="lg" as="h6" className="mt-6 !font-bold !text-white-A700_e5 underline">
                      Start Your 30 Day Free Trial
                    </Heading>
                  </div>
                </div>
                <div className="h-[2px] w-[300px] bg-gray-900_19" />
                <div className="relative h-[848px] w-full rounded-[24px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 py-[7px] md:h-auto">
                  <Img src="/images/img_pattern.svg" alt="pattern_one" className="h-[831px] w-full rounded-[24px]" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center">
                    <Heading size="3xl" as="h5" className="text-center">
                      Standard
                    </Heading>
                    <Text size="s" as="p" className="mt-[11px] text-center">
                      Monthly Charge
                    </Text>
                    <Heading size="6xl" as="h1" className="mt-2 text-center !text-blue-A200_04">
                      $49.99
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[83px] text-center">
                      Free Setup
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[27px] text-center">
                      Bandwidth Limit 10 GB
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[29px] text-center">
                      20 User Connection
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[30px] text-center">
                      Analytics Report
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[27px] text-center">
                      Public API Access
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[30px] text-center !text-white-A700_66">
                      Plugins Intregation
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-7 text-center !text-white-A700_66">
                      Custom Content Management
                    </Heading>
                    <Button
                      color="blue_A200_04"
                      size="9xl"
                      variant="outline"
                      className="mt-20 min-w-[180px] rounded-[30px] font-bold sm:px-5"
                    >
                      Get Started
                    </Button>
                    <Heading size="lg" as="h6" className="mt-6 !font-bold !text-white-A700_e5 underline">
                      Start Your 30 Day Free Trial
                    </Heading>
                  </div>
                </div>
                <div className="h-[2px] w-[300px] bg-gray-900_19" />
                <div className="relative h-[848px] w-full rounded-[24px] border border-solid border-blue_gray-800_01 bg-blue_gray-900_01 py-[7px] md:h-auto">
                  <Img
                    src="/images/img_pattern_gray_600.png"
                    alt="pattern_one"
                    className="h-[831px] w-full rounded-[24px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center">
                    <Heading size="3xl" as="h5" className="text-center">
                      Premium
                    </Heading>
                    <Text size="s" as="p" className="mt-[11px] text-center">
                      Monthly Charge
                    </Text>
                    <Heading size="6xl" as="h1" className="mt-2 text-center !text-blue-A200_04">
                      $89.99
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[83px] text-center">
                      Free Setup
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[27px] text-center">
                      Bandwidth Limit 10 GB
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[29px] text-center">
                      20 User Connection
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[30px] text-center">
                      Analytics Report
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[27px] text-center">
                      Public API Access
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-[30px] text-center">
                      Plugins Intregation
                    </Heading>
                    <Heading size="xl" as="h6" className="mt-7 text-center">
                      Custom Content Management
                    </Heading>
                    <Button
                      color="blue_A200_08"
                      size="9xl"
                      className="mt-20 min-w-[180px] rounded-[30px] font-bold sm:px-5"
                    >
                      Get Started
                    </Button>
                    <Heading size="lg" as="h6" className="mt-6 !font-bold !text-white-A700_e5 underline">
                      Start Your 30 Day Free Trial
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
    </>
}