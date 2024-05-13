"use client"
import { Children } from "react";
import { Button, Heading, Text } from "./";
import { useRouter } from "next/navigation";
interface Props {
  className?: string;
  subtotal?:number;
  shopestim?:number;
  ordertotal?:number;
  Children?: React.ReactNode;


}

export default function Totalsummery({ 
  subtotal = 1000,
  shopestim = 600,
  ordertotal = 1600,
  Children ,
  ...props }: Props) {
  const router = useRouter();
  return (
    <div {...props}>
      <Heading size="xl" as="h1" className="self-start mt-1 !font-bold">
        Order Summary
      </Heading>
      <div className="flex self-stretch justify-between items-center mt-5 gap-5 border-blue_gray-100 border-b border-solid flex-wrap">
        <Text as="p" className="mt-4 mb-[17px]">
          Sub Total:
        </Text>
        <Heading as="h2">${subtotal}</Heading>
      </div>
      <div className="flex self-stretch items-center">
        <div className="flex py-4 border-blue_gray-100 border-b border-solid flex-1">
          <Text as="p" className="self-end">
            Shpping estimate:
          </Text>
        </div>
        <Heading as="h2" className="ml-[-60px] relative">
          ${shopestim}
        </Heading>
      </div>
      <div className="flex self-stretch justify-between items-center gap-5 border-blue_gray-100 border-b border-solid flex-wrap">
        <Text as="p" className="mt-4 mb-[17px]">
          Tax estimate:
        </Text>
        <Heading as="h2">$137.00</Heading>
      </div>
      <div className="flex self-stretch justify-between mt-[17px] gap-5 flex-wrap">
        <Heading as="h2" className="self-start uppercase">
          Order total:
        </Heading>
        <Heading as="h2">${ordertotal}</Heading>
      </div>
     {Children}
    </div>
  );
}
