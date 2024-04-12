"use client"
import {useState} from "react";
import { Button, Heading, Img } from "../../../components";
import Productcardadmin from "../../../components/productcardadmin";
import Topbar from "../../../components/topbar";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function DarkThreePage() {
  const [collapsed, setCollapsed] = useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
   
      <div className="w-full bg-white-A700">
        <div className="flex items-start bg-gray-900_11 md:flex-col">
          <Sidebar
            width="242px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="!sticky top-0 flex h-screen flex-col gap-[30px] overflow-auto bg-blue_gray-900_03 py-[22px] md:hidden md:p-5 sm:py-5"
          >
            <div className="mr-[45px] flex md:mr-0">
              <Heading size="3xl" as="h5" className="!font-extrabold !text-blue-A200_11">
                <span className="text-blue-A200_11">Dash</span>
                <span className="text-white-A700">Stack</span>
              </Heading>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "13px 13px 13px 39px",
                  gap: "16px",
                  backgroundColor: "#273142",
                  alignSelf: "stretch",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "14px",
                },
              }}
              className="mb-[68px] w-full self-stretch pb-[15px]"
            >
              <div className="flex flex-col gap-[0.02px]">
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphoneone" className="h-[24px] w-[22px]" />}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphonethree" className="h-[24px] w-[22px]" />}
                >
                  Products
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphonefive" className="h-[24px] w-[22px]" />}
                >
                  Favorites
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphoneseven" className="h-[24px] w-[22px]" />}
                >
                  Inbox
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphonenine" className="h-[24px] w-[22px]" />}
                >
                  Order Lists
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphone_one" className="h-[24px] w-[22px]" />}
                >
                  Product Stock
                </MenuItem>
              </div>
              <div className="mt-[15px] h-px bg-gray-300_35_02" />
              <div className="flex flex-col items-start">
                <Heading size="xs" as="p" className="ml-10 mt-[15px] tracking-[0.26px] !text-white-A700_e5_02 md:ml-0">
                  PAGES
                </Heading>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphone_three" className="h-[24px] w-[22px]" />}
                >
                  Pricing
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphone_five" className="h-[24px] w-[22px]" />}
                >
                  Calender
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphone_seven" className="h-[24px] w-[22px]" />}
                >
                  To-Do
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_megaphone.svg" alt="megaphone_nine" className="h-[24px] w-[22px]" />}
                >
                  Contact
                </MenuItem>
                <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone" className="h-[24px] w-[22px]" />}>
                  Invoice
                </MenuItem>
                <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone" className="h-[24px] w-[22px]" />}>
                  UI Elements
                </MenuItem>
                <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone" className="h-[24px] w-[22px]" />}>
                  Team
                </MenuItem>
                <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone" className="h-[24px] w-[22px]" />}>
                  Table
                </MenuItem>
              </div>
              <div className="mt-[31px] h-px bg-gray-300_33_02" />
              <div className="flex flex-col gap-[0.02px]">
                <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone" className="h-[24px] w-[22px]" />}>
                  Settings
                </MenuItem>
                <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone" className="h-[24px] w-[22px]" />}>
                  Logout
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[29px] md:self-stretch md:p-5">
            <Topbar />
            <div className="flex w-[95%] flex-col items-start gap-[78px] md:w-full md:gap-[58px] sm:gap-[39px]">
              <Heading size="7xl" as="h1" className="tracking-[-0.11px]">
                Products
              </Heading>
              <div className="ml-[129px] flex w-[41%] flex-col items-start md:ml-0 md:w-full">
                <Heading size="lg" as="h2">
                  September 12-22
                </Heading>
                <Heading size="8xl" as="h3" className="mt-[11px] leading-[48px]">
                  <>
                    Enjoy free home
                    <br />
                    delivery in this summer
                  </>
                </Heading>
                <Heading size="lg" as="h4" className="mt-3 !text-white-A700_cc_06">
                  Designer Dresses - Pick from trendy Designer Dress.
                </Heading>
                <Button
                  color="deep_orange_400_04"
                  className="mt-[33px] min-w-[156px] rounded-[11px] font-nunitosans font-bold tracking-[1.00px] sm:px-5"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex gap-[21px] self-stretch md:flex-col">
                <Productcardadmin className="flex w-full flex-col items-center gap-[22px] border border-solid border-blue_gray-800_21 bg-blue_gray-900_03 pb-[23px] sm:pb-5" />
                <Productcardadmin className="flex w-full flex-col items-center gap-[22px] border border-solid border-blue_gray-800_21 bg-blue_gray-900_03 pb-[23px] sm:pb-5" />
                <Productcardadmin className="flex w-full flex-col items-center gap-[22px] border border-solid border-blue_gray-800_21 bg-blue_gray-900_03 pb-[23px] sm:pb-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
