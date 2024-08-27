"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PaymentOption from "./components/PaymentOptions"
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAddress } from "@/context/AddressContext";
import {useCart} from "@/context/cartcontext";
import AddressForm from "./components/addressFrom"
import { useAppSelector } from "@/redux/hooks";
import AuthModal from "@/components/auth/authModal";
import Link from "next/link";
 export default function Checkout() {
   const {data:user} = useRetrieveUserQuery();
   const { isAuthenticated } = useAppSelector(state => state.auth);
   const { address, fetchAddress } = useAddress();
   const id = user?.id ? user.id : '';
   const {cartItems, FetchCartItem} = useCart();
   const router = useRouter();
   const [selectedOption, setSelectedOption] = useState<string | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOptionClick = (option: string) => {
      setSelectedOption(option);
    };


   useEffect(() => {
      fetchAddress(id);
    }, []);
  let totals = [...cartItems.map((item)=>item.cart_item.qty*item.products.price)];
  let total = 0;
  for(let i = 0;i < totals.length ;i++){
    total +=totals[i];
  }

  useEffect(()=>{
    FetchCartItem(id)
  },[])

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
    }
  };
    
  return (
    <>
    <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
      <div className="flex flec-row justify-between items-center w-full px-14 py-10">
        <div className="w-full h-full self-baseline p-7 sm:p-5  rounded-[10px]">
          <div>
            <h1 className="block text-3xl font-bold mb-2">Checkout</h1>
            <div className="flex flex-row  gap-3 bg-orange-200 rounded-md">
              <p className="ml-5 py-2">Already have account? </p>
              <span className="py-2 text-blue-700">
                <a href="/auth-user/login ">login</a>
              </span>
              <p className="py-2">for faster checkout</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="block text-xl font-bold mb-2 py-2">
              Express Checkout
            </h2>
            <div className="flex flex-row gap-2">
              <div className="text-orange-400 pag-3 flex fles-row ">
                <img
                  src="/images/checkout_image/1_paypal.png"
                  alt="pay with apple"
                  className="w-[60px] h-[30px] rounded-md"
                />
              </div>
              <div className="text-orange-400 pag-3 flex fles-row ">
                <img
                  src="/images/checkout_image/2_pay.png"
                  alt="pay with apple"
                  className="w-[60px] h-[30px] rounded-md"
                />
              </div>
              <div className="text-orange-400 pag-3 flex fles-row ">
                <img
                  src="/images/checkout_image/3_ABA.jpg"
                  alt="pay with apple"
                  className="w-[60px] h-[30px] rounded-md"
                />
              </div>
              <div className="text-orange-400 pag-3 flex fles-row ">
                <img
                  src="/images/checkout_image/4_ACLEDA.jpg"
                  alt="pay with apple"
                  className="w-[60px] h-[30px] rounded-md"
                />
              </div>
            </div>
          </div>
          <p className="text-black text-lg text-center  hover:text-indigo-800 hover:underline">
            OR
          </p>
        
         
          {/* Section2 */}

         <AddressForm  address={address} />



          {/* Section3 */}
           <div className="w-full sm:p-5 rounded-[10px]">
              <div className="flex gap-3 justify-between pt-7">
                <h2 className="flex justify-between text-lg hover:underline text-black">
                  Delivery options
                </h2>
                <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
                  edit details
                </p>
              </div>
              <div className="flex justify-between gap-3 space-x-[25px] mt-3 mb-3">
                <button
                  onClick={() => handleOptionClick("inStorePickup")}
                  className={`border rounded-[10px] w-full px-3 ${
                    selectedOption === "inStorePickup"
                      ? "border-blue-700 bg-blue-600 text-white-A700"
                      : "border-neutral-400 bg-slate-200 text-black"
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className="text-lg px-2 py-3">
                      In-store pickup
                    </h3>
                    {selectedOption === "inStorePickup" && (
                      <svg
                        className="w-6 h-6 text-white my-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm px-2 pb-3">
                    Takes 3-5 business days
                  </p>
                </button>
                <button
                  onClick={() => handleOptionClick("storeLocationPickup")}
                  className={`border rounded-[10px] w-full px-3 ${
                    selectedOption === "storeLocationPickup"
                      ? "border-blue-700 bg-blue-600 text-white-A700"
                      : "border-neutral-400 bg-slate-200 text-black"
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className="text-lg px-2 py-3">
                      Pick from store location
                    </h3>
                    {selectedOption === "storeLocationPickup" && (
                      <svg
                        className="w-6 h-6 text-white-A700 my-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm px-2 pb-3">
                    Pick from store location
                  </p>
                </button>
              </div>
              <div
                onClick={() => handleOptionClick("locateNearbyStore")}
                className={`border rounded-[10px] w-full px-3 cursor-pointer ${
                  selectedOption === "locateNearbyStore"
                    ? "border-blue-700 bg-blue-600 text-white-A700"
                    : "border-neutral-400 bg-slate-200 text-black"
                }`}
              >
                <div className="flex justify-between">
                  <h3 className="text-lg px-2 py-3">
                    Locate nearby store
                  </h3>
                  {selectedOption === "locateNearbyStore" && (
                    <svg
                      className="w-6 h-6 text-white my-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2C8.13 2 5 5.13 5 9c0 4.88 6.5 12.75 6.93 13.32.3.4.84.4 1.14 0C12.5 21.75 19 13.88 19 9c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
        </div>

        {/* ==============One more section=============== */}


        <div className="overflow-y-scroll cursor-pointer self-baseline w-full p-7 sm:p-5  rounded-[10px]">
          <div className="mb-60">
          <div>
            <div className=" flex  gap-3 justify-between">
              <h2 className="flex  justify-between text-lg hover:underline">
                Order Summary({cartItems.length})
              </h2>
              <button onClick={()=>router.push('/cart')} className="text-cyan-500 hover:text-indigo-800 hover:underline">
                Edit Cart
              </button>
            </div>
          </div>
            {cartItems.map((item)=>(
              <div className="flex flex-col items-start p-4 border-b border-gray-400">
                <div className="flex flex-row justify-between w-full">
                  <div className="flex  flex-row gap-10">
                    <div className="w-20">
                      <Link href={`/product/${item.products.id}`}>
                        <img
                          src={`http://localhost:8000/${item.products.image}`}
                          alt=""
                          className="object-cover"
                        />
                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm pt-6">
                        {item.products.name}
                    </p>       
                  </div>
                  <div className="self-end">
                      <p className="text-lg font-semibold text-gray-900">${item.products.price}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 pt-5">
                        Qty: {item.cart_item.qty}
                </p>
            </div>
            ))}

          {/* section2 */}
          <div className="my-3">
            <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
              + Enter a promo code
            </p>
            <div className="w-full max-w-sm mx-auto">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 text-sm">Subtotal</p>
                  <p className="text-gray-900 text-sm">${total}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-700 text-sm">Shipping</p>
                  <p className="text-gray-900 text-sm">$2.00</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-700 text-sm">Tax</p>
                  <p className="text-gray-900 text-sm">$1.00</p>
                </div>

                <div className="flex justify-between items-center font-semibold">
                  <p className="text-gray-900 text-sm">Total</p>
                  <p className="text-gray-900 text-sm">${total + 3.00}</p>
                </div>
              </div>
            </div>
          </div>


          {/* ====Payment Option===== */}
          <PaymentOption/>

          <div>
            {/* Review & place order */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Review & Place Order
              </h2>
              <p className="text-sm text-gray-600">
                Please review the order details and payment details before
                proceeding to confirm your order
              </p>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label className="ml-3 text-sm text-gray-700 flex ">
                  I agree to the
                  <a href="#" className="text-purple-600 hover:underline">
                    Terms & conditions
                  </a>
                  ,
                  <a href="#" className="text-purple-600 hover:underline">
                    Privacy policy
                  </a>{" "}
                  &
                  <a href="#" className="text-purple-600 hover:underline">
                    Return policy
                  </a>
                </label>
              </div>


              <div className="flex items-start">
                <input
                  id="email-list"
                  name="email-list"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label className="ml-3 text-sm text-gray-700">
                  Sign me up to the email list
                </label>
              </div>

              <div className="border  border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 items-center rounded-md  my-[8px] bg-black-900_01">
                <button
                  onClick={handleButtonClick}
                  className="w-full font-sm text-gray-300 hover:underline text-center"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
