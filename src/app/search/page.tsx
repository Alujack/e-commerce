import ProductCard from "@/components/ProductCard"
import product from "@/constants/product"
import { Heading, Text, CheckBox, Button } from "@/components"
export default function Search(){
    return (
    <main>
        <div className = "flex flex-row bg-slate-50 p-[35px]">
            <div className = " w-[20%]  sm:hidden m-[10px] P-[10px]">
                <div className="flex flex-col bg-slate-50 shadow-xl rounded-[5px] items-center w-[100%] h-[500px]  P-[10px] ">
                    <div className="mt-[15px] mb-[15px]  w-[100%]  sm:hidden p-[10px]">
                       <Heading size="4xl" as="h1" className=" leading-[21px]">
                        Filter by price 
                        </Heading>
                       
                    </div>
                     <div className=" mt-[15px] mb-[15px] h-[2px] w-[50%] bg-green-500"></div>
                    <div className="flex flex-col w-full  sm:hidden p-[10px]">
                        <input type="range" className="w-[100%] " />
                        <div className="flex flex-row justify-between">
                            <span>from $500</span>
                            <span> To:$1,000</span>
                        </div>
                        
                    </div>
                    <div className=" w-[100%]  sm:hidden">
                        <div className="flex flex-col justify-between items-center p-[10px]">
                            <Text as="p">Color</Text>
                            <CheckBox
                                name="shape"
                                label="Red(56)"
                                id="shape"
                                className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                            />
                            <CheckBox
                                name="shape"
                                label="Green(78)"
                                id="shape"
                                className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                            />
                            <CheckBox
                                name="shape"
                                label="Blue(54)"
                                id="shape"
                                className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                            />
                        </div>
                        <div className=" w-[100%]  sm:hidden">
                        <div className="flex flex-col justify-between items-center p-[10px]">
                            <Text as="p">Item Conditions</Text>
                            <CheckBox
                                name="shape"
                                label="New(1056)"
                                id="shape"
                                className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                            />
                            <CheckBox
                                name="shape"
                                label="Refurbished(27)"
                                id="shape"
                                className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                            />
                            <CheckBox
                                name="shape"
                                label="Used(45)"
                                id="shape"
                                className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                            />
                        </div>
                        </div>
                        <Button color="green">Filter</Button>
                    </div>
                </div>

            </div>
            <div className ="flex flex-col w-[80%] bg-slate-50 shadow-xl rounded-[5px] h-auto  p-[20px] m-[10px] sm:w-[100%]">
                  <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] grid p-[20px]">
                 {
                  product.map((item)=>(
                    <ProductCard key={item.id} {...item} items={item}  className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  ))
                }

                </div>
            </div>

        </div>
   
    </main>)
}