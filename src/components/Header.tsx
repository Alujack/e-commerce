"use client"
import { CloseSVG } from "../assets/images";
import { Heading, Img, Input,Text } from ".";
import Navbar from "./navbar";
import {useState} from "react";
import { useRouter } from "next/navigation";
import { signOut} from "next-auth/react";

export default function Header() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const router = useRouter()
  return (
   <header className="flex flex-col items-center justify-center border-2 border-solid deep_purple_700_pink_400_01_border bg-white-A700  rounded-lg">
            <div className="flex md:flex-col items-center w-[99%] md:w-full gap-[43px] ">
              <div className="flex items-center gap-[3px] sm: ">
                <Img src="/images/img_emotion_1_30x35.png" alt="emotionone_one" className="object-cover " />
                <div className="">
                  <Heading
                    size="5xl"
                    as="h5"
                    className="!text-transparent tracking-[-0.28px] !font-semibold bg-gradient1 bg-clip-text sm:1xl "
                  >
                    TECHNESS@
                  </Heading>
                </div>
              </div>
              <Input
                size="md"
                name="search"
                placeholder={``}
                value={searchBarValue}
                onChange={(e: string) => setSearchBarValue(e)}
                prefix={<Img src="/images/img_search.svg" alt="search" className="cursor-pointer" />}
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
                  ) : null
                }
                className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-gray-300_08 border border-solid flex-grow rounded-[15px]"
              />
              <button
                onClick={()=>router.push("/login")} 
              >
                Sign in
              </button>
               <button
                onClick={()=>signOut()} 
              >
                Sign Out
              </button>
            </div>
            <div className ="w-[100%] border-[1.5px] border-solid deep_purple_700_pink_400_01_border sm:hidden"></div>
                 <div className="flex md:flex-col justify-between items-center w-[97%] sm:hidden md:w-full ">
                     <div className="flex px-2">
                <div className="flex items-center gap-2">
                  <a  href= "https://www.google.com/maps/search/Cambodia%2Frupp/@11.5677402,104.8886219,17z/data=!3m1!4b1?entry=ttu" target="_blank">
                  <Img src="/images/img_location_marker.svg" alt="locationmarker" className="h-[24px] w-[24px]" />
                  <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                    Cambodia
                  </Text>
                  </a>
                </div>
              </div>
                    <Navbar/>
               </div>
                
                
          </header>
  );
}
