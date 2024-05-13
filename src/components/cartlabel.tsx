import {Heading, Img, Button,Text} from "./"
import {formatNumber} from "@/util/format";
import {useRouter} from "next/navigation";
import {cart } from "@/components/constant";
interface Props {
  className?: string;
  subtitle?: string;
  title?: string;
  price?: number;
  src?:string;
  proid?:number;
  qty:number;
}
export default function Cartlabel({
subtitle,
title,
price = 0,
src,
proid,
qty = 1,
...props

}:Props){
    let subtotal = qty*price;
    const router = useRouter();
    return (
        <div className="flex flex-col self-stretch items-start justify-center p-[21px] sm:p-5 border-green-700 border border-solid rounded-[10px]">
                    <Heading size="xl" as="h6" className="mt-0.5 !font-bold">
                      Your Cart
                    </Heading>
                    <div className="flex flex-col self-stretch items-end mt-[21px]">
                      <Heading
                        size="s"
                        as="p"
                        className="w-[59%] md:w-full mr-3 md:mr-0 !font-bold z-[1] leading-[18px]"
                      >
                        <>
                          {title}
                        </>
                      </Heading>
                      <div className="flex self-stretch mt-[-36px] pb-4 relative border-gray-300_04 border-b border-solid">
                        <div className="flex items-center w-[68%] md:w-full gap-[19px]">
                          <Img src={src} alt={title} className="w-[70px] object-cover" />
                          <Text size="s" as="p" className="self-end mb-2.5">
                            {formatNumber(qty)} x $ {formatNumber(price)}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex self-stretch justify-between items-center gap-5 border-gray-300_04 border-b border-solid flex-wrap">
                      <Text as="p" className="my-[15px]">
                        Sub Total:
                      </Text>
                      <Heading as="p">${formatNumber(subtotal)}</Heading>
                    </div>
                    <div className="flex self-stretch justify-between mt-4 gap-5">
                      <Button
                        color="gray_900_01"
                        size="9xl"
                        className="uppercase font-medium min-w-[96px] rounded-[10px]"
                        onClick={() => router.push('/cart')}
                      >
                        view cart
                      </Button>
                      <Button
                        color="green_700"
                        size="9xl"
                        className="uppercase font-medium min-w-[96px] rounded-[10px]"
                        onClick={()=>router.push(`/cart/checkout/${cart[0]}`)}
                      >
                        checkout
                      </Button>
                    </div>
                  </div>
    )
}