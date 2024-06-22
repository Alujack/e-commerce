import {Img,Text,Heading} from "./"
export default function TeamCard(
  {
    name = "Yoeurn Yan",
    position = "Founder & CEO",
    image = "/images/img_image_2.png",
    email ="yeantouch12345@gmail.com"

  }:{
    name:string,
    position:string,
    image:string,
    email:string

  }

){
    return(
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
    )
}