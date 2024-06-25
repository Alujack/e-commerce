"use client"
import { producttype } from "@/common.type"
import {Img,Text} from "@/components"
export default function Checkoutcart({item}:{item:producttype}){
return (<>
<div className="flex items-center w-[59%] md:w-full gap-[15px]">
                      <Img
                        src={item.src}
                        alt="prod37png_one"
                        className="w-[60px] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[3px] flex-1">
                        <Text
                          as="p"
                          className="!text-black-900_02 !font-medium leading-[19px]"
                        >
                          <>
                            {item.title} <br />
                            {item.subtitle}
                          </>
                        </Text>
                        <Text as="p">{item.qty}</Text>
                      </div>
      </div>
</>)
}