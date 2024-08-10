"use client"

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useFetchStore } from "@/hooks/useFetchStore";
export default function App() {
    const { data: userData } = useRetrieveUserQuery();
const {
    store,
    isDisabled,
    setIsDisabled,
    handleInputChange,
    handleAddressChange,
  } = useFetchStore();
return (
  <>
    <div className="mt-[30px] flex items-start justify-between gap-5 self-stretch md:flex-col">
      <div className="flex w-[13%] items-center justify-center md:w-full">
        <img
          src={userData?.image}
          alt="pexels christin"
          className="h-[130px] w-[130px] rounded-full"
        />
        <button className="relative mb-4 ml-[-28px] w-[40px] self-center rounded-[15px]">
          <img src="/images/img_group_194.svg" className="w-full h-full p-2" />
        </button>
      </div>
      <div className="flex w-[82%] justify-center gap-[29px] pb-[23px] md:w-full md:flex-col sm:pb-5">
        <div className="flex w-full flex-col gap-[21px]">
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-black">
              <span>Your Name</span>
            </div>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
              <input
                disabled ={true}
                type="text"
                name="sellername"
                value={userData?.first_name + " " + userData?.last_name}
                placeholder="Your Store Name"
                onChange={handleInputChange}
                className="w-full border-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-black">
              <span>Email</span>
            </div>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
              <input
                disabled={true}
                type="email"
                name="email"
                value={userData?.email}
                placeholder="example@domain.com"
                onChange={handleInputChange}
                className="w-full border-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-black">
              <span>Date of Birth</span>
            </div>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
              <input
                disabled={isDisabled}
                type="text"
                name="dob"
                value={"date"}
                placeholder="MM/DD/YYYY"
                onChange={handleInputChange}
                className="w-full border-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-black">
              <span>Permanent Address</span>
            </div>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
              <input
                disabled={isDisabled}
                type="text"
                name="house_number"
                value={store.address.house_number}
                placeholder="House Number"
                onChange={handleAddressChange}
                className="w-full border-none"
              />
              <input
                disabled={isDisabled}
                type="text"
                name="street_number"
                value={store.address.street_number}
                placeholder="Street Number"
                onChange={handleAddressChange}
                className="w-full border-none mt-2"
              />
              <input
                disabled={isDisabled}
                type="text"
                name="village"
                value={store.address.village}
                placeholder="Village"
                onChange={handleAddressChange}
                className="w-full border-none mt-2"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-black">
              <span>Postal Code</span>
            </div>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
              <input
                disabled={isDisabled}
                type="text"
                name="postal_code"
                value={store.address.postal_code}
                placeholder="Postal Code"
                onChange={handleAddressChange}
                className="w-full border-none"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[22px]">
          <div className="flex flex-col gap-[21px]">
            <div className="flex flex-col items-start gap-2.5">
              <div className="text-black">
                <span>Store Name</span>
              </div>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  disabled={isDisabled}
                  type="text"
                  name="store_name"
                  value={store.name}
                  placeholder="Store Name"
                  onChange={handleInputChange}
                  className="w-full border-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <div className="text-black">
                <span>Present Address</span>
              </div>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  disabled={isDisabled}
                  type="text"
                  name="house_number"
                  value={store.address.house_number}
                  placeholder="House Number"
                  onChange={handleAddressChange}
                  className="w-full border-none"
                />
                <input
                  disabled={isDisabled}
                  type="text"
                  name="street_number"
                  value={store.address.street_number}
                  placeholder="Street Number"
                  onChange={handleAddressChange}
                  className="w-full border-none mt-2"
                />
                <input
                  disabled={isDisabled}
                  type="text"
                  name="village"
                  value={store.address.village}
                  placeholder="Village"
                  onChange={handleAddressChange}
                  className="w-full border-none mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[9px]">
              <div className="text-black">
                <span>City</span>
              </div>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  disabled={isDisabled}
                  type="text"
                  name="city"
                  value={store.address.city}
                  placeholder="City"
                  onChange={handleAddressChange}
                  className="w-full border-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[9px]">
            <div className="text-black">
              <span>Country</span>
            </div>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
              <input
                disabled={isDisabled}
                type="text"
                name="country"
                value={store.address.country}
                placeholder="Country"
                onChange={handleAddressChange}
                className="w-full border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button 
      onClick={() => setIsDisabled(!isDisabled)}
      className="self-center min-w-[190px] rounded-[15px] font-medium sm:px-5"
      >
        {isDisabled ? "Edit" :"Save"}
    </button>
  </>
);
}