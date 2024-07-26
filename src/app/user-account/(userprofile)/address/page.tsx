"use client";
import React, { useState } from "react";
import { Input, Text, Img } from "@/components/";
import { countries } from "countries-list";

export default function Myadress() {
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const countryArray = Object.values(countries);

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col self-end md:self-stretch mb-[54px] gap-2.5 p-[9px] md:p-5 bg-gray-100_02 flex-1 rounded-[10px]">
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">Country / Region&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        {isEditing ? (
          <div className="self-stretch  md:h-auto border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
            <select name="" id="" className="text-black-900_02">
                  <option value="" className="text-black-900_02">
                    Select Country
                  </option>
                  {countryArray.map((country, index) => (
                    <option key={index} value={country.name} className="text-gray-500">
                      {country.name}
                    </option>
                  ))}
                </select>
          </div>
        ) : (
          <div className="self-stretch h-[43px] md:h-auto pr-[15px] border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
            <div className="flex h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Text as="p" className="!text-gray-900_10">
                United States (US)
              </Text>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col self-stretch gap-[11px]">
        <div className="flex self-start">
          <Text as="p" className="!text-black-900_02">
            Street Address
          </Text>
        </div>
        {isEditing ? (
          <>
            <Input
              size="md"
              shape="round"
              type="number"
              name="streetaddress"
              placeholder="House number and street name ..."
              className="sm:pr-5 border-blue_gray-100 border border-solid !rounded-md"
            />
            <Input
              size="md"
              shape="round"
              name="forminputone"
              placeholder="Apartment, suite, unit, etc (Optional)"
              className="sm:pr-5 border-blue_gray-100 border border-solid !rounded-md"
            />
          </>
        ) : (
          <>
            <Text as="p" className="text-gray-900_21 text-sm">
              {/* Replace with actual street address */}
              1234 Elm Street
            </Text>
            <Text as="p" className="text-gray-900_21 text-sm">
              {/* Replace with actual additional info */}
              Apt 101
            </Text>
          </>
        )}
      </div>
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">Town / City&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        {isEditing ? (
          <Input
            shape="round"
            name="city"
            className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
          />
        ) : (
          <Text as="p" className="text-gray-900_21 text-sm">
            {/* Replace with actual city */}
            Seattle
          </Text>
        )}
      </div>
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">State / County&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        {isEditing ? (
          <div className="self-stretch h-[43px] md:h-auto pr-[15px] border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
            <Input
              name="state"
              placeholder="Select state"
              className="h-full pl-10 pr-3 border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
            />
          </div>
        ) : (
          <div className="self-stretch h-[43px] md:h-auto pr-[15px] border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
            <div className="flex h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Text as="p" className="self-end !text-gray-900_10">
                Washington
              </Text>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col self-stretch items-start gap-[11px]">
        <Text as="p" className="!text-black-900_02">
          <span className="text-black-900_02">Zip Code&nbsp;</span>
          <span className="text-red-600">*</span>
        </Text>
        {isEditing ? (
          <Input
            shape="round"
            name="zipcode"
            className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
          />
        ) : (
          <Text as="p" className="text-gray-900_21 text-sm">
            {/* Replace with actual zip code */}
            98101
          </Text>
        )}
      </div>
      <button
        onClick={toggleEditMode}
        className="h-[50px] px-[35px] sm:px-5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[126px] rounded-[10px]"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
