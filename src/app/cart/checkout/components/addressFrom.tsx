import React, { useState } from "react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Address } from "@/common.type";

const AddressForm = ({ address }:{address:Address}) => {
  const {data:user} = useRetrieveUserQuery();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="w-full sm:p-5 rounded-[10px]">
      <div className="flex gap-3 justify-between pt-7">
        <h2 className="text-lg hover:underline">Shipping address</h2>
        <button
          onClick={toggleEdit}
          className="text-cyan-500 hover:text-indigo-800 hover:underline"
        >
          {isEditing ? "Save" : "Edit Detail"}
        </button>
      </div>
      {isEditing ? (
        <form>
          <div className="mb-4">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 p-1">Same as billing address</span>
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
                placeholder="address line - 1"
                value={address.house_number}
                type="text"
                name="search"
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="address line - 1"
                value={address.street_number}
                type="text"
                name="search"
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="address line - 1"
                value={address.village}
                type="text"
                name="search"
              />
            </div>
            <div className="flex flex-row border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md my-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="address line - 1"
                value={address.commune}
                type="text"
                name="search"
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="address line - 1"
                value={address.district}
                type="text"
                name="search"
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm "
                placeholder="address line - 1"
                value={address.commune}
                type="text"
                name="search"
              />
            </div>
            <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md  mt-3">
              <input
                className="placeholder:text-slate-400 block bg-white w-full   sm:text-sm"
                placeholder="City"
                value={address.city}
                type="text"
                name="search"
              />
            </div>
            <div className="flex space-x-[25px] justify-between mt-[13px]">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Country"
                  value={address.country}
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="State"
                  value={address.city}
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-[25px] justify-between mt-[13px]">
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Zip"
                  value={address.postal_code}
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
              <div className="border border-indigo-600 pt-[5px] pb-[5px] pl-9 pr-3 rounded-md w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  value={address.phone_number}
                  className="border-indigo-600 w-full rounded-md py-2 px-4 text-sm"
                />
              </div>
            </div>
          </div>
          {/* Add remaining form fields similar to the ones above */}
        </form>
      ) : (
        <div className="border-2 border-gray-400 rounded-lg p-5">
          <p className="text-sm text-gray-700">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-sm text-gray-700">
            {address.house_number}, {address.street_number}, {address.village}
          </p>
          <p className="text-sm text-gray-700">
            {address.commune}, {address.district}, {address.city}
          </p>
          <p className="text-sm text-gray-700">
            {address.country}, {address.postal_code}
          </p>
          <p className="text-sm text-gray-700">Phone: {address.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
