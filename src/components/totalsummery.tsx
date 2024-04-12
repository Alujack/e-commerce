import React from "react";
import { Button, Heading, Text } from "./";

interface Props {
  className?: string;
}

export default function Totalsummery({ ...props }: Props) {
  return (
    <div {...props}>
      <Heading size="xl" as="h1" className="self-start mt-1 !font-bold">
        Order Summary
      </Heading>
      <div className="flex self-stretch justify-between items-center mt-5 gap-5 border-blue_gray-100 border-b border-solid flex-wrap">
        <Text as="p" className="mt-4 mb-[17px]">
          Sub Total:
        </Text>
        <Heading as="h2">$1,000.00</Heading>
      </div>
      <div className="flex self-stretch items-center">
        <div className="flex py-4 border-blue_gray-100 border-b border-solid flex-1">
          <Text as="p" className="self-end">
            Shpping estimate:
          </Text>
        </div>
        <Heading as="h2" className="ml-[-60px] relative">
          $600.00
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
        <Heading as="h2">$1,737.00</Heading>
      </div>
      <Button
        color="green_700"
        size="9xl"
        className="mt-[31px] mb-[512px] sm:pl-5 uppercase font-medium min-w-[124px] rounded-[10px]"
      >
        checkout
      </Button>
    </div>
  );
}
