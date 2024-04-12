import {Heading,Text,Img} from "../."
export default function BestsellerProduct(){
    return (
        <div className="w-full p-[13px] bg-white-A700 rounded-[25px]">
                    <div className="justify-center mt-1 mb-[5px] gap-[10px] grid-cols-[repeat(auto-fill,_minmax(164px_,_1fr))] grid">
                      <div className="flex justify-between items-start w-full gap-2">
                        <div className="flex flex-col items-start gap-0.5">
                          <Heading as="p">iPhone (iOS)</Heading>
                          <Text size="s" as="p">
                            74 Items
                          </Text>
                        </div>
                        <Img src="images/img_link_prod20_png.png" alt="image" className="w-[37%] object-cover" />
                      </div>
                      <div className="flex justify-between items-start w-full gap-5">
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading as="p">Android</Heading>
                          <Text size="s" as="p">
                            35 Items
                          </Text>
                        </div>
                        <Img src="images/img_link_prod21_png.png" alt="image" className="w-[30%] object-cover" />
                      </div>
                      <div className="flex justify-between items-start w-full gap-5">
                        <div className="flex flex-col items-start gap-0.5">
                          <Heading as="p">5G Support</Heading>
                          <Text size="s" as="p">
                            12 Items
                          </Text>
                        </div>
                        <Img src="images/img_link_prod22_png.png" alt="image" className="w-[31%] object-cover" />
                      </div>
                      <div className="flex justify-between items-start w-full gap-5">
                        <div className="flex flex-col items-start gap-0.5">
                          <Heading as="p">Gaming</Heading>
                          <Text size="s" as="p">
                            9 Items
                          </Text>
                        </div>
                        <Img src="images/img_link_prod23_png.png" alt="image" className="w-[30%] object-cover" />
                      </div>
                      <div className="flex justify-between items-start w-full gap-2">
                        <div className="flex flex-col gap-[5px]">
                          <Heading as="p">Xiaomi</Heading>
                          <Text size="s" as="p">
                            52 Items
                          </Text>
                        </div>
                        <Img src="images/img_link_prod24_png.png" alt="image" className="w-[30%] object-cover" />
                      </div>
                      <div className="flex justify-between items-start w-full gap-5">
                        <div className="flex flex-col items-start gap-[5px]">
                          <Heading as="p">Accessories</Heading>
                          <Text size="s" as="p">
                            29 Items
                          </Text>
                        </div>
                        <Img src="images/img_link_prod25_png.png" alt="image" className="w-[37%] object-cover" />
                      </div>
                    </div>
                  </div>
    )
}