"use client"
import { Heading, Img } from "./";

interface Props {
  className?: string;
}

export default function Messagerow({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex w-[23%] items-center justify-between gap-5 md:w-full">
        <div className="h-[16px] w-[16px] self-end rounded-[3px] border-[0.5px] border-solid border-gray-400_07" />
        <Img src="images/img_signal_gray_400_05.svg" alt="jullu_jalal_one" className="h-[16px] w-[16px] self-end" />
        <Heading as="h1" className="!font-bold">
          Jullu Jalal
        </Heading>
      </div>
      <div className="ml-20 flex flex-wrap items-center gap-5 md:ml-0">
        <Heading
          size="xs"
          as="h2"
          className="flex h-[22px] items-center justify-center rounded-[3px] bg-teal-A700_02 px-2 py-0.5"
        >
          Primary
        </Heading>
        <Heading as="h2" className="self-end !text-white-A700_e5">
          Our Bachelor of Commerce program is ACBSP-accredited.
        </Heading>
      </div>
      <Heading as="h2" className="ml-[59px] !text-white-A700_b2_02 md:ml-0">
        8:38 AM
      </Heading>
    </div>
  );
}
