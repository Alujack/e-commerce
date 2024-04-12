import {Img} from "../."
export default function Discountproductbanner(){
    return (
         <div className="flex sm:flex-col justify-center w-[45%] md:w-full gap-[15px]  my-[37px] shadow-inner rounded-2xl">
                        <div className="flex flex-col md:flex-row w-[22%] sm:w-full gap-[15px]">
                          <div className="flex flex-col items-center p-2.5  flex-1">
                            <Img src="images/img_group_1_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                          <div className="flex flex-col items-center p-2.5  flex-1">
                            <Img src="images/img_group_2_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                          <div className="flex flex-col items-center p-2.5  flex-1">
                            <Img src="images/img_group_3_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                          <div className="flex flex-col items-center p-2.5  flex-1">
                            <Img src="images/img_group_4_4_60x35.png" alt="image" className="w-[58%] object-cover" />
                          </div>
                        </div>
                        <div className="sm:self-stretch  md:py-5  flex-1">
                          <Img
                            src="images/img_prod5_png_265x277.png"
                            alt="prod5png_one"
                            className="h-full w-full md:h-auto object-cover"
                          />
                        </div>
                      </div> 
    )
}