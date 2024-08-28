import React, { useState, useEffect } from "react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAddress } from "@/context/AddressContext";
import { useOrder } from "@/context/CheckoutContext";

const AddressForm = () => {
  const {data:user} = useRetrieveUserQuery();
  const [isEditing, setIsEditing] = useState(false);
  const {shippingAddress, setShippingAddress} = useOrder();
  const { address, fetchAddress } = useAddress();

  const toggleEdit = () => setIsEditing(!isEditing);
  useEffect(() => {
      fetchAddress(user?.id ? user?.id : "");
      setShippingAddress(address)
    }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      setShippingAddress({...shippingAddress,
      [name]: value
    });
  };
  const Submitt = () =>{
    console.log(shippingAddress)
  }

  return (
    <div className="w-full sm:p-5 rounded-[10px]">
      <div className="flex gap-3 justify-between pt-7">
        <h2 className="text-lg hover:underline">Shipping shippingAddress</h2>
        <button
          onClick={toggleEdit}
          className="text-cyan-500 hover:text-indigo-800 hover:underline"
        >
          {isEditing ? "Save" : "Edit Detail"}
        </button>
      </div>
      {isEditing ? (
        <>
        <form>
          <div className="mb-4">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 p-1">Same as billing shippingAddress</span>
            </label>
          </div>
          <div className="w-full  sm:p-5  rounded-[10px] ">
            <div className="flex space-x-[25px] justify-between">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  value={user?.first_name}
                  placeholder="first name"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  value={user?.last_name}
                  placeholder="last name"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-row border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md my-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="shippingAddress line - 1"
                value={shippingAddress.house_number}
                type="text"
                name="house_number"
                onChange={handleInputChange}
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="shippingAddress line - 1"
                value={shippingAddress.street_number}
                type="text"
                name="street_number"
                onChange={handleInputChange}
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="shippingAddress line - 1"
                value={shippingAddress.village}
                type="text"
                name="village"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-row border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md my-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="shippingAddress line - 1"
                value={shippingAddress.commune}
                type="text"
                name="commune"
                onChange={handleInputChange}
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="shippingAddress line - 1"
                value={shippingAddress.district}
                type="text"
                name="district"
                onChange={handleInputChange}
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="shippingAddress line - 1"
                value={shippingAddress.commune}
                type="text"
                name="commune"
               
              />
            </div>
            <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                placeholder="City"
                value={shippingAddress.city}
                type="text"
                name="city"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex space-x-[25px] justify-between mt-[13px]">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Country"
                  value={shippingAddress.country}
                  name="country"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  onChange={handleInputChange}
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="State"
                  value={shippingAddress.city}
                  name="city"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  
                />
              </div>
            </div>

            <div className="flex space-x-[25px] justify-between mt-[13px]">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Zip"
                  value={shippingAddress.postal_code}
                  name="postal_code"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  onChange={handleInputChange}
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  value={shippingAddress.phone_number}
                  name="phone_number"
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                  onChange={handleInputChange}
                />
              </div>
              
            </div>
          </div>
         
        </form>
        <button onClick={Submitt}>Submittt</button>

        </>
         
      ) : (
        <div className="border-2 border-gray-400 rounded-lg p-5">
          <p className="text-sm text-gray-700">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-sm text-gray-700">
            {shippingAddress.house_number}, {shippingAddress.street_number}, {shippingAddress.village}
          </p>
          <p className="text-sm text-gray-700">
            {shippingAddress.commune}, {shippingAddress.district}, {shippingAddress.city}
          </p>
          <p className="text-sm text-gray-700">
            {shippingAddress.country}, {shippingAddress.postal_code}
          </p>
          <p className="text-sm text-gray-700">Phone: {shippingAddress.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
