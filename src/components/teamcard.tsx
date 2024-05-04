import {Img,Text,Heading} from "./"
export default function TeamCard(){
    return(
          <div className="flex h-[100%] w-full rounded-[18px] flex-col items-center border border-solid border-blue_gray-800_01 bg-blue_gray-900_01  bg-cover bg-no-repeat p-[31px] md:h-auto sm:p-5">
                  <Img
                    src="/images/img_image_2.png"
                    alt="image_one"
                    className="mt-[11px] h-[100%] w-[100%] object-cover rounded-[18px]"
                  />
                  <Heading size="lg" as="h4" className="mt-[21px] text-center !font-bold tracking-[-0.06px]">
                    Yoeurn Yan
                  </Heading>
                  <Heading as="h5" className="text-center tracking-[-0.05px] !text-white-A700_b2">
                    CEO
                  </Heading>
                  <Text as="p" className="mt-[7px] text-center tracking-[-0.05px]">
                    yoeurn_yan@gmail.com
                  </Text>
                </div>
    )
}