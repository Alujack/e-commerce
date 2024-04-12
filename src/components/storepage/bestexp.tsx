import {Text,Img} from "../."
export default function BestExperience(){
    return (
         <div className="flex md:flex-col items-end gap-[38px] p-5 bg-orange-A200 rounded-[10px]">
                <div className="flex items-center mt-[7px] gap-[11px] py-[7px]">
                  <Img src="images/img_symbol.svg" alt="symbol_one" className="h-[18px]" />
                  <Text size="md" as="p" className="self-start !text-white-A700 uppercase">
                    free shipping over $199
                  </Text>
                </div>
                <div className="flex items-center gap-[11px] py-2">
                  <Img src="images/img_symbol.svg" alt="symbol_three" className="h-[13px] w-[13px]" />
                  <Text size="md" as="p" className="self-start !text-white-A700 uppercase">
                    30 days money back
                  </Text>
                </div>
                <div className="flex items-center gap-[11px] py-[7px]">
                  <Img src="images/img_symbol.svg" alt="symbol_five" className="h-[18px]" />
                  <Text size="md" as="p" className="self-start !text-white-A700 uppercase">
                    100% secure payment
                  </Text>
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <Img src="images/img_symbol.svg" alt="symbol_seven" className="self-start h-[18px]" />
                  <Text size="md" as="p" className="self-start !text-white-A700 uppercase">
                    free product return
                  </Text>
                </div>
                <div className="flex items-center gap-[11px] py-2">
                  <Img src="images/img_symbol.svg" alt="symbol_nine" className="self-start h-[13px] w-[13px]" />
                  <Text size="md" as="p" className="!text-white-A700 uppercase">
                    24/7 online & offline support
                  </Text>
                </div>
              </div>
    )
}