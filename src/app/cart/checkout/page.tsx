 export default function Checkout() {
  return (
    <>
      <div className="flex flec-row justify-between items-center px-14 py-10">
        <div className="w-full p-7 sm:p-5  rounded-[10px]">
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
          {/* Section1 */}
          <form>
            <div className="mb-4 flex flex-col gap-3 my-[20px]">
              <div className=" flex  gap-3 justify-between">
                <h2 className="flex  justify-between text-lg hover:underline">
                  Customer information
                </h2>
                <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
                  Edit
                </p>
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full    sm:text-sm"
                  placeholder="email for order confirmation"
                  type="text"
                  name="search"
                />
              </div>
              <div className=" flex  gap-3 justify-between">
                <h2 className="flex  justify-between text-lg hover:underline text-black">
                  Billing address
                </h2>
                <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
                  edit details
                </p>
              </div>
              <div className="flex space-x-[25px] justify-between">
                <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                  <input
                    type="text"
                    placeholder="first name"
                    className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  />
                </div>
                <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                  <input
                    type="text"
                    placeholder="last name"
                    className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  />

                </div>
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  my-[8px]">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                  placeholder="address line - 1"
                  type="text"
                  name="search"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  my-[8px]">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                  placeholder="address line - 2"
                  type="text"
                  name="search"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  my-[8px]">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                  placeholder="City"
                  type="text"
                  name="search"
                />
              </div>
              <div className="flex space-x-[25px] justify-between">
                <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                  <input
                    type="number"
                    placeholder="Country"
                    className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  />
                </div>
                <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                  <input
                    type="number"
                    placeholder="State"
                    className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  />
                </div>
              </div>

              <div className="flex space-x-[25px] justify-between">
                <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                  <input
                    type="text"
                    placeholder="Zip"
                    className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  />
                </div>
                <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Section2 */}


          <div className="w-full  sm:p-5  rounded-[10px] ">
            <div className=" flex  gap-3 justify-between pt-7">
              <h2 className="flex  justify-between text-lg hover:underline ">
                Shipping address
              </h2>
              <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
                Edit Detail
              </p>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="ml-2 p-1">Same as billing address</span>
              </label>
            </div>
            <div className="flex space-x-[25px] justify-between">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="first name"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="last name"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
            </div>
            <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md my-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="address line - 1"
                type="text"
                name="search"
              />
            </div>
            <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                placeholder="address line - 2"
                type="text"
                name="search"
              />
            </div>
            <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                placeholder="City"
                type="text"
                name="search"
              />
            </div>
            <div className="flex space-x-[25px] justify-between mt-[13px]">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="number"
                  placeholder="Country"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="number"
                  placeholder="State"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-[25px] justify-between mt-[13px]">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Zip"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
            </div>
          </div>


          {/* Section3 */}
          <div className="w-full  sm:p-5  rounded-[10px]">
            <div className=" flex  gap-3 justify-between pt-7">
              <h2 className="flex  justify-between text-lg hover:underline text-black">
                Delivery options
              </h2>
              <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
                edit details
              </p>
            </div>
            <div className="flex justify-between gap-3  space-x-[25px] mt-3 mb-3">
              <div className="border-neutral-400 border bg-slate-200 rounded-[10px] w-full">
                <h3 className="text-black-900_01 text-lg px-2 py-3 ">
                  {" "}
                  In-store pickup
                </h3>
                <p className="text-black-900_01 text-sm px-2 pb-3 ">
                  Takes 3-5 business days
                </p>
              </div>
              <div className=" border border-blue-700 rounded-[10px] w-full px-3">
                <div className=" flex  justify-between">
                  <h3 className="text-black-900_01 text-lg px-2 py-3 ">
                    {" "}
                    In-store pickup
                  </h3>

                  <svg
                    className="w-6 h-6 text-indigo-600 my-3 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-black-900_01 text-sm px-2 pb-3 ">
                  Pick from store location
                </p>
              </div>
            </div>
            <div className=" border border-blue-700 rounded-[10px] w-full px-3">
              <div className=" flex  justify-between">
                <h3 className="text-black-900_01 text-lg px-2 py-3 ">
                  {" "}
                  Locate nearby store
                </h3>

                <svg
                  className="w-6 h-6 text-indigo-600 my-3 hover:text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C8.13 2 5 5.13 5 9c0 4.88 6.5 12.75 6.93 13.32.3.4.84.4 1.14 0C12.5 21.75 19 13.88 19 9c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>


        {/* ==============One more section=============== */}
        <div className="w-full p-7 sm:p-5  rounded-[10px]">
          <div className="mb-60">
          <div>
            <div className=" flex  gap-3 justify-between">
              <h2 className="flex  justify-between text-lg hover:underline">
                Order Summary(1)
              </h2>
              <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
                Edit Cart
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-b border-gray-400">
            <div className="flex items-center space-x-4">
              <img
                src="/images/checkout_image/5_phone.jpg"
                alt=""
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-gray-700 text-sm pt-6">
                  Plastic useless plugs and tubes for high-fidelity prototyping.
                  Fit & Eat!
                </p>
                <p className="text-sm text-gray-600 pt-16 text-center">
                  Qty: 1
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">$12.00</p>
            </div>
          </div>
          {/* section2 */}
          <div className="my-3">
            <p className="text-cyan-500 hover:text-indigo-800 hover:underline">
              + Enter a promo code
            </p>
            <div className="w-full max-w-sm mx-auto">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 text-sm">Subtotal</p>
                  <p className="text-gray-900 text-sm">$12.00</p>
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
                  <p className="text-gray-900 text-sm">$15.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* ====Payment Option===== */}
          <div className="my-3">
            <h2 className="flex  justify-between text-lg hover:underline">
              Payment option
            </h2>
            <form className="space-y-4">
              <div className="flex items-center">
                <input
                  id="cod"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Cash On Delivery
                </label>
              </div>
              <p className="ml-7 text-sm text-gray-500">
                Pay with cash upon delivery.
              </p>

              <div className="flex items-center">
                <input
                  id="bank-transfer"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  checked
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Direct bank transfer
                </label>
              </div>
              <p className="ml-7 text-sm text-gray-500">
                Make payment directly through bank account.
              </p>


              <div className="space-y-2 ml-7">
                <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
                  <input
                    className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                    placeholder="Account holder name"
                    type="text"
                    name="search"
                  />
                </div>
                <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
                  <input
                    className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                    placeholder="Account number"
                    type="text"
                    name="search"
                  />
                </div>
                <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
                  <input
                    className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                    placeholder="Bank name"
                    type="text"
                    name="search"
                  />
                </div>
                <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
                  <input
                    className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                    placeholder="Routing number"
                    type="text"
                    name="search"
                  />
                </div>
                <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
                  <input
                    className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                    placeholder="IBAN(international)"
                    type="text"
                    name="search"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="credit-card"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Credit/Debit card
                </label>
              </div>
              <p className="ml-7 text-sm text-gray-500">
                Pay with your Visa, Mastercard.
              </p>
            </form>
          </div>

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

              <div className="border  border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  my-[8px] bg-black-900_01">
                <a
                  href="#"
                  className="font-sm text-gray-300 hover:underline text-center"
                >
                  Place Order
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
