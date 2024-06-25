"use client"
import React from "react";
import { Button, SelectBox, Img, Heading, Input } from "./";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function Contact({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex w-[76%] flex-col items-center md:w-full">
        <Button size="lg" shape="square" className="w-[80px]">
          <Img src="/images/img_camera.svg" />
        </Button>
        <Heading as="h1" className="mt-[15px] tracking-[0.54px] !text-blue-A200_09">
          Upload Photo
        </Heading>
        <div className="mt-[35px] flex justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
            <Heading as="h2">First Name</Heading>
            <Input
              shape="round"
              type="text"
              name="firstName"
              placeholder={`Enter your first name`}
              className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
            />
          </div>
          <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
            <Heading as="h3">Last Name</Heading>
            <Input
              shape="round"
              type="text"
              name="lastName"
              placeholder={`Enter your last name`}
              className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
            />
          </div>
        </div>
        <div className="mt-[59px] flex justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
            <Heading as="h2">Your email</Heading>
            <Input
              shape="round"
              type="email"
              name="email"
              placeholder={`Enter your email`}
              className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
            />
          </div>
          <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
            <Heading as="h3">Phone Number</Heading>
            <Input
              shape="round"
              type="number"
              name="phoneNumber"
              placeholder={`Enter your phone number`}
              className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
            />
          </div>
        </div>
        <div className="mt-[49px] flex w-[77%] justify-between gap-5 self-start md:w-full sm:flex-col">
          <div className="flex w-[60%] flex-col items-start gap-2.5 sm:w-full">
            <Heading as="h2">Date of Birth</Heading>
            <Input
              shape="round"
              name="dateOfBirth"
              placeholder={`Enter your birthdate`}
              className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
            />
          </div>
          <div className="flex w-[30%] flex-col items-start gap-2.5 sm:w-full">
            <Heading as="h3">Gender</Heading>
            <SelectBox
              size="md"
              shape="round"
              indicator={<Img src="/images/img_arrowdown_gray_400.svg" alt="arrow_down" className="h-[7px] w-[12px]" />}
              name="gender"
              placeholder={`Male`}
              options={dropDownOptions}
              className="gap-px self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
            />
          </div>
        </div>
        <Button shape="round" className="mt-[60px] min-w-[274px] font-bold tracking-[-0.06px] sm:px-5">
          Add Now
        </Button>
      </div>
    </div>
  );
}
