import React from "react";
import { Img, Heading } from ".";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import Link from "next/link";
import {  ADMIN_MENU } from "@/constants/link";
interface Props {
  className?: string;
}

export default function AdminSidebar({ ...props }: Props) {
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
            backgroundColor: "transparent",
            color: "black",
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
          {ADMIN_MENU.map((menu)=>(
          <MenuItem component={<Link href={menu.href} />} 
            icon={<Img src={menu.icon} 
            alt={menu.label}
            className="h-[24px] w-[22px]" />}>
           {menu.label}
          </MenuItem>
        ))}  
        </div>
         
      </Menu>
    </Sidebar>
  );
}
