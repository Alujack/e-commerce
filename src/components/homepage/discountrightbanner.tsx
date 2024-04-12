import {Img} from "../."
export default function Discountrightbanner(){
    return (
         <div className="flex flex-col w-[25%] md:w-full gap-[7px]">
                    <Img
                      src="images/img_main_section.png"
                      alt="mainsection_one"
                      className="md:w-full flex-1 object-cover rounded-[12px]"
                    />
                    <Img
                      src="images/img_main_section_177x298.png"
                      alt="mainsection_one"
                      className="md:w-full flex-1 object-cover rounded-[12px]"
                    />
                    <Img
                      src="images/img_main_section_177x298.png"
                      alt="mainsection_one"
                      className="h-[177px] w-full flex-1 object-cover rounded-[12px]"
                    />
                  </div>
    )
}