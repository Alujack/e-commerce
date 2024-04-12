import React from "react";
import { Button, Heading, Img } from "./";

interface Props {
  className?: string;
}

export default function Orderitem({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex justify-center w-[6%] md:w-full bg-white-A700 rounded-[10px]">
        <Img
          src="images/img_prod26_png.png"
          alt="image"
          className="h-[54px] w-full md:h-auto object-cover rounded-[10px]"
        />
      </div>
      <div className="flex md:self-stretch bg-gray-200_05 flex-1 rounded-[15px]">
        <div className="flex sm:flex-col justify-center pr-4 gap-5">
          <div className="flex p-[9px]">
            <Heading as="h1" className="text-center">
              SROK Smart Phone 128GB, Oled Retina
            </Heading>
          </div>
          <Button
            color="white_A700"
            size="xl"
            className="text-black-900_02 font-bold border-white-A700 border border-solid min-w-[37px] rounded-[10px]"
          >
            1
          </Button>
          <Button color="green_A700" size="2xl" shape="round" className="text-red-600 font-semibold min-w-[90px]">
            $579.00
          </Button>
          <Button color="red_A700_11" size="xl" className="text-gray-800 inline min-w-[88px] rounded-[17px]">
            12/03/1024
          </Button>
        </div>
      </div>
    </div>
  );
}
