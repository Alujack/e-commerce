
import { Input, Text, Img } from "@/components/";

export default function Myadress() {
  return (
    <div className="flex flex-col self-end md:self-stretch mb-[54px] gap-2.5 p-[9px] md:p-5 bg-gray-100_02 flex-1 rounded-[10px]">
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">Country / Region&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        <div className="self-stretch h-[43px] md:h-auto pr-[15px] border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
          <Img src="images/img_options.svg" alt="arrowdownone" className="h-[43px]" />
          <div className="flex h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
            <Text as="p" className="!text-gray-900_10">
              United States (US)
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch gap-[11px]">
        <div className="flex self-start">
          <Text as="p" className="!text-black-900_02">
            Street Address
          </Text>
        </div>
        <Input
          size="md"
          shape="round"
          type="number"
          name="streetaddress"
          placeholder={`House number and street name ...`}
          className="sm:pr-5 border-blue_gray-100 border border-solid !rounded-md"
        />
        <Input
          size="md"
          shape="round"
          name="forminputone"
          placeholder={`Apartment, suite, unit, etc (Optional)`}
          className="sm:pr-5 border-blue_gray-100 border border-solid !rounded-md"
        />
      </div>
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">Town / City&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        <Input
          shape="round"
          name="city"
          className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
        />
      </div>
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">State / County&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        <div className="self-stretch h-[43px] md:h-auto pr-[15px] border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
          <Img src="images/img_options.svg" alt="arrowdownthree" className="h-[43px]" />
          <div className="flex h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
            <Text as="p" className="self-end !text-gray-900_10">
              Washington
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">Zip Code&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        <Input
          shape="round"
          name="zipcode"
          className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
        />
      </div>
    </div>
  );
}
