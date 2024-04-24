"use client"
import {useState} from "react";
import {Img} from "./";
import Link from "next/link";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
export default function SellerSidebar(){
     const [collapsed, setCollapsed] = useState(false);
    return (
        <>
        <Sidebar
          width="252px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col gap-[46px] overflow-auto bg-white-A700_01 py-[26px] pr-[26px] md:hidden md:p-5 sm:py-5 sm:pr-5"
        >
          <Img src="/images/img_logo.png" width={195} height={40} alt="Logo" className="mt-1 h-[40px] w-[87%] object-cover" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "5px",
                gap: "26px",
                color: "#b1b1b1",
                fontWeight: 500,
                fontSize: "18px",
                [`&:hover, &.ps-active`]: { color: "#2d60ff" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "0.12px" } }}
            className="mb-[494px] flex w-full flex-col items-center self-stretch"
          >
            <MenuItem icon={<Img src="/images/img_home.svg" width={25} height={24} alt="home" className="h-[24px] w-[25px]" />} component={<Link href="/maindash" />}>
              Dashboard
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_product_12313679.png"
                  width={25}
                  height={25}
                  alt="product 12313679"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href="/productsale" />}
            >
              Product
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_stock_12515239_1.png"
                  width={25}
                  height={25}
                  alt="stock 12515239 1"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href="/productstocksale" />}
            >
              Product Stock
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_shopping_list_10849906.png"
                  width={25}
                  height={25}
                  alt="shopping list 10849906"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              
               component={<Link href="/seller-orderlist" />}
            >
              Order Lists
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_credit_card_1.png"
                  width={26}
                  height={25}
                  alt="credit card 1"
                  className="h-[25px] w-[26px] object-cover"
                />
              }
              component={<Link href="/saleinbox" />}
             
            >
              Inbox
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_invoice_6296088.png"
                  width={25}
                  height={25}
                  alt="invoice 6296088"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href="/sale-invoice" />}
            >
              Invoice
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_gear_12076562_1.png"
                  width={25}
                  height={25}
                  alt="gear 12076562 1"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href="/sale-setting" />}
            >
              Setting
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_user_1177568_1.png"
                  width={25}
                  height={25}
                  alt="user 1177568 1"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href="/account/profile" />}
            >
              Accounts
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="/images/img_power_10904887_1.png"
                  width={25}
                  height={25}
                  alt="power 10904887 1"
                  className="h-[25px] w-[25px] object-cover"
                />
              }
              component={<Link href="/sale-logout" />}
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
        </>
    )
} 