"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NAVLINK } from "@/constants/link";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { CloseSVG } from "../assets/images";
import {Img, Input} from ".";
import MenuComponent from "./menu";
import { divider } from "@nextui-org/react";

export default function Header() {
  const { data: userData } = useRetrieveUserQuery();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const [searchBarValue, setSearchBarValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      setMenuOpen(!menuOpen);
    } else {
      router.push("/auth-user/login");
    }
  };

  return (

    <header className="flex flex-col items-center justify-cente">
       <MenuComponent show={show} onclose={()=>setShow(false)}/>
      <div className="flex flex-rows items-center w-full bg-[#131921]  p-4 h-[56px]">
        {/* Left Side - Logo */}
        <div className="flex flex-col px-2 my-2 border-gray-400 rounded hover:border-2 transition-[0.4s]">
          <div>
            <img src="/images/img_emotion_1_30x35.png" alt="emotionone_one" className="object-scale-down h-12 self-center" />
           </div>
          </div>
          <div className=" h-12 flex flex-row gap-3 p-2 py-2 rounded hover:border-2 transition-[0.4s] border-gray-400 text-white-A700 items-center  ">
            <svg
                  className="w-6 h-6 text-indigo-600 my-3 hover:text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C8.13 2 5 5.13 5 9c0 4.88 6.5 12.75 6.93 13.32.3.4.84.4 1.14 0C12.5 21.75 19 13.88 19 9c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  />
            </svg>
            <div className="grid grid-rows-2">
              <p className="text-gray-400 text-sm">Deliver to Yan</p>
              <h6 className="font-poppins font-bold">Cambodia,1200</h6>
            
            </div>
          </div>

        {/* Center - Search Bar */}
        <div className="flex-grow mx-9 ">
          <Input
            name="search"
            placeholder={`Search Techness`}
            value={searchBarValue}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              router.push("/search");
              setSearchBarValue(e.target.value);
            }}
            prefix={<div className=" py-[8px] w-[50px] h-full bg-[#8A8A8A] mr-5"><h5 className="text-md text-white-A700 text-center justify-center">All</h5></div>}
            suffix={
              <>
              {searchBarValue.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
              ) : null}

               <div className="bg-gradient1 w-10 h-full p-2"> 
                <img src="/images/icons/search.svg" alt="icon" />
               </div>
              </>
            }
            
            className="h-[40px] px-0 text-black-900_01 border-2 border-solid deep_purple_700_pink_400_01_border"
          />
        </div>

        {/* Right Side - User Menu */}
        <div className="relative">
           <button onClick={handleButtonClick} className="rounded-lg flex items-center border-gray-400 hover:border-2">
            {isAuthenticated ? (
              <img src={userData?.image || "/images/user.png"} className="h-[40px] w-[40px] rounded-full"/>
            ) : (
              <span className=" px-4 py-2 text-white-A700"> Sign In</span>
            )}
          </button>
          {menuOpen && isAuthenticated && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 border border-gray-300 shadow-lg z-10">
              <Link href="/user-account/personal-information" className="px-4 py-2 block hover:bg-gray-100">
                Personal Information
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
         <div className="text-white-A700 border-gray-400 hover:border-2 px-4 py-2 rounded">
          <p className="">Your Order </p>
        </div>
        <div className="text-white-A700 border-gray-400 hover:border-2 px-4 py-2 rounded">
          <p> <Link href="/cart">Your Cart</Link> </p>
        </div>   
        <div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-row  bg-[#232F3E] h-[40px] w-full pl-3">
         <div onClick={()=>setShow(true)} className="flex flex-row   hover:border-2 transition-[0.6s] border-gray-400 rounded-lg items-center gap-2 p-2  cursor-pointer">
          <div className="flex flex-col gap-1 py-3">
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
          </div>
          <h1 className="text-white-A700 font-inter">All</h1>
        </div>  
        <div className="grid grid-flow-col gap-x-4 ml-[12%]">     
          {NAVLINK.map((link) => (
            <Link key={link.key} href={link.href} className="px-4 py-2 text-sm text-center text-white-A700  hover:border-2 transition-[0.6s] border-gray-400 rounded-lg ">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
