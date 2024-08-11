// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { NAVLINK } from "@/constants/link";
// import { usePathname } from "next/navigation";
// import { useAppSelector, useAppDispatch } from '@/redux/hooks';
// import { useLogoutMutation } from '@/redux/features/authApiSlice';
// import { logout as setLogout } from '@/redux/features/authSlice';
// import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
// import { CloseSVG } from "../assets/images";
// import { Heading, Img, Input, Text } from ".";

// export default function Header() {
//   const { data: userData } = useRetrieveUserQuery();
//   const dispatch = useAppDispatch();
//   const [logout] = useLogoutMutation();
//   const { isAuthenticated } = useAppSelector(state => state.auth);
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleLogout = () => {
//     logout(undefined)
//       .unwrap()
//       .then(() => {
//         dispatch(setLogout());
//       });
//   };

//   const [searchBarValue, setSearchBarValue] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isSignIn, setIsSignIn] = useState(true); // Track initial sign-in state

//   const handleButtonClick = () => {
//     if (isAuthenticated) {
//        setMenuOpen(!menuOpen);

//     } else {
//       router.push("/auth-user/login"); // Redirect to login
//     }
//   };

//   const handleSignIn = () => {
//     if (isAuthenticated) {
//       setIsSignIn(false); // After signing in, change state to show menu
//     }
//   };

//   return (
//     <header className="flex flex-col items-center justify-center border-2 border-solid border-fuchsia-600 bg-white-A700 rounded-lg h-[100px]">
//       <div className="flex md:flex-col items-center w-[99%] md:w-full gap-[43px]">
//         <div className="flex items-center gap-[3px] sm:">
//           <Img src="/images/img_emotion_1_30x35.png" alt="emotionone_one" className="object-cover h-10 w-15" />
//           <div>
//             <h5
//               className="!text-transparent font-bold font-poppins text-2xl bg-gradient1 bg-clip-text sm:1xl"
//             >
//               TECHNESS@
//             </h5>
//           </div>
//         </div>
//         <Input
//           size="md"
//           name="search"
//           placeholder={``}
//           value={searchBarValue}
//           onChange={(e:any) => {
//             router.push("/search");
//             setSearchBarValue(e.target.value);
//           }}
//           prefix={<Img src="/images/img_search.svg" alt="search" className="cursor-pointer" />}
//           suffix={
//             searchBarValue.length > 0 ? (
//               <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
//             ) : null
//           }
//           className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-2 border-sky-500 flex-grow rounded-[15px]"
//         />
//         <div className="relative">
//           <button
//             onClick={handleButtonClick}
//             // onMouseEnter={() => isAuthenticated && setMenuOpen(true)}
//             className="rounded-lg"
//           >
//             {isAuthenticated ? <img src={userData?.image? userData.image : "/images/user.png"} className="h-[40px] w-[40px] rounded-full"/> : <span className="bg-gray-200 px-4 p-2"> Sign In</span>}
//           </button>
//           {menuOpen && isAuthenticated && (
//             <div className="absolute right-0 mt-2 w-48 bg-orange-200 border-gray-300 shadow-lg z-10">
//               <Link href="/user-account/personal-information" className="px-4 py-2 "><span className="hover:bg-orange-300">Personal Information</span></Link>
//               <button onClick={handleLogout} className="w-full text-left px-4 py-2"><span className="hover:bg-orange-300">Logout</span></button>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="w-[100%] border-[1.5px] sm:hidden"></div>
//       <div className="flex md:flex-col justify-between items-center w-[97%] sm:hidden md:w-full">
//         <div className="flex px-2">
//           <div className="flex items-center gap-2">
//             <a href="https://www.google.com/maps/search/Cambodia%2Frupp/@11.5677402,104.8886219,17z/data=!3m1!4b1?entry=ttu" target="_blank">
//               <Img src="/images/img_location_marker.svg" alt="locationmarker" className="h-[24px] w-[24px]" />
//               <p className="text-gray-700 text-lg">Cambodia</p>
//             </a>
//           </div>
//         </div>
//         <div className="grid grid-cols-7 gap-x-0 w-[85%] md:w-full">
//           {NAVLINK.map((link) => (
//             <Link key={link.key} href={link.href} className="px-2 self-center sm:ml-0 rounded">
//               <div className="flex items-center gap-2 sm:ml-0 text-sm">
//                 {link.src ? <img src={link.src} className="h-[24px] w-[24px]" /> : null}
//                 <Heading
//                   size="2xl"
//                   as="h6"
//                   className={
//                     pathname === link.href
//                       ? "border-b-4 border-indigo-500 font-sans hover:font-serif text-center"
//                       : "font-sans hover:font-serif text-center"
//                   }
//                 >
//                   {link.label}
//                 </Heading>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }
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

  const handleButtonClick = () => {
    if (isAuthenticated) {
      setMenuOpen(!menuOpen);
    } else {
      router.push("/auth-user/login");
    }
  };

  return (
    <header className="flex flex-col items-center justify-cente">
      <div className="flex flex-rows items-center w-full bg-[#131921] p-4 h-[56px]">
        {/* Left Side - Logo */}
        <div className="flex flex-col px-2 my-2 border-gray-400 hover:border-2 ">
          <div>
            <img src="/images/img_emotion_1_30x35.png" alt="emotionone_one" className="object-scale-down h-16 self-center " />
           </div>
          </div>
          <div className=" flex flex-row gap-3 p-2 py-2 rounded hover:border-2  border-gray-400 text-white-A700 items-center  ">
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
        <div className="flex-grow mx-4">
          <Input
            size="lg"
            name="search"
            placeholder={`Search Techness`}
            value={searchBarValue}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              router.push("/search");
              setSearchBarValue(e.target.value);
            }}
            prefix={<Img src="/images/img_search.svg" alt="search" className="cursor-pointer" />}
            suffix={
              searchBarValue.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
              ) : null
            }
            className="h-[40px] text-black-900_01 border-2 border-yellow-500 flex-grow rounded-lg"
          />
        </div>

        {/* Right Side - User Menu */}
        <div className="relative">
           <button onClick={handleButtonClick} className="rounded-lg flex items-center">
            {isAuthenticated ? (
              <img src={userData?.image || "/images/user.png"} className="h-[40px] w-[40px] rounded-full"/>
            ) : (
              <span className=" px-4 py-2"> Sign In</span>
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
         <div className=" px-4 py-2">
          <p>Your Order </p>
        </div>
        <div className="px-4 py-2">
          <p>Your Cart </p>
        </div>   
        <div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-row justify-between bg-[#232F3E] h-[40px] w-full pl-3">
         <div onClick={()=>alert("ypu have clicked menu")} className="flex flex-row  items-center gap-2 cursor-pointer">
          <div className="flex flex-col gap-1 py-3">
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
            <div className="w-6 h-[1.8px]  bg-white-A700"></div>
          </div>
          <h1 className="text-white-A700 font-inter">All</h1>
        </div>  
        <div className="grid grid-flow-col gap-x-4">     
          {NAVLINK.map((link) => (
            <Link key={link.key} href={link.href} className="px-4 py-2 text-sm text-center text-white-A700 hover:scale-150 hover:border-1 border-white-A700 rounded-lg">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
