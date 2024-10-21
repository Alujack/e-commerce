import {Heading,Button,Img} from "../."
export default function TopCategory(){
    return (
       <div className="mt-[42px] flex flex-col w-full gap-2.5 p-[21px] sm:p-5 bg-white-A700">
                <div className="flex justify-between mt-[9px] gap-5">
                  <div className="flex"> 
                    <Heading size="3xl" as="h6" className="self-start uppercase">
                      Top Categories
                    </Heading>
                  </div>
                  <a href="/store">
                  <Button color="blue_gray_50" size="lg" className="min-w-[67px] rounded-[15px]">
                    View All
                  </Button>
                  </a>
                </div>
                <div className="flex md:flex-col gap-[25px] p-1.5">
                  <div className="flex flex-col items-center w-[21%] md:w-full mt-[22px] mb-[13px] ml-1 gap-[9px] md:ml-0 md:my-0">
                    <Img
                      src="/images/img_group_4_4.png"
                      alt="laptops_one"
                      className="h-[60px] w-full md:h-auto object-cover"
                    />
                    <Heading as="p" className="text-center !font-semibold">
                      Laptops
                    </Heading>
                  </div>
                  <Img
                    src="/images/img_group_1_4.png"
                    alt="group"
                    className="w-[21%] md:w-full mt-[22px] md:mt-0 object-cover"
                  />
                </div>
              </div>
           
    )
}