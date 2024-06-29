"use client"
import {useState} from "react";
import {Img} from ".";
import Link from "next/link";

import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
export default function SideBar({menu}:{menu:{href:string;label:string;icon:string}[]}){
     const [collapsed] = useState(false);
    return (
        <>
        <Sidebar
          width="252px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="flex h-screen flex-col overflow-auto border-r-4 border-indigo-500 py-[30px] pr-[26px] md:hidden md:p-5 sm:py-5 sm:pr-5"
        >
          <Img src="/images/img_logo.png" width={195} height={40} alt="Logo" className="mt-1 h-[40px] w-[87%] object-cover mb-[20px]" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "5px",
                gap: "23px",
                color: "#b1b1b1",
                fontWeight: 500,
                fontSize: "18px",
                [`&:hover, &.ps-active`]: { color: "#2d60ff" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "15px" } }}
            className=" flex w-full flex-col items-center self-stretch"
          >
            {menu.map((menu)=>(
              <MenuItem
              icon={
                <Img
                  src={menu.icon}
                  width={25}
                  height={25}
                  alt={menu.label}
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href={menu.href} />}
            >
              {menu.label}
            </MenuItem>
            ))}
          </Menu>
          
        </Sidebar>
        </>
    )
} 