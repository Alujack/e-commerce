// "use client"
// import { Button, Input, Text, Heading, Img } from "./";


// export default function Profileinformation() {
//   return (
//     <div className="flex flex-col md:self-stretch mb-[54px] gap-2.5 p-[9px] md:p-5 bg-gray-100_02 flex-1 rounded-[10px]">
//       <div className="flex flex-col w-[24%] md:w-full item-start ">
//         <div className="bg-gradient2 rounded-[77px]">
//           <Img src="images/img_ellipse_2.png" alt="circleimage" className="h-[150px] w-[150px] rounded-[50%]" />
//         </div>
//         <div className="flex flex-col items-end mt-[-2px] mb-[78px] relative">
//           <div className="flex mr-[15px] p-2.5 md:mr-0">
//             <Heading as="h1" className="mt-1.5 mb-[5px] text-center">
//               Upload Photo
//             </Heading>
//           </div>
//           <div className="flex self-center p-[5px]">
//             <Text as="p" className="mt-1.5 mb-[5px] !text-blue-500_01 text-center">
//               Photos Requirements
//             </Text>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-end w-[67%] md:w-full gap-5">
//         <div className="self-stretch">
//           <div className="py-[5px]">
//             <div className="flex sm:flex-col self-start">
//               <div className="flex flex-col items-start w-full sm:w-full gap-3">
//                 <Text as="p" className="!text-black-900_02">
//                   <span className="text-black-900_02">First Name&nbsp;</span>
//                   <span className="text-red-600">*</span>
//                 </Text>
//                 <Input
//                   color="white_A700_01"
//                   size="md"
//                   shape="round"
//                   type="email"
//                   name="firstName"
//                   placeholder={`vibolsen@gmail.com`}
//                   className="self-stretch sm:pr-5 text-gray-900_10 border-blue_gray-100 border border-solid !rounded-md"
//                 />
//               </div>
//               <div className="flex flex-col items-start w-full sm:w-full gap-3">
//                 <Text as="p" className="!text-black-900_02">
//                   <span className="text-black-900_02">Last Name&nbsp;</span>
//                   <span className="text-red_A700">*</span>
//                 </Text>
//                 <Input
//                   color="white_A700_01"
//                   size="md"
//                   shape="round"
//                   name="lastName"
//                   placeholder={`+855 967842367`}
//                   className="self-stretch sm:pr-5 text-gray-900_10 border-blue_gray-100 border border-solid !rounded-md"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-start gap-3">
//             <Text as="p" className="!text-black-900_02">
//               <span className="text-black-900_02">Email address&nbsp;</span>
//               <span className="text-red-600">*</span>
//             </Text>
//             <Input
//               color="white_A700_01"
//               size="md"
//               shape="round"
//               name="email"
//               placeholder={`Vibol`}
//               className="self-stretch sm:pr-5 text-gray-900_10 border-blue_gray-100 border border-solid !rounded-md"
//             />
//           </div>
//           <div className="flex flex-col items-start mt-2.5 gap-3">
//             <Text as="p" className="!text-black-900_02">
//               <span className="text-black-900_02">Phones&nbsp;</span>
//               <span className="text-red-600">*</span>
//             </Text>
//             <Input
//               color="white_A700_01"
//               size="md"
//               shape="round"
//               name="phone"
//               placeholder={`SEN`}
//               className="self-stretch sm:pr-5 text-gray-900_10 border-blue_gray-100 border border-solid !rounded-md"
//             />
//           </div>
//         </div>
//         <Button
//           color="green_700_01"
//           size="9xl"
//           className="sm:px-5 text-white-A700 uppercase font-medium min-w-[126px] rounded-[10px]"
//         >
//           save
//         </Button>
//       </div>
//     </div>
//   );
// }
"use client"
import React from "react";
import { Button, Input, Text, Heading, Img } from "@/components";

export default function Profileinformation() {
  return (
   
      <div className="flex md:flex-col justify-between w-full gap-5 p-[84px] md:p-5 bg-gray-100_08 rounded-[10px]">
        <div className="flex flex-col w-[24%] md:w-full ml-14 md:ml-0">
          <div className="bg-gradient2 rounded-[77px]">
           <Img src="images/img_ellipse_2.png" alt="circleimage" className="h-[150px] w-[150px] rounded-[50%]" />
            </div>
          <div className="flex flex-col items-end mt-[-2px] mb-[78px] relative">
            <div className="flex mr-[15px] p-2.5 md:mr-0">
              <Heading size="md" as="h1" className="mt-1.5 mb-1 text-center">
                Upload Photo
              </Heading>
            </div>
            <div className="flex self-center p-[5px]">
              <Text as="p" className="mt-1.5 mb-1 !text-blue-500_01 text-center">
                Photos Requirements
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end w-[67%] md:w-full mr-[35px] gap-5 md:mr-0">
          <div className="self-stretch">
            <div className="py-[5px]">
              <div className="flex sm:flex-col self-start">
                <div className="flex flex-col items-start w-full sm:w-full gap-3.5">
                  <Text as="p">
                    <span className="text-black-900_01">First Name&nbsp;</span>
                    <span className="text-red-600">*</span>
                  </Text>
                  <Input
                    name="Input"
                    placeholder={`vibolsen@gmail.com`}
                    className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                  />
                </div>
                <div className="flex flex-col items-start justify-center w-full sm:w-full gap-3.5">
                  <Text as="p">
                    <span className="text-black-900_01">Last Name&nbsp;</span>
                    <span className="text-red_A700">*</span>
                  </Text>
                  <Input
                    name="Input"
                    placeholder={`+855 967842367`}
                    className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <Text as="p">
                <span className="text-black-900_01">Email address&nbsp;</span>
                <span className="text-red-600">*</span>
              </Text>
              <Input
                name="Input"
                placeholder={`Vibol`}
                className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start mt-2.5 gap-3.5">
              <Text as="p">
                <span className="text-black-900_01">Phones&nbsp;</span>
                <span className="text-red-600">*</span>
              </Text>
              <Input
                name="Input"
                placeholder={`SEN`}
                className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
              />
            </div>
          </div>
          <Button className="h-[50px] px-[35px] sm:px-5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[126px] rounded-[10px]">
            save
          </Button>
        </div>
      </div>
    
  );
}
