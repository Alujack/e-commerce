"use client"
import{Img, Button,Text,Input,SelectBox} from "@/components"
import { Switch } from "@/components/switch";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function App(){
    return(<>
     <div className="flex flex-col items-start p-[30px]">
              <Text size="2xl" as="p" className="!text-blue_gray-800">
                Two-factor Authentication
              </Text>
              <div className="mt-[18px] flex items-center gap-5 sm:flex-col">
                <Switch />
                <Text as="p">Enable or disable two factor authentication</Text>
              </div>
              <Text size="2xl" as="p" className="mt-[29px] !text-blue_gray-800">
                Change Password
              </Text>
              <div className="mt-[13px] flex flex-col items-start gap-2.5 self-stretch">
                <Text as="p">Current Password</Text>
                <Input shape="round" type="password" name="Group 3667" placeholder={`**********`} className="sm:pr-5" />
              </div>
              <div className="mt-[21px] flex flex-col items-start gap-2.5 self-stretch">
                <Text as="p">New Password</Text>
                <Input shape="round" type="password" name="Group 195" placeholder={`**********`} className="sm:pr-5" />
              </div>
            </div>
    
    </>);}