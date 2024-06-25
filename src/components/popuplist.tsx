"use client"
import React from "react";
import { Button, Text, Heading } from "./";

interface Props {
  className?: string;
  selectorder?: string;
  healthMedicine?: string;
  bookStationary?: string;
  services?: string;
  fashionBeauty?: string;
  homeLiving?: string;
  electronics?: string;
  mobilePhone?: string;
  accessories?: string;
  youcanchoose?: string;
  applyNow?: string;
}

export default function Listtype({
  selectorder = "Select Order Type",
  healthMedicine = "Health & Medicine",
  bookStationary = "Book & Stationary",
  services = "Services & Industry",
  fashionBeauty = "Fashion & Beauty",
  homeLiving = "Home & Living",
  electronics = "Electronics",
  mobilePhone = "Mobile & Phone",
  accessories = "Accessories",
  youcanchoose = "*You can choose multiple Order type",
  applyNow = "Apply Now",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex w-[91%] flex-col items-start gap-[22px]">
        <Heading size="lg" as="h1">
          {selectorder}
        </Heading>
        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 gap-4 sm:flex-col">
              <Button
                color="gray_500"
                size="xs"
                variant="outline"
                className="w-full rounded-[17px] text-sm font-semibold"
              >
                {healthMedicine}
              </Button>
              <Button
                color="gray_500"
                size="xs"
                variant="outline"
                className="w-full rounded-[17px] text-sm font-semibold"
              >
                {bookStationary}
              </Button>
              <Button
                color="gray_500"
                size="xs"
                variant="outline"
                className="w-full rounded-[17px] text-sm font-semibold"
              >
                {services}
              </Button>
            </div>
            <div className="flex flex-1 gap-4 sm:flex-col">
              <Button
                color="gray_500"
                size="xs"
                variant="outline"
                className="w-full rounded-[17px] text-sm font-semibold"
              >
                {fashionBeauty}
              </Button>
              <Button
                color="gray_500"
                size="xs"
                variant="outline"
                className="w-full rounded-[17px] text-sm font-semibold sm:px-5"
              >
                {homeLiving}
              </Button>
              <Button
                color="gray_500"
                size="xs"
                variant="outline"
                className="w-full rounded-[17px] text-sm font-semibold sm:px-5"
              >
                {electronics}
              </Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              color="gray_500"
              size="xs"
              variant="outline"
              className="min-w-[147px] rounded-[17px] text-sm font-semibold sm:px-5"
            >
              {mobilePhone}
            </Button>
            <Button
              color="gray_500"
              size="xs"
              variant="outline"
              className="min-w-[147px] rounded-[17px] text-sm font-semibold sm:px-5"
            >
              {accessories}
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 h-px w-full self-stretch bg-gray-500_7f" />
      <Text as="p" className="ml-6 mt-4 self-start md:ml-0">
        {youcanchoose}
      </Text>
      <Button size="xs" shape="square" className="mt-[30px] min-w-[129px] text-xs font-bold sm:px-5">
        {applyNow}
      </Button>
    </div>
  );
}
