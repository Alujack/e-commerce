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
import { Heading, Img, Input, Text } from ".";

export default function Header() {
  const { data: userData } = useRetrieveUserQuery();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const [searchBarValue, setSearchBarValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // Track initial sign-in state

  const handleButtonClick = () => {
    if (isAuthenticated) {
       setMenuOpen(!menuOpen);

    } else {
      router.push("/auth-user/login"); // Redirect to login
    }
  };

  const handleSignIn = () => {
    if (isAuthenticated) {
      setIsSignIn(false); // After signing in, change state to show menu
    }
  };

  return (
    <header className="flex flex-col items-center justify-center border-2 border-solid border-fuchsia-600 bg-white-A700 rounded-lg h-[100px]">
      <div className="flex md:flex-col items-center w-[99%] md:w-full gap-[43px]">
        <div className="flex items-center gap-[3px] sm:">
          <Img src="/images/img_emotion_1_30x35.png" alt="emotionone_one" className="object-cover h-10 w-15" />
          <div>
            <h5
              className="!text-transparent font-bold font-poppins text-2xl bg-gradient1 bg-clip-text sm:1xl"
            >
              TECHNESS@
            </h5>
          </div>
        </div>
        <Input
          size="md"
          name="search"
          placeholder={``}
          value={searchBarValue}
          onChange={(e:any) => {
            router.push("/search");
            setSearchBarValue(e.target.value);
          }}
          prefix={<Img src="/images/img_search.svg" alt="search" className="cursor-pointer" />}
          suffix={
            searchBarValue.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
            ) : null
          }
          className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-2 border-sky-500 flex-grow rounded-[15px]"
        />
        <div className="relative">
          <button
            onClick={handleButtonClick}
            // onMouseEnter={() => isAuthenticated && setMenuOpen(true)}
            className="rounded-lg"
          >
            {isAuthenticated ? <img src={userData?.image? userData.image : "/images/user.png"} className="h-[40px] w-[40px] rounded-full"/> : <span className="bg-gray-200 px-4 p-2"> Sign In</span>}
          </button>
          {menuOpen && isAuthenticated && (
            <div className="absolute right-0 mt-2 w-48 bg-orange-200 border-gray-300 shadow-lg z-10">
              <Link href="/user-account/personal-information" className="px-4 py-2 "><span className="hover:bg-orange-300">Personal Information</span></Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2"><span className="hover:bg-orange-300">Logout</span></button>
            </div>
          )}
        </div>
      </div>
      <div className="w-[100%] border-[1.5px] sm:hidden"></div>
      <div className="flex md:flex-col justify-between items-center w-[97%] sm:hidden md:w-full">
        <div className="flex px-2">
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/maps/search/Cambodia%2Frupp/@11.5677402,104.8886219,17z/data=!3m1!4b1?entry=ttu" target="_blank">
              <Img src="/images/img_location_marker.svg" alt="locationmarker" className="h-[24px] w-[24px]" />
              <p className="text-gray-700 text-lg">Cambodia</p>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-x-0 w-[85%] md:w-full">
          {NAVLINK.map((link) => (
            <Link key={link.key} href={link.href} className="px-2 self-center sm:ml-0 rounded">
              <div className="flex items-center gap-2 sm:ml-0 text-sm">
                {link.src ? <img src={link.src} className="h-[24px] w-[24px]" /> : null}
                <Heading
                  size="2xl"
                  as="h6"
                  className={
                    pathname === link.href
                      ? "border-b-4 border-indigo-500 font-sans hover:font-serif text-center"
                      : "font-sans hover:font-serif text-center"
                  }
                >
                  {link.label}
                </Heading>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
