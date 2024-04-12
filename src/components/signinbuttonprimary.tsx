"use client"
import { Heading, Img } from "./";

export default function SignInButtonprimary({ buttonname = "        Sign up with Google", ...props }) {
  return (
    <div {...props}>
      <div className="flex self-end w-[61%] md:w-full ml-[117px] gap-[11px] md:ml-0">
        <div className="flex flex-col self-start w-[13%]">
          <div className="flex z-[1]">
            <div className="flex flex-col items-end">
              <Img src="images/img_vector.svg" alt="vector_one" className="h-[6px] z-[1]" />
              <Img src="images/img_vector_deep_orange_500.svg" alt="vector_three" className="h-[8px] mt-[-6px]" />
            </div>
          </div>
          <div className="flex items-start mt-[-2px]">
            <Img src="images/img_vector_yellow_a700.svg" alt="vector_five" className="h-[11px] z-[1]" />
            <div className="h-[14px] mt-[3px] ml-[-4px] flex-1 relative">
              <Img
                src="images/img_vector_blue_600_01.svg"
                alt="vector_seven"
                className="h-[12px] w-[11px] right-[0.09px] top-[0.00px] m-auto absolute"
              />
              <div className="flex flex-col items-end bottom-[0.26px] left-[0.00px] m-auto absolute">
                <Img src="images/img_vector_green_a700_02.svg" alt="vector_nine" className="h-[8px] z-[1]" />
                <Img
                  src="images/img_vector_green_700_01.svg"
                  alt="vector_eleven"
                  className="h-[5px] w-[6px] mt-[-5px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Heading as="h1" className="self-end !text-blue_gray-900_03 tracking-[-0.20px] !font-poppins text-center">
          {buttonname}
        </Heading>
      </div>
    </div>
  );
}
