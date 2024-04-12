import {Text,Img} from"../." 
export default function Preorder(){
    return (
         <div className="flex md:flex-col justify-evenly items-start gap-16 bg-blue_gray-900_02 rounded-[20px]">
                <div className="flex flex-col items-start mt-[29px] px-[11px] md:p-5 md:mt-0">
                  <Text size="5xl" as="p" className="ml-[3px] md:ml-0 !text-teal-A200 uppercase">
                    Pre Order
                  </Text>
                  <Text size="xs" as="p" className="mt-1 ml-[3px] md:ml-0 !text-gray-500 uppercase">
                    be the first to own
                  </Text>
                  <Text as="p" className="mt-[11px] ml-[3px] md:ml-0 !text-white-A700">
                    From $399
                  </Text>
                </div>
                <div className="flex md:flex-col justify-center items-center w-[60%] md:w-full gap-0.5 md:p-5">
                  <div className="md:self-stretch h-[140px] md:w-full flex-1 relative md:flex-none">
                    <div className="h-[140px] w-[93%] right-[0.21px] bottom-0 top-0 my-auto bg-gradient3 absolute rounded-[70px]" />
                    <Img
                      src="images/img_banner_png.png"
                      alt="bannerpng_one"
                      className="h-[125px] w-[72%] bottom-[0.00px] left-[0.00px] m-auto object-cover absolute"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[44%] md:w-full gap-[13px] px-2">
                    <Text size="s" as="p" className="w-[37%] md:w-full ml-1.5 md:ml-0 !text-teal-A200 leading-[18px]">
                      <>
                        Opplo Watch Sport
                        <br />
                        Series 8
                      </>
                    </Text>
                    <Text size="6xl" as="p" className="ml-1.5 md:ml-0 !text-white-A700">
                      A healthy leap ahead
                    </Text>
                  </div>
                </div>
              </div>
    )
}