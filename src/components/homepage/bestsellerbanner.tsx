"use client"
import {Img,Button,Text} from "../."
export default function Bestsellerbanner(){
  return (
  <div className="flex flex-col items-start h-[180px] w-full md:h-auto gap-1.5 p-[11px] ">
     <div className="flex flex-col items-start w-[100%] md:w-full ml-[19px] gap-5 p-2.5 md:ml-0">
        <Img src={"images/img_banner.png"} className='round-[25px]'/>
     </div>
     <Button
        color="gray_900_01"
        size="lg"
        className="mb-[7px] ml-[19px] md:ml-0 uppercase font-medium min-w-[92px] rounded-lg"
        >
        shop now
        </Button>
    </div>
)}