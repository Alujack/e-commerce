"use client"
import { Text, Heading, Button, Img, Input } from "@/components";
import Ordercart from "@/components/ordercart";
import Totalsummery from "@/components/totalsummery";
import {useRouter} from "next/navigation";
import { useCart } from "@/context/cartcontext";
import { producttype } from "@/common.type";
export default function AddCart() {

 const { cartItems} = useCart();
 const router = useRouter();
 const totalsumery = (<>
  <Button
        color="green_700"
        size="9xl"
        className="mt-[15px] mb-[12px] sm:pl-5 uppercase font-medium min-w-[124px] rounded-[10px]"
        onClick ={()=>{
          router.push(`/cart/checkout`)
        }}
      >
        checkout
      </Button>
 </>)
 
  return (
    <main>
      <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col  gap-[11px] mx-auto md:p-5 ">
            <h1 className="sm:px-5 font-bold rounded-[10px]">Checking your product cart</h1>
  
            <div className={cartItems.length != 0? "flex md:flex-col items-start gap-2.5 p-[7px] bg-white-A700 rounded-[10px]":"hidden"}>
              <div className=" scrollable-div flex flex-col flex-start md:self-stretch gap-[15px] flex-1">

              {cartItems.map((item:producttype, index:number) => (
                    <Ordercart key={index} save={100}  src ={item.src} price={item.price} item={item} index={index} className="flex md:flex-col items-start gap-5 p-4 bg-gray-50 flex-1 rounded-[10px]" />
                ))}
              </div>
             
              <Totalsummery  className={ cartItems.length != 0? `flex flex-col items-center w-[32%] md:w-full p-[30px] my-10 sm:p-5 border-green-700 border border-solid rounded-[10px]`: `hidden`} Children={totalsumery}  />
              
              
            </div>
            <div className="flex md:flex-col justify-evenly items-start gap-16 bg-blue_gray-900_02 rounded-[20px]">
              <div className="flex flex-col items-start mt-[29px] px-[11px] md:p-5 md:mt-0">
                <Text size="5xl" as="p" className="ml-[3px] md:ml-0 !text-teal-A200 uppercase">
                  Pre Order
                </Text>
                <Text size="xs" as="p" className="mt-1 ml-[3px] md:ml-0 !text-gray-500 uppercase">
                  be the first to own
                </Text>
                <Text as="p" className="mt-[11px] ml-[3px] md:ml-0 !text-white-A700">
                  From $399
                </Text>
              </div>
              <div className="flex md:flex-col justify-center items-center w-[60%] md:w-full gap-0.5 md:p-5">
                <div className="md:self-stretch h-[140px] md:w-full flex-1 relative md:flex-none">
                  <div className="h-[140px] w-[93%] right-[0.21px] bottom-0 top-0 my-auto bg-gradient3 absolute rounded-[70px]" />
                  <Img
                    src="/images/img_banner_png.png"
                    alt="bannerpng_one"
                    className="h-[125px] w-[72%] bottom-[0.00px] left-[0.00px] m-auto object-cover absolute"
                  />
                </div>
                <div className="flex flex-col items-start w-[44%] md:w-full gap-[13px] px-2">
                  <Text size="s" as="p" className="w-[37%] md:w-full ml-1.5 md:ml-0 !text-teal-A200 leading-[18px]">
                    <>
                      Opplo Watch Sport
                      <br />
                      Series 8
                    </>
                  </Text>
                  <Text size="6xl" as="p" className="ml-1.5 md:ml-0 !text-white-A700">
                    A healthy leap ahead
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-2">
              <Img
                src="/images/img_about2_png.png"
                alt="about2png_one"
                className="w-[51%] md:w-full object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-center w-[49%] md:w-full gap-10 p-[38px] sm:p-5 bg-gray-300_07 rounded-[10px]">
                <div className="flex flex-col self-end w-[89%] md:w-full mt-[31px] gap-[29px]">
                  <Heading size="3xl" as="h1" className="leading-[21px]">
                    <>
                      We connect millions of buyers and sellers around
                      <br />
                      the world, empowering people & creating economic
                      <br />
                      opportunity for all.
                    </>
                  </Heading>
                  <Text as="p" className="leading-[23px]">
                    <>
                      Within our markets, millions of people around the world connect,
                      <br />
                      both online and offline, to make, sell and buy unique goods. We also
                      <br />
                      offer a wide range of Seller Services and tools that help creative
                      <br />
                      entrepreneurs start, manage & scale their businesses.
                    </>
                  </Text>
                </div>
                <Button
                  color="green_700"
                  size="9xl"
                  className="mb-8 ml-[58px] md:ml-0 sm:px-5 uppercase font-black min-w-[174px] rounded-[10px]"
                >
                 Our service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
