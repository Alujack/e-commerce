"use client"
import { Img } from "@/components";
import Signupform from "@/components/registerfrom";

export default function WebSignUpPage() {
  return (
    <>
      <div className="w-full px-14 py-[95px] md:p-5 bg-gray-300_07">
        <div className="flex md:flex-col justify-between items-center w-full mb-[3px] gap-5 p-8 mx-auto md:p-5 bg-white-A700 max-w-[1200px] rounded-[10px]">
          <Img
            src="images/img_group_3653.png"
            alt="image"
            className="w-[37%] md:w-full ml-[17px] md:ml-0 object-cover"
          />
          <Signupform className="flex flex-col w-[58%] md:w-full mb-2 mr-[19px] gap-11 px-[51px] md:mr-0 md:px-5" />
        </div>
      </div>
    </>
  );
}