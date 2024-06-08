"use client"
import {useRouter} from "next/navigation";
import {useState, useRef} from "react";
import { Fragment } from "react";
import {Img,Button,Heading} from "@/components";
import {Slider } from "@/components";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function NotFound(){
  const router = useRouter();
      const [sliderState, setSliderState] = useState(0);
       const sliderRef = useRef<AliceCarousel>(null);
    return (
         <div className="flex  items-center justify-center bg-blue-A200_08  px-14 py-[167px] md:h-auto md:p-5">
            <div className="flex w-[100%] md:w-full">
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
                items={[...Array(1)].map(() => (
                  < Fragment key={Math.random()}>
                    <div className="mx-2.5 flex w-full flex-col items-center justify-center gap-[101px] rounded-[24px] border border-solid border-gray-400_05 bg-white-A700_01 px-14 py-[102px] md:gap-[75px] md:p-5 sm:gap-[50px]">
                      <Img src="/images/img_404.svg" alt="fourhundredfour" className="h-[296px] w-[75%]" />
                      <div className="flex w-[81%] flex-col gap-8 md:w-full">
                        <Heading size="2xl" as="h2" className="tracking-[-0.11px] !text-gray-900_02">
                          Looks like you’ve got lost….
                        </Heading>
                        <Button className="w-full rounded-lg font-bold tracking-[-0.07px] sm:px-5" onClick={()=>router.push("/")}>
                          Back to Home
                        </Button>
                      </div>
                    </div>
                  </Fragment>
                ))}
              />
            </div>
          </div>
       
    )
}