import {Img,Heading,Button} from "../."
export default function Branding(){
   return ( <div className="w-full p-7 sm:p-5 bg-white-A700 rounded-[10px]">
                <div className="flex flex-col mb-[11px] gap-[21px]">
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading size="3xl" as="h6" className="self-start uppercase">
                        featured brands
                      </Heading>
                    </div>
                    <Button color="blue_gray_50" size="lg" className="min-w-[67px] rounded-[15px]">
                      View All
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[34px] p-2.5">
                    <div className="flex justify-between items-center gap-5">
                      <Img src="images/img_link_logo4_png.png" alt="linklogo4png" className="w-[14%] object-cover" />
                      <Img
                        src="images/img_link_logo5_png.png"
                        alt="linklogo5png"
                        className="self-start w-[12%] object-cover"
                      />
                      <Img
                        src="images/img_link_logo1_png.png"
                        alt="linklogo1png"
                        className="self-start w-[11%] object-cover"
                      />
                      <Img
                        src="images/img_link_logo2_png.png"
                        alt="linklogo2png"
                        className="self-start w-[16%] object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-start gap-5">
                      <Img src="images/img_link_logo3_png.png" alt="linklogo3png" className="w-[12%] object-cover" />
                      <Img src="images/img_link_logo6_png.png" alt="linklogo6png" className="w-[18%] object-cover" />
                      <Img src="images/img_link_logo7_png.png" alt="linklogo7png" className="w-[14%] object-cover" />
                      <Img src="images/img_link_logo10_png.png" alt="linklogo10png" className="w-[12%] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
    )
}