"use client";
import { useState, useEffect } from "react";
import { Text, Heading, Button, Img } from "@/components";
import { useCart } from "@/context/cartcontext";
import { Product, Category,Variations,Stock,ProductImage } from "@/context/productDetail";
import CartitemsModal from "@/modals/Cart-Items"
import { RatingBar } from "@/components/ratingbar"; // Import RatingBar
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAddress } from "@/context/AddressContext";
import useFetcher from "@/hooks/use-add-product";
import ImageZoom from "./imageZoom";
import axios from 'axios'
import { useRouter } from "next/navigation";
interface props{
 product:Product | null;
 categories:Category[];
 variations:Variations[];
 images:ProductImage[];

}
export default function ProductDetails({
  product,
  categories,
  variations,
  images
   }:props) {

  const [count, setCount] = useState(1);
  const { cartItems, setCartItems } = useCart();
  const [selectedImage, setSelectedImage] = useState("");
  const {data:user} = useRetrieveUserQuery()
  const {address,setAddress, fetchAddress} = useAddress()
  const userid = user?.id ? user?.id : '';
  const [showMore, setShowMore] = useState({});

  const handleImageClick = (imageUrl:string) => {
    setSelectedImage(imageUrl);
  };
  const addToFavourite = async () =>{

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/favourite/create/${userid}?productId=${product?.id}`); 
        console.log("successfully")
        
      } catch (err) {
        console.error(err as Error);
    };

  }
  const handleAddToCart = async () => {
      try {
        const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/create/${user?.id}/?productId=${product?.id}&qty=${1}`)
      }catch(err){
        console.error(err)
      }

  };
  useEffect(()=>{
    fetchAddress(userid)
  },[userid])
  const router = useRouter()

  const checkout = () =>{
    handleAddToCart();
    router.push('/cart/checkout');

  }
  return (
    <>
    <CartitemsModal show={false}/>
      <div className="flex flex-row gap-2">
        <div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-3 mx-auto md:p-5 max-w-[100%]">
            <div className="flex flex-row  items-start gap-[9px] p-3.5 bg-white-A700 rounded-[10px] pt-16">
              <div className="flex flex-row md:self-stretch pb-[2px] sm:pb-5 flex-1 mb-40">
                <div className="flex w-20 flex-col self-stretch gap-5 mt-5 ml-5 rounded ">
                  {images.map((image) => (
                    <img
                      key={image.id}
                      src={`http://localhost:8000/${image.image}/`}
                      alt="product_thumbnail"
                      className="w-full object-cover border border-gray-300 cursor-pointer"
                      onMouseOver={() => handleImageClick(`http://localhost:8000/${image.image}/`)}
                    />
                  ))}
                </div>
               
                <div className="flex flex-col w-full h-full items-center p-4">
                  <div onClick={addToFavourite} className="absolute mt-0 self-end bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        />
                      </svg>
                    </div>
                
                    {/* <img
                      
                      alt="selected_product_image"
                      className="self-center object-cover border border-gray-300 m-0"
                    /> */}
                    <div className="flex justify-center items-center ">
                      <ImageZoom src={selectedImage !== "" ? selectedImage : `http://localhost:8000/${product?.image}`} alt="Product Image" />
                    </div>
                 
                </div>
              </div>

              <div className="overflow-y-scroll h-full flex flex-col items-start w-[33%] md:w-full">
                <div className="flex flex-col self-stretch items-start">
                  <div className="flex flex-col self-stretch">
                    <h1 className="text-xl text-[#565959]">
                      {product?.name} {product?.short_description}
                    </h1>
                  </div>
                  <div className="flex flex-row gap-4 items-center mt-1">
                    <RatingBar
                      value={4.7}
                      starCount={5}
                      color="grey"
                      activeColor="gold"
                      size={24}
                      isEditable={false}
                    />
                    <p className="text-sm text-blue-500 ml-2 cursor-pointer">716 ratings</p> 
                    <span className="text-sm text-blue-500 ml-2 cursor-pointer">|</span>
                    <p className="text-sm text-blue-500 ml-2 cursor-pointer">Search this page</p>
                  </div>
                </div>

                <div className="flex items-center mt-2">
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">-23%</span>
                  <Heading size="6xl" as="h2" className="ml-3 text-black">
                    $ {product?.price}
                  </Heading>
                </div>

                <div className="text-sm text-gray-600 mt-1">
                  List Price: <span className="line-through">$1,099.00</span>
                </div>
                <div className="w-full border-gray-400 border-b border-solid mt-5"/>
                <div className="flex flex-col items-start mt-5">
                  <span className="text-xs text-blue-500 cursor-pointer">FREE Returns</span>
                  <div className="h-[28px] w-[29%] opacity-0.05 bg-green-700_5e rounded-md" />
                  <p
                    className="text-green-700 uppercase bg-gray-300_12 rounded-sm py-3 px-5"
                  >
                    Free Shipping
                  </p>
                </div>

                <div className="border-gray-400 border-b border-solid mt-5"/>

                <div className="flex items-center mt-9 gap-[7px]">
                  <img
                    src="/images/icons/check.png"
                    alt="checkmark_one"
                    className="self-end h-[12px] w-[12px]"
                  />
                  <p className="self-end !text-black-900_02">
                    In stock
                  </p>
                </div>



               <div className="mt-9 overflow-x-auto">
                  <table className="min-w-full text-left border-collapse">
                    <thead>
                      <tr>
                        {variations.map((variation) => (
                          <th key={variation.attribute_type} className="px-4 py-2 border-b">
                            {variation.attribute_type}
                          </th>
                        ))}
                        <th className="px-4 py-2 border-b">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Create rows for options */}
                      {variations[0]?.options.map((_, rowIndex) => (
                        <tr key={rowIndex}>
                          {variations.map((variation) => (
                            <td key={variation.attribute_type} className="px-4 py-2 border-b">
                              {variation.options[rowIndex]?.option || '-'}
                            </td>
                          ))}
                          <td className="px-4 py-2 border-b ">
                            {variations
                              .map((variation) => variation.options[rowIndex]?.stock.quantity || 0)
                              .reduce((total, qty) => total + qty, 0)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>



                <div className="flex flex-col self-stretch items-start mt-3">
                  <div className="flex flex-col items-start mt-[19px]">
                    <div className="flex gap-[7px] flex-wrap">
                      <Heading as="h5" className="uppercase my-2">
                        SKU:{" "}
                      </Heading>
                      <Text as="p" className="my-2">
                        ABC025168
                      </Text>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <Heading as="h6" className="uppercase">
                        Category:{" "}
                      </Heading>
                      {categories.map((category)=>(<p>{category.category_name}</p>))}
                    </div>
                    <div className="flex items-center gap-[7px] flex-wrap">
                      <Heading as="p" className=" uppercase my-2">
                        Tags:{" "}
                      </Heading>
                      <Text as="p" className="self-end my-2">
                        Laptop, Macbook, Computer, M1
                      </Text>
                    </div>
                    <div className="flex items-center gap-[7px] flex-wrap">
                      <h1 className="  my-2 text-xl text-black-900_01 font-bold font-inter">
                       About this item
                      </h1>
                      <p className=" mb-4 md:ml-0 text-md">
                         {product?.short_description}
                      </p>
                    </div>        
                  </div>

                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/facebook.png"
                        alt="checkmark_one"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* Twiter */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/twiter.png"
                        alt="twiter"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* Instagram */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/instargram.jpg"
                        alt="instagram"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* YouTube */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/youtube.png"
                        alt="youtube"
                        className="h-6 w-6 text-black"
                      />
                    </div>

                    {/* Dribbble */}
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Img
                        src="/images/icons/Dribbble.jpg"
                        alt="dribble"
                        className="h-6 w-6 text-black"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center p-4 mb-36"> 
               {/* <!-- Cart Section --> */}
                <div className="bg-white-A700 border-2 border-gray-200 rounded-lg px-4 self-start py-4">
                  <div className="flex flex-col justify-between items-start gap-3">
                    <div className="text-2xl font-semibold text-gray-900">$  {product?.price}</div>
                    <span className="text-xs text-blue-500 cursor-pointer">FREE Returns</span>
                  </div>
                  <div className="flex flex-col justify-between items-start gap-4 mt-2">
                    <span className="text-xs  cursor-pointer"> FREE delivery Tuesday, August 27. Order within 12 hrs 31 mins </span>
                    <span className="text-xs  cursor-pointer"> Or fastest delivery Sunday, August 25 </span>
                    <span className="text-xs  cursor-pointer"> Deliver to {user?.first_name} - {address.country} -{ address?.phone_number} </span>
                  </div>
                  <div className="text-green-600 font-semibold mt-2">In Stock</div>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-gray-700">Quantity:</span>
                    <select className="ml-2 w-full border border-gray-300 rounded p-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <button onClick={handleAddToCart} className="bg-yellow-500 text-white w-full py-2 mt-3 rounded-md hover:bg-yellow-600">
                    Add to Cart
                  </button>
                  <button onClick={checkout} className="bg-orange-500 text-white w-full py-2 mt-3 rounded-md hover:bg-orange-600">
                    Buy Now
                  </button>
                  <div className="px-3">
                      <div className="text-xs  py-2">Ships from TechNess.com</div>
                      <div className="text-xs  py-2">Sold by TechNess.com</div>
                      <div className="text-xs  py-2">Returns: 15-day refund/replacement</div>
                      <div className="text-xs  py-2">Customer service: TechNess.com</div>
                      <div className="text-xs  py-2">Payment: Secure transaction</div>
                      <div className="text-xs  py-2">Support: Product Support / Include</div>

                      <div className="mt-4 flex flex-col gap-3">
                        <label className="text-sm ">Add a Protection Plan:</label>
                        <div className="flex items-center mt-1">
                          <input type="checkbox" className="mr-2"/>
                          <span className="text-sm ">AppleCare+ for Mac for <span className="text-red-500">$169.00</span></span>
                        </div>
                        <div className="text-xs  line-through">List Price: $199.00</div>
                        <div className="text-xs ">Save $30.00 (15%)</div>
                      </div>
                      <button className="mt-3 border border-gray-300 text-gray-700 text-sm w-full py-2 rounded-md hover:bg-gray-200">
                        Add to List
                      </button>
                  </div>
                </div>


                {/* <!-- Shipping Section --> */}
                <div className="flex items-center mt-4 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18M3 10h18m-2 10H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p>
                    Ships from{" "}
                    <span className="font-semibold">United States</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex flex-col w-full gap-3 mx-auto md:p-5 max-w-[95%]">
            <div className="flex md:flex-col items-end gap-[9px] p-3.5 bg-white-A700 rounded-[10px] shadow-lg">
              <div className="bg-white p-6 rounded-lg ">
                {/* <!-- Tabs Section --> */}
                <div className="flex justify-center border-b border-gray-200 mb-4">
                  <a
                    href="#description"
                    className="px-4 py-2 text-sm font-medium text-gray-700 border-b-2 border-orange-500"
                  >
                    DESCRIPTION
                  </a>
                  <a
                    href="#additional-information"
                    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    ADDITIONAL INFORMATION
                  </a>
                  <a
                    href="#specification"
                    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    SPECIFICATION
                  </a>
                  <a
                    href="#review"
                    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    REVIEW
                  </a>
                </div>

                {/* <!-- Content Section --> */}
                <div className="flex">
                  {/* <!-- Description --> */}
                  <div className="w-2/3 pr-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Description
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {product?.description}
                    </p>
                  </div>

                  {/* <!-- Feature List --> */}
                  <div className=" w-1/3 border-l border-gray-200 pl-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Feature
                    </h2>
                    <ul className="text-gray-600 text-sm space-y-3">
                      <li className="flex items-center">
                        <img
                          src="/images/icons/warranty.png"
                          alt="Warranty Icon"
                          className="w- 8 h-8 mr-2"
                        />
                        Free 1 Year Warranty
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/shipping.png"
                          alt="Shipping Icon"
                          className="w-8 h-8 mr-2"
                        />
                        Free Shipping & Fast Delivery
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/money_back.jpg"
                          alt="Money Back Icon"
                          className="w-8 h-8 mr-2"
                        />
                        100% Money-back guarantee
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/support.png"
                          alt="Support Icon"
                          className="w-8 h-8 mr-2"
                        />
                        24/7 Customer support
                      </li>
                      <li className="flex items-center">
                        <img
                          src="/images/icons/secure_payment.jpg"
                          alt="Secure Payment Icon"
                          className="w-8 h-8 mr-2"
                        />
                        Secure payment method
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
