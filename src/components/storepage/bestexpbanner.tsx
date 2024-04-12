import {Heading,Text} from "../."
export default function BestExperienceBanner(){
    return (
        <div className="flex h-[326px] flex-col items-start justify-center gap-[30px] rounded-[10px] bg-[url(/images/img_div_about_banner.png)] bg-cover bg-no-repeat py-[69px] pl-[69px] pr-14 md:h-auto md:p-5">
              <Heading
                size="8xl"
                as="h1"
                className="ml-[26px] w-[34%] leading-[54px] !text-black-900_02 md:ml-0 md:w-full"
              >
                <span className="text-black-900_02">
                  <>
                    Best experience
                    <br />
                  </>
                </span>
                <span className="font-normal text-black-900_02">always wins</span>
              </Heading>
              <Text as="p" className="ml-[26px] w-[32%] leading-[23px] !text-gray-700_01 md:ml-0 md:w-full">
                <>
                  #1 Online Marketplace for Electronic & Technology
                  <br />
                  in Mahanttan, CA
                </>
              </Text>
            </div>
    )
}