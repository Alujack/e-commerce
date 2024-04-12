import {Text,Img} from "../."
export default function Membership(){
    return (
        <div className="flex md:flex-col items-start h-[107px] md:h-auto gap-[3px] p-[35px] sm:p-5 bg-[url(/images/img_main.png)] bg-cover bg-no-repeat flex-wrap rounded-[15px]">
              <Text size="3xl" as="p" className="ml-[181px] md:ml-0 !text-white-A700 text-center">
                Member get
              </Text>
              <Img
                src="images/img_heading_6_star_png.png"
                alt="image"
                className="w-[30px] md:w-full mb-[7px] object-cover"
              />
              <Text size="3xl" as="p" className="mt-[5px] !text-yellow-A400 uppercase text-center">
                FREE SHIPPING*
              </Text>
              <Text size="3xl" as="p" className="mt-1.5 !text-white-A700 text-center">
                with no order minimum!. *Restriction apply
              </Text>
            </div>
    )
}