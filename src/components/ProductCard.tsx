"use client"
import { Button, Img, Heading, Text } from "./";
import Link from "next/link";
interface Props {
  className?: string;
  subtitle?: string;
  title?: string;
  price?: string;
  buyNow?: string;
  src?:string;
}

export default function ProductCard({
  subtitle = "Extra Bass",
  title = "Sony Black Headphones",
  price = "$100",
  src = "images/headphone.png",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Link href="/product">
      <Img src={src} alt="image_one" className="h-[232px] object-cover rounded" />
      </Link>
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
            <Img src="/images/img_cart_teal_900.svg" />
          </Button>
          <Button
            color="gray_900_04"
            shape="round"
            rightIcon={<Img src="/images/img_arrowright.svg" alt="arrow_right" />}
            className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] !rounded"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

