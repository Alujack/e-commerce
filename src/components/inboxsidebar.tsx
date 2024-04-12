"use client"
import React from "react";
import { Heading, CheckBox, Img, Button } from "./";

interface Props {
  className?: string;
}

export default function Inboxsidebar({ ...props }: Props) {
  return (
    <div {...props}>
      <Button color="blue_A200_e5_02" size="4xl" className="w-full rounded-lg font-bold tracking-[-0.05px] sm:px-5">
        + Compose
      </Button>
      <div className="mt-6 flex flex-col items-start gap-[15px] self-stretch">
        <Heading size="md" as="h1" className="tracking-[-0.06px]">
          My Email
        </Heading>
        <div className="flex flex-col items-center self-stretch">
          <div className="flex justify-between gap-5 self-stretch rounded bg-blue-A200_21_02 p-[11px]">
            <div className="ml-[5px] flex items-center gap-3 self-start md:ml-0">
              <div className="mb-[3px] flex self-end rounded-[1px] border-[0.5px] border-solid border-blue-A200_05 p-px">
                <Img src="images/img_path.svg" alt="path_one" className="mb-[5px] h-[5px]" />
              </div>
              <Heading as="h2" className="!font-bold !text-blue-A200_05">
                Inbox
              </Heading>
            </div>
            <Heading as="h3" className="mr-[5px] self-start !font-bold !text-blue-A200_05 md:mr-0">
              1253
            </Heading>
          </div>
          <div className="mt-[11px] flex w-[86%] justify-between gap-5 md:w-full">
            <div className="flex items-center gap-3">
              <Img src="images/img_signal.svg" alt="signal_one" className="h-[15px] w-[15px] self-end" />
              <Heading as="h4" className="tracking-[-0.05px]">
                Starred
              </Heading>
            </div>
            <Heading as="h5" className="text-right !text-white-A700_b2_02">
              245
            </Heading>
          </div>
          <div className="mt-[23px] flex w-[86%] justify-between gap-5 md:w-full">
            <div className="flex items-center gap-3 self-start">
              <Img src="images/img_save.svg" alt="save_one" className="h-[14px] w-[14px] self-end" />
              <Heading as="h6" className="tracking-[-0.05px]">
                Sent
              </Heading>
            </div>
            <Heading as="p" className="text-right !text-white-A700_b2_02">
              24,532
            </Heading>
          </div>
          <div className="mt-[22px] flex w-[86%] justify-between gap-5 md:w-full">
            <div className="flex items-center gap-3">
              <Img src="images/img_edit.svg" alt="edit_one" className="h-[15px] w-[15px] self-end" />
              <Heading as="p" className="tracking-[-0.05px]">
                Draft
              </Heading>
            </div>
            <Heading as="p" className="text-right !text-white-A700_b2_02">
              09
            </Heading>
          </div>
          <div className="mt-[22px] flex w-[87%] justify-between gap-5 md:w-full">
            <div className="flex items-center gap-[13px] self-end">
              <Img src="images/img_video_camera.svg" alt="videocamera_one" className="h-[15px] w-[15px] self-start" />
              <Heading as="p" className="tracking-[-0.05px]">
                Spam
              </Heading>
            </div>
            <Heading as="p" className="self-start text-right !text-white-A700_b2_02">
              14
            </Heading>
          </div>
          <div className="mt-[21px] flex w-[86%] justify-between gap-5 md:w-full">
            <div className="flex items-center gap-3 self-end">
              <Img
                src="images/img_user_white_a700.svg"
                alt="user_one"
                className="mt-0.5 h-[15px] w-[15px] self-start"
              />
              <Heading as="p" className="tracking-[-0.05px]">
                Important
              </Heading>
            </div>
            <Heading as="p" className="self-start text-right !text-white-A700_b2_02">
              18
            </Heading>
          </div>
          <div className="mt-[21px] flex w-[86%] justify-between gap-5 md:w-full">
            <div className="flex items-center gap-3">
              <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[14px] w-[15px]" />
              <Heading as="p" className="h-[20px] tracking-[-0.05px]">
                Bin
              </Heading>
            </div>
            <Heading as="p" className="text-right !text-white-A700_b2_02">
              9
            </Heading>
          </div>
        </div>
      </div>
      <Heading size="md" as="h2" className="mt-[43px] tracking-[-0.06px]">
        Label
      </Heading>
      <div className="mb-[101px] ml-[18px] mt-7 flex w-[63%] flex-col items-start gap-[23px] md:ml-0">
        <CheckBox
          name="primary"
          label="Primary"
          id="primary"
          className="gap-[13px] text-left text-sm font-semibold tracking-[-0.05px] text-white-A700"
        />
        <CheckBox
          name="social"
          label="Social"
          id="social"
          className="gap-[13px] text-left text-sm font-semibold tracking-[-0.05px] text-white-A700"
        />
        <CheckBox
          name="work"
          label="Work"
          id="work"
          className="gap-[13px] text-left text-sm font-semibold tracking-[-0.05px] text-white-A700"
        />
        <CheckBox
          name="friends"
          label="Friends"
          id="friends"
          className="gap-[13px] text-left text-sm font-semibold tracking-[-0.05px] text-white-A700"
        />
        <div className="flex flex-wrap items-start gap-3.5">
          <Heading size="xl" as="h2" className="!font-semibold tracking-[-0.07px] !text-white-A700_cc">
            +
          </Heading>
          <Heading as="h3" className="mt-0.5 tracking-[-0.05px] !text-white-A700_cc">
            Create New Label
          </Heading>
        </div>
      </div>
    </div>
  );
}
