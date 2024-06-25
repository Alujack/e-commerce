
import {Heading,Img,Text,Button} from "@/components"
export default function TeamTable(){
  let name = "Yoeurn Yan",
    position = "Founder & CEO",
    image = "/images/img_image_2.png",
    email ="yeantouch12345@gmail.com"
    return <>
     <div className="px-[45px] flex w-[100%] flex-col gap-[23px] md:w-full">
              <div className="flex items-center justify-between gap-5">
                <Heading size="5xl" as="h1" className="self-start tracking-[-0.11px]">
                  Team
                </Heading>
                <Button color="blue_A200_08" size="6xl" className="min-w-[147px] rounded-md font-bold">
                  Add New Member
                </Button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px_,_1fr))] justify-center gap-[30px]">


                <div className="flex h-[100%] w-full rounded-[18px] flex-col items-center border border-solid border-blue_gray-800_01  bg-cover bg-no-repeat p-[31px] md:h-auto sm:p-5">
                  <Img
                    src={image}
                    alt="image_one"
                    className="mt-[11px] h-[100%] w-[100%] object-cover rounded-[18px]"
                  />
                  <Heading size="lg" as="h4" className="mt-[21px] text-center !font-bold tracking-[-0.06px]">
                    {name}
                  </Heading>
                  <Heading as="h5" className="text-center tracking-[-0.05px] !text-white-A700_b2">
                    {position}
                  </Heading>
                  <Text as="p" className="mt-[7px] text-center tracking-[-0.05px]">
                    {email}
                  </Text>
                </div>    


                
                      
              </div>
            </div>
    </>
}