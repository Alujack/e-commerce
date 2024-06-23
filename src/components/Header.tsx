"use client"
import { CloseSVG } from "../assets/images";
import { Heading, Img, Input, Text } from ".";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { NAVLINK } from "@/constants/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const router = useRouter()
  const { status: sessionStatus } = useSession();
  const pathname = usePathname();
  return (
    <header className="flex flex-col items-center justify-center border-2 border-solid border-fuchsia-600 bg-white-A700  rounded-lg h-[100px]">
      <div className="flex md:flex-col items-center w-[99%] md:w-full gap-[43px] ">
        <div className="flex items-center gap-[3px] sm: ">
          <Img src="/images/img_emotion_1_30x35.png" alt="emotionone_one" className="object-cover h-10 w-15" />
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

          onChange={(e: string) => {
            router.push("/search");
            setSearchBarValue(e)

          }}
          prefix={<Img src="/images/img_search.svg" alt="search" className="cursor-pointer" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
            ) : null
          }
          className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-2 border-sky-500 flex-grow rounded-[15px]"
        />
        {sessionStatus === "authenticated" ?
          (<>
            <Link href="/user-account/personal-information">
              <img src="/images/img_profile.png" alt="profile" className="h-[40px]" />
            </Link>
          </>
          ) :
          (<button
            onClick={() => router.push("/auth-user/login")}
          >
            Sign in
          </button>)

        }
        <button
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div className="w-[100%] border-[1.5px] sm:hidden"></div>
      <div className="flex md:flex-col justify-between items-center w-[97%] sm:hidden md:w-full ">
        <div className="flex px-2">
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/maps/search/Cambodia%2Frupp/@11.5677402,104.8886219,17z/data=!3m1!4b1?entry=ttu" target="_blank">
              <Img src="/images/img_location_marker.svg" alt="locationmarker" className="h-[24px] w-[24px]" />
              <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                Cambodia
              </Text>
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
