"use client"
import {useRouter} from "next/navigation";
import React from "react";
import {Img,Heading,Button} from "./"
import {Slider } from "./slider";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function SliderBanner(){
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
                    <div className=" static w-full h-full flex-col bg-[url(/images/bannerslider/1.png)] bg-cover bg-no-repeat">          
                      <div className=" self-start top-3 left-5 flex  flex-col h-screen w-full">
                        <h1 className="text-3xl text-white-A700">This is the new arrival</h1>
                       
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
     
       
    )
}