import React from "react";
import { Img, Heading } from "./";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  function collapseSidebar() {
     setCollapsed(!collapsed)
  }

  return (
    <Sidebar {...props} width="240px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <div className="mr-[45px] flex md:mr-0">
        <Heading size="3xl" as="h5" className="!font-extrabold !text-blue-A200_11">
          <span className="text-blue-500">Dash</span>
          <span className="text-white-A700">Stack</span>
        </Heading>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "13px 13px 13px 39px",
            gap: "16px",
            alignSelf: "stretch",
            backgroundColor: "#273142",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "14px",
           [`&.active`]: {
          backgroundColor: '#1d4ed8',
          color: '#eff6ff',
        },
          },
        }}
        className="mb-[68px] w-full self-stretch pb-[15px]"
      >
        <div className="flex flex-col gap-[0.03px]">
          <MenuItem component={<Link href="dashboard" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneone"  className="h-[24px] w-[22px]" />}>
            Dashboard
          </MenuItem>
          <MenuItem component={<Link href="productadmin" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonethree" className="h-[24px] w-[22px]" />}>
            Products
          </MenuItem>
          <MenuItem component={<Link href="favorite" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonefive" className="h-[24px] w-[22px]" />}>
            Favorites
          </MenuItem>
          <MenuItem component={<Link href="inbox" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneseven" className="h-[24px] w-[22px]" />}>
            Inbox
          </MenuItem>
          <MenuItem component={<Link href="orderlist" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonenine" className="h-[24px] w-[22px]" />}>
            Order Lists
          </MenuItem>
          <MenuItem component={<Link href="productinstock" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneone" className="h-[24px] w-[22px]" />}>
            Product Stock
          </MenuItem>
        </div>

        {/* page */}

        <div className="mt-[13px] h-px bg-gray-300_35_02" />
        <div className="flex flex-col items-start pt-[15px]">
          <Heading size="xs" as="p" className="ml-10 !font-bold tracking-[0.26px] !text-white-A700_e5_02 md:ml-0">
            PAGES
          </Heading>
          <MenuItem component={<Link href="pricing" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonethree" className="h-[24px] w-[22px]" />}>
            Pricing
          </MenuItem>
          <MenuItem component={<Link href="calender" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonefive" className="h-[24px] w-[22px]" />}>
            Calender
          </MenuItem>
          <MenuItem component={<Link href="todo" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneseven" className="h-[24px] w-[22px]" />}>
            To-Do
          </MenuItem>
          <MenuItem component={<Link href="contact" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonenine" className="h-[24px] w-[22px]" />}>
            Contact
          </MenuItem>
          <MenuItem component={<Link href="invoice" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneone" className="h-[24px] w-[22px]" />}>
            Invoice
          </MenuItem>
          <MenuItem component={<Link href="uielement" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonethree" className="h-[24px] w-[22px]" />}>
            UI Elements
          </MenuItem>
          <MenuItem component={<Link href="team" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonefive" className="h-[24px] w-[22px]" />}>
            Team
          </MenuItem>
          <MenuItem component={<Link href="table" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneseven" className="h-[24px] w-[22px]" />}>
            Table
          </MenuItem>
        </div>
        <div className="mt-[31px] h-px bg-gray-300_33_02" />
        <div className="flex flex-col gap-[0.03px]">
          <MenuItem component={<Link href="setting" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphonenine" className="h-[24px] w-[22px]" />}>
            Settings
          </MenuItem>
          <MenuItem component={<Link href="logout" />} icon={<Img src="/images/img_megaphone.svg" alt="megaphoneone" className="h-[24px] w-[22px]" />}>
            Logout
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
