// "use client"
// import React from "react";
// import { Button, Img, Heading, Text } from ".";

// interface Props {
//   className?: string;
// }

// export default function ProductCard({ ...props }: Props) {
//   return (
//     <div {...props}>
//       <div className="flex flex-col self-stretch gap-2.5">
//         <div className="flex flex-col gap-2">
//           <Img src="images/headphone.png" alt="extra_bass_one" className="h-[186px] object-cover rounded" />
//           <div className="flex flex-col items-start gap-1.5">
//             <div className="flex self-stretch">
//               <div className="flex flex-col items-start">
//                 <Text as="p" className="text-blue_gray-500 !font-manrope">
//                   Extra Bass
//                 </Text>
//                 <Heading size="xl" as="h1" className="text-gray-900_07 !font-manrope">
//                   Sony Black Headphones
//                 </Heading>
//               </div>
//             </div>
//             <Heading size="8xl" as="h2" className="text-gray-900_07 !font-manrope">
//               $100
//             </Heading>
//           </div>
//         </div>
//         <div className="flex justify-between gap-5">
//           <Button
//             color="white_A700"
//             size="6xl"
//             shape="round"
//             className="border-blue_gray-100_01 border border-solid !rounded"
//           >
//             <Img src="images/img_cart_teal_900.svg" />
//           </Button>
//           <Button
//             shape="round"
//             rightIcon={<Img src="images/img_arrowright.svg" alt="arrow_right" />}
//             className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] !rounded"
//           >
//             Buy Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import { Button, Img, Heading, Text } from "./";

interface Props {
  className?: string;
  subtitle?: string;
  title?: string;
  price?: string;
  buyNow?: string;
}

export default function ProductCard({
  subtitle = "Extra Bass",
  title = "Sony Black Headphones",
  price = "$100",
  buyNow = "Buy Now",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src="images/headphone.png" alt="image_one" className="w-full md:h-auto object-cover rounded" />
      <div className="flex flex-col self-stretch items-start pb-3 gap-[13px]">
        <div className="flex flex-col items-start">
          <Text as="p" className="!text-blue_gray-500 !font-manrope">
            {subtitle}
          </Text>
          <Heading as="h1" className="!text-gray-900_07">
            {title}
          </Heading>
        </div>
        <Heading size="7xl" as="h2" className="!text-gray-900_07">
          {price}
        </Heading>
        <div className="flex gap-3">
          <Button size="7xl" shape="round" className="border-blue_gray-100_01 border border-solid !rounded">
            <Img src="images/img_cart_teal_900.svg" />
          </Button>
          <Button
            color="gray_900_04"
            shape="round"
            rightIcon={<Img src="images/img_arrowright.svg" alt="arrow_right" />}
            className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] !rounded"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

