"use client";

import { Button, Img, Heading, Text } from "./";
import Link from "next/link";
import { producttype } from "@/common.type";
import AddToCartButton from "./addtocartbutton";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/navigation";
import { RatingBar } from "./ratingbar"; // Import RatingBar

interface Props {
  items: producttype;
  className?: string;
}

export default function ProductCard({ items, ...props }: Props) {
  const router = useRouter();
  const { cartItems, setCartItems } = useCart();

  const handleAddToCart = () => {
    setCartItems([...cartItems, items]);
    router.push("/cart/checkout");
  };

  return (
    <div {...props}>
      {/* <Link href={`/product/${items.id}`}>
        <div className="h-[232px] w-[232px]">
          <Img src={items.src} alt="image_one" className="rounded hover:border-2 border-gray-700" />
        </div>
      </Link>
      <div className="flex flex-col self-stretch items-start pb-3 gap-[13px]">
        <Link href={`/product/${items.id}`}>
          <div className="flex flex-col items-start">
            <Text as="p" className="!text-blue_gray-500 !font-manrope">
              {items.subtitle}
            </Text>
            <Heading as="h1" className="!text-gray-900_07">
              {items.title}
            </Heading>
          </div>
          
        </Link>
        <RatingBar
          value={4} // Assuming `items` has a `rating` field
          starCount={5}
          color="grey"
          activeColor="gold"
          size={24}
          isEditable={false} // Set to false if you don't want users to edit the rating
        />
        <h2  className="text-xl font-bold text-black-900_01">
            $ {items.price}
        </h2>

        <div className="flex gap-3">
          <AddToCartButton item={items} />
          <Button
            color="gray_900_04"
            shape="round"
            rightIcon={<Img src="/images/img_arrowright.svg" alt="arrow_right" />}
            className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] !rounded"
            onClick={handleAddToCart}
          >
            Buy Now
          </Button>
        </div>
      </div> */}
      <div className="w-[292px] mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="relative">
              <img
                src="/images/productlist/shoes.jpg"
                alt="TDX Sinkers"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none">
                <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              
                <h3 className="text-lg font-semibold">TDX Sinkers</h3>
                
             

              <p className="text-sm text-gray-600 mt-1">
                5 types of shoes available
              </p>

              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex items-center space-x-1">
                <RatingBar
                    value={4} // Assuming `items` has a `rating` field
                    starCount={5}
                    color="grey"
                    activeColor="gold"
                    size={24}
                    isEditable={false} // Set to false if you don't want users to edit the rating
                  />
                 
                </div>
                
                <span className="ml-2 text-sm text-gray-500 mt-2">(121)</span>
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2">$675.00</p>
              <div className="flex mt-4 space-x-2">
                <button className="flex-1 bg-green-500 text-white text-sm py-2 rounded-full hover:bg-green-600">
                  Add To Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                  Add Shortlist
                </button>
              </div>
            </div>
          </div>
    </div>
  );
}
