"use client"
import{Button,Text,Input} from "@/components"
import {Switch} from "@nextui-org/react";
export default function Preferences(){
    return(<>
     <div className="flex flex-col items-start p-[30px]">
            <div className="flex items-center gap-[30px] self-stretch md:flex-col">
              <div className="flex w-full flex-col items-start gap-[9px]">
                <Text as="p">Currency</Text>
                <Input shape="round" name="Group 195" placeholder={`USD`} className="sm:pr-5" />
              </div>
              <div className="flex w-full flex-col items-start gap-2.5">
                <Text as="p">Time Zone</Text>
                <Input
                  shape="round"
                  name="Group 195"
                  placeholder={`(GMT-12:00) International Date Line West`}
                  className="sm:pr-5"
                />
              </div>
            </div>
            <Text size="2xl" as="p" className="mt-[27px] !text-blue_gray-800">
              Notification
            </Text>
            <div className="mt-[18px] flex items-center gap-5">
             <Switch />
              <Text as="p" className="self-end">
                I send or receive digital currency
              </Text>
            </div>
            <div className="mt-[15px] flex items-center gap-[21px]">
          <Switch />
              <Text as="p">I receive merchant order</Text>
            </div>
            <div className="mt-[15px] flex items-center gap-[21px] sm:flex-col">
              <Switch />
              <Text as="p" className="self-end">
                There are recommendation for my account
              </Text>
            </div>
             <Button className=" self-center min-w-[190px] rounded-[15px] font-medium sm:px-5">Save</Button>
          </div>

    </>)
}