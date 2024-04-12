import {Img, Text} from "../.";
export default function Bankcard(){
    return (
           <div className="flex items-center gap-5 pl-[5px] md:flex-col">
                  <Img
                    src="/images/img_banner2_png.png"
                    alt="banner3png_one"
                    className="h-full w-[50%] rounded-[10px] object-cover md:w-full"
                  />
                  <Img
                    src="/images/img_banner3_png.png"
                    alt="banner2png_one"
                    className="h-full w-[50%] rounded-[10px] object-cover md:w-full"
                  />
                </div>
    )
}