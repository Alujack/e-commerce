import {Img} from "../."
export default function BankCard(){
    return(
        <div className="flex md:flex-col gap-1.5">
              <Img
                src="images/img_banner2_png.png"
                alt="bannerpng"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
              <Img
                src="images/img_banner3_png.png"
                alt="bannerpng"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
            </div>
    )
}