import Link from "next/link";
import { YOURACCOUNT } from "@/constants/link";

interface Prop{
    show:boolean;
}
export default function ProfileMenu({show}:Prop) {
    if(!show)
        return null;
    return (
        <div className="absolute right-0 mt-0 w-[441px] h-[645px] bg-white-A700 text-gray-800 border border-gray-300 shadow-lg z-10">
            <div className="flex flex-row justify-between mx-6 mt-5 bg-[#F0F2F2] px-4 py-3 rounded-lg mb-5">
                <div className="flex flex-row gap-4 items-center">
                    <img src="/images/user.png" className="h-[40px] w-[40px] rounded-full" />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Yoeurn Yan</h2>
                        <p >Account holder</p>
                    </div>
                </div>
                <div className="flex items-center">    
                        <p className="hover:underline"><Link href="/user-account/personal-information">Manage Profile</Link></p>
                </div>
            </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-4 ml-5">
                <h2 className="font-bold text-lg">Your List</h2>
                    <ul className="flex flex-col gap-2">
                        <li>Your Orders</li>
                        <li>Your Favourite</li>
                        <li>Your Whistlist</li>
                    </ul>

            </div>
            <div className="flex flex-col gap-4 mr-5">
                <h2 className="font-bold text-lg">Your Account</h2>
                    <ul className="flex flex-col gap-2">
                        {YOURACCOUNT.map((link)=>(<li className=" cursor-pointer hover:underline">{link.label}</li>))}
                    </ul>

            </div>
        </div>
        </div>
    );
}