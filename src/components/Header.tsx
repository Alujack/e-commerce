"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NAVLINK } from "@/constants/link";
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { CloseSVG } from "../assets/images";
import { Input} from ".";
import MenuComponent from "./menu";
import ProfileMenu from "./account-information";
import { Category } from "@/context/productDetail";
import axios from "axios";
import AuthModal from "./auth/authModal";

export default function Header() {
  const { data: userData } = useRetrieveUserQuery();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(true);
    }
  };
  
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchBarValue.length > 0) {
      const suggestionss = [
          "hello kitty stuff",
          "hello kitty blanket",
          "hello kitty backpack",
          "hello kitty plush",
          "hello kitty room decor",
          "hello kitty stanley cup",
          "hello kitty pajamas",
          "hello kitty crocs",
          "hello kitty toys",
          "hello kitty bag",
      ];
    setSuggestions(suggestionss)}else{
       setSuggestions([])
    }
  }, [searchBarValue]);

   useEffect(()=>{
    const fetchCategories = async ()=>{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/category/contain/products/`)
      if (response){
        setCategories(response.data)
      }else{
        console.log('error')
      }
    }
    fetchCategories();
  },[])

  return (

    <header className="flex flex-col items-center justify-center">
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
       <MenuComponent show={show} onclose={()=>setShow(false)}/>
      <div className="flex flex-rows items-center w-full bg-[#131921]  p-4 h-[56px]">
        {/* Left Side - Logo */}
        <div className="flex flex-col px-2 my-2 border-gray-400 rounded hover:border-2 transition-[0.4s]">
          <div>
            <Link href="/"><img src="/images/icons/techness.png" alt="emotionone_one" className="object-scale-down h-12 self-center" /></Link>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C8.13 2 5 5.13 5 9c0 4.88 6.5 12.75 6.93 13.32.3.4.84.4 1.14 0C12.5 21.75 19 13.88 19 9c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  />
            </svg>
            <div className="grid grid-rows-2">
              <p className="text-gray-400 text-sm">Deliver to {userData?.last_name}</p>
              <h6 className="font-poppins font-bold">Cambodia,1200</h6>
            
            </div>
          </div>

        {/* Center - Search Bar */}
        <div className="relative flex-grow mx-9">
            <Input
              name="search"
              placeholder={`Search Techness`}
              value={searchBarValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchBarValue("hfjkdhsf");
              }}
               onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/search?query=${searchBarValue}`);
                }
              }}
              prefix={
                <div className="py-[8px] w-[50px] h-full bg-[#8A8A8A] mr-5">
                  <h5 className="text-md text-white-A700 text-center justify-center">
                    All
                  </h5>
                </div>
              }
              suffix={
                <>
                  {searchBarValue.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue("")}
                      height={24}
                      width={24}
                      fillColor="#b0b9beff"
                    />
                  ) : null}
                  <div className="bg-gradient1 w-10 h-full p-2">
                    <img src="/images/icons/search.svg" alt="icon" />
                  </div>
                </>
              }
              className="h-[40px] px-0 text-black-900_01 border-2 border-solid deep_purple_700_pink_400_01_border"
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white-A700 border border-gray-300 w-full mt-1 z-50 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchBarValue(suggestion);
                      setSuggestions([]);
                      router.push(`/search?query=${suggestion}`);
                    }}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

        {/* Right Side - User Menu */}
        <div onMouseOver={()=>setOpenProfile(true)} onMouseLeave={()=>setOpenProfile(false)} className="relative">
          <button onClick={handleButtonClick} className="rounded-lg flex items-center border-gray-400 hover:border-2">
            {isAuthenticated ? (
              <img src={userData?.image || "/images/user.png"} className="h-full w-[40px] rounded-full" />
            ) : (
              <span className=" px-4 py-2 text-white-A700">Sign In</span>
            )}
          </button>

          {isAuthenticated ? <ProfileMenu show={openProfile} /> : ""} 
    
  
      
        </div>
         <div className="text-white-A700 cursor-pointer border-gray-400 hover:border-2 px-4 py-2 rounded">
          <Link href="/orderhistory"><p className="w-full">Your Order </p></Link>
        </div>
        <div className="text-white-A700  border-gray-400 hover:border-2 px-4 py-2 rounded">
            <Link href="/cart" className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .81h9.72a1 1 0 0 0 1-.81L23 6H6"/>
              </svg>
              <p className="text-lg font-bold place-items-end bottom-0">cart</p>
            </Link>
        </div>   
        <div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-row  bg-[#232F3E] h-[40px] w-full pl-3">
         <div onClick={()=>setShow(true)} className="flex flex-row   hover:border-[1.5px] transition-[0.6s] border-gray-400 items-center gap-2 p-2 rounded-[5px] cursor-pointer">
          <div className="flex flex-col gap-1 py-3">
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
          </div>
          <h1 className="text-white-A700 font-inter">All</h1>
        </div>  
        <div className="grid grid-flow-col h-full">     
          {categories.map((link) => (
            <Link key={link.id} href={`/category/${link.id}`} className="px-6 py-2 text-sm text-center text-white-A700  hover:border-[1.5px] transition-[0.3s] border-gray-400 rounded-[5px]">
              {link.category_name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
