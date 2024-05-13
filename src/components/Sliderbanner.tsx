"use client"
import {useRouter} from "next/navigation";
import React from "react";
import {Img,Heading,Button} from "./"
import {Slider } from "./";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function NotFound(){
      const [sliderState, setSliderState] = React.useState(0);
      const sliderRef = React.useRef<AliceCarousel>(null);
      const router = useRouter();
    return (
     
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(3)].map(() => (
                  < React.Fragment key={Math.random()}>
                    <div className="mx-2.5 flex w-full flex-col items-center justify-center h-[310px]  bg-[url(/images/bannerslider/1.png)] bg-cover bg-no-repeat md:gap-[1px] md:p-10 sm:gap-[1px] rounded-[15px]">
                     
                      <div className=" self-start flex w-[90%] gap-[20px] flex-col md:w-full">
                        <Heading size="2xl" as="h2" className="tracking-[-0.11px] !text-gray-900_02">
                          Noise Cancelling Headphone<br/>
                          Boso Over-Ear Headphone<br/>
                          Wifi, Voice Assistant,<br/>
                          Low latency game mde     <br/>  
                        </Heading>
                        <Button className="self-start rounded-[10px] !font-bold" onClick={()=>router.push("/store")}>
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
     
       
    )
}