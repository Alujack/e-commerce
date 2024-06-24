"use client"
import { Button, Img, Heading, Text } from "@/components";
import Link from "next/link";
import {producttype} from "@/common.type"
import {useCart} from "@/context/cartcontext"
import { useRouter } from "next/navigation";
interface Props {
  items:producttype;
  className?: string;
  
}

export default function ProductCard({items,...props
}: Props) {
  const router = useRouter();
  const {cartItems,setCartItems } = useCart();

  const handleAddToCart = () => {
    setCartItems([...cartItems,items]);
    router.push("/cart/checkout");

  }
  return (
    <div {...props}>
      <Link href ={`/product/${items.id}`}>
      <Img src={items.src} alt="image_one" className="h-[232px] object-cover rounded" /> 
      </Link>
      <div className="flex flex-col self-stretch items-start pb-3 gap-[13px]">
        <Link href ={`/product/${items.id}`}>
        <div className="flex flex-col items-start">
          <Text as="p" className="!text-blue_gray-500 !font-manrope">
            {items.subtitle}
          </Text>
          <Heading as="h1" className="!text-gray-900_07">
            {items.title}
          </Heading>
        </div>
        <Heading size="7xl" as="h2" className="!text-gray-900_07">
          {items.price}
        </Heading>
       </Link>
        <div className="flex gap-3">     
          <Button
            color="gray_900_04"
            shape="round"
            rightIcon={<Img src="/images/img_arrowright.svg" alt="arrow_right" />}
            className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] !rounded"
            onClick={handleAddToCart}
          >
            Edit
          </Button>     
          <Button
            color="gray_900_04"
            shape="round"
            rightIcon={<Img src="/images/img_arrowright.svg" alt="arrow_right" />}
            className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] !rounded"
            onClick={handleAddToCart}
          >
            Publish
          </Button>    
        </div>
      </div>
    </div>
    
  );
}
