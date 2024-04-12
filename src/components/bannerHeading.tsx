"use client"
import {Heading,Button} from "."
export default function HeadingBanner({title,link}:{
  title:string,
  link?:string,
}) {
    return (
       <div className="flex sm:flex-col justify-between items-center gap-5 p-[5px] bg-green-700 rounded-[10px]">
                <div className="flex p-2.5">
                  <Heading size="9xl" as="h4" className="my-2 !text-white-A700 uppercase">
                    {title}
                  </Heading>
                </div>
                <Button
                  color="gray_200_03"
                  size="sm"
                  className="mr-[19px] md:mr-0 sm:p-5 capitalize font-medium min-w-[89px] rounded-[10px]"
                >
                  {link}{" "}
                </Button>
              </div>
    )
}