"use client";

import Link from "next/link";
import { Img, Text, Heading, TextArea, CheckBox, Input } from "@/components";
import { countries } from "countries-list";

export default function BecomeSellerPage() {
  const countryArray = Object.values(countries);

  return (
    <>
      <div className="w-full px-2.5 md:px-5 bg-gray-100">
        <div className="flex flex-col w-full gap-4 mx-auto max-w-screen-lg">
          <div className="flex flex-col items-start p-10 md:p-5 bg-white rounded-lg shadow-lg border-2 border-blue-500">
            <div className="flex ml-24 md:ml-0">
              <Heading size="3xl" as="h1" className="self-start uppercase text-blue-500">
                Welcome to Our Membership
              </Heading>
            </div>
            <div className="flex flex-col self-center w-4/5 md:w-full mt-5 gap-6">
              <div className="flex sm:flex-col justify-between gap-5">
                <div className="flex p-2.5">
                  <Heading size="xl" as="h2" className="mt-2.5 mb-2.5 font-bold text-blue-500">
                    Billing Details
                  </Heading>
                </div>
                <div className="flex items-center w-2/3 sm:w-full gap-1 p-4 border-gray-200 border bg-gray-200 rounded-lg">
                  <Text as="p" className="flex mb-0.5 text-black">
                    <span>Returning customer? </span>
                    <Link href="/auth-user/login" className="text-red-600 underline ml-1">
                      Click here to log in
                    </Link>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Company Name </span>
                  <span className="text-gray-500">(Optional)</span>
                </Text>
                <Input
                  shape="round"
                  name="name"
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  Select Country
                </Text>
                <select name="country" className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg">
                  <option value="" className="text-gray-500">
                    Select Country
                  </option>
                  {countryArray.map((country, index) => (
                    <option key={index} value={country.name} className="text-black">
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">Street Address</Text>
                <Input
                  size="md"
                  shape="round"
                  type="text"
                  name="streetaddress"
                  placeholder="House number and street name ..."
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
                <Input
                  size="md"
                  shape="round"
                  name="address2"
                  placeholder="Apartment, suite, unit, etc (Optional)"
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Town / City </span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="city"
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>State / County </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="relative w-full">
                  <select className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg">
                    <option value="Washington" className="text-black">
                      Washington
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Zip Code </span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="zipcode"
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Phone Number </span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Email Address </span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="email"
                  className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-center w-3/5 md:w-full mt-10 ml-24 p-4 border-gray-200 border bg-gray-200 rounded-lg md:ml-0">
              <Text as="p" className="self-end text-red-600 underline">
                Agreement.
              </Text>
            </div>
            <CheckBox
              name="createanaccount"
              label="Create an account?"
              id="createanaccount"
              className="mt-8 ml-24 md:ml-0 gap-2 text-black text-sm"
            />
            <div className="flex mt-6 ml-24 md:ml-0">
              <Heading size="xl" as="h5" className="font-bold">
                Additional Information / Problem Report
              </Heading>
            </div>
            <div className="flex flex-col self-center items-start w-4/5 md:w-full mt-2.5">
              <div className="flex p-1.5">
                <Text as="p" className="mt-2 mb-1 text-black">
                  <span>Write your problem </span>
                  <span className="text-gray-500">(Optional)</span>
                </Text>
              </div>
              <TextArea
                shape="round"
                name="problemReport"
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg text-gray-700"
              />
              <Link href="/seller/maindash" className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-blue-700 transition-colors duration-300">
                Confirm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
