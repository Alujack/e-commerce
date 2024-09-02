"use client"
import { Text, Input } from "@/components"
import { Switch } from "@nextui-org/react";
export default function App() {
  return (<>
    <div className="flex flex-col items-center p-[30px]">
      <p className="text-gray-800  text-4xl font-poppins font-bold">
        Two-factor Authentication
      </p>
      <div className="mt-[18px] flex items-center gap-5 sm:flex-col">
        <Switch />
        <Text as="p">Enable or disable two factor authentication</Text>
      </div>
      <Text size="2xl" as="p" className="mt-[29px] text-blue-A700_02">
        Change Password
      </Text>
      <div className="mt-[13px] flex flex-col items-start gap-2.5 self-stretch">
        <Text as="p">Current Password</Text>
        <Input shape="round" type="password" name="Group 3667" placeholder={`**********`} className="sm:pr-5 text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid" />
      </div>
      <div className="mt-[21px] flex flex-col items-start gap-2.5 self-stretch ">
        <Text as="p">New Password</Text>
        <Input shape="round" type="password" name="Group 195" placeholder={`**********`} className="sm:pr-5 text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid" />
      </div>
    </div>

  </>);
}