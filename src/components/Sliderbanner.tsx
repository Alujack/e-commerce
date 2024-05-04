"use client"
import React from "react";
import {Img} from "./"
import {Slider } from "./";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function NotFound(){
      const [sliderState, setSliderState] = React.useState(0);
       const sliderRef = React.useRef<AliceCarousel>(null);
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
                    <div className="mx-2.5 flex w-full flex-col items-center justify-center    bg-white-A700_01 md:gap-[1px] md:p-1 sm:gap-[1px]">
                      <Img src="/images/bannerslider/1.png" alt="fourhundredfour" className="h-[310px] w-[90%] rounded-[10px]" />
                     
                    </div>
                  </React.Fragment>
                ))}
              />
     
       
    )
}