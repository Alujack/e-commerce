"use client"
import {Heading,Button} from "."
import Link from "next/link";
export default function HeadingBanner({title,link}:{
  title:string,
  link?:string,
}) {
    return (
       <div className="flex sm:flex-col justify-between items-center gap-5 p-[5px]  h-[62px] rounded-[10px]">
                <div className="flex p-2.5">
                  <h1 className="text-3xl font-bold my-2  uppercase">
                    {title}
                  </h1>
                </div>
                <Link href="/store">
                
                <button
                  className="bg-gray-200 mr-[19px] md:mr-0 p-3 capitalize font-medium min-w-[89px] rounded-[10px]"
                >
                  {link}{" "}
                </button>
                </Link>
              </div>
    )
}