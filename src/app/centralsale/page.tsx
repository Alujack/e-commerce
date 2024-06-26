"use client";
import Link from "next/link";
import { Img, Text, Heading, CheckBox, Input } from "@/components";
import { useEffect, useState } from 'react';
interface userType{
  name: string,
  email: string,
  image: string,
  id:string


}
function BecomeSellerPage() {
  const [userData, setUserData] = useState<userType>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getUser/');
        const data = await response.json();
        if (data && data.session && data.session.user) {
          setUserData(data.session.user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const [formData, setFormData] = useState({
    company: "",
    street: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="w-full px-[5px] md:px-5 bg-gray-300_07">
        <h1>{userData?.name}</h1>
        <h1>{userData?.email}</h1>
        <img src={userData?.image} alt="" />
        <div className="flex flex-col w-full gap-2.5 mx-auto max-w-[100vw]">
          <div className="flex flex-col items-start p-[55px] md:p-5 bg-white-A700 rounded-[10px]">
            <div className="flex ml-[102px] p-[9px] md:ml-0">
              <Heading size="3xl" as="h1" className="self-start uppercase">
                Welcome to our member
              </Heading>
            </div>
            <div className="flex flex-col self-center w-[80%] md:w-full mt-5 gap-[25px]">
              <div className="flex sm:flex-col justify-between gap-5">
                <div className="flex p-2.5">
                  <Heading size="xl" as="h2" className="mt-[11px] mb-2.5 !font-bold">
                    Billing Detail
                  </Heading>
                </div>
                <div className="flex items-center w-[47%] sm:w-full gap-1 p-[17px] border-gray-200_02 border border-solid bg-gray-200_02 rounded-[10px]">
                  <div className="flex pb-[3px] pr-[3px]">
                    <Text as="p" className="flex self-end mb-0.5 !text-black-900_02">
                      <span className="text-black-900_02">&nbsp;Returning customer?&nbsp;</span>
                      <a href="#" className="text-red-600 underline">
                        Click here to log in
                      </a>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between gap-5">
                <div className="flex flex-col items-start w-[47%] md:w-full gap-3">
                  <Text as="p" className="!text-black-900_02">
                    <span className="text-black-900_02">First Name&nbsp;</span>
                    <span className="text-red-600">*</span>
                  </Text>
                  {/* <h3>{userData.name.split(' ')[0]}</h3> */}
                </div>
                <div className="flex flex-col items-start w-[47%] md:w-full gap-3">
                  <Text as="p" className="!text-black-900_02">
                    <span className="text-black-900_02">Last Name&nbsp;</span>
                    <span className="text-red-600">*</span>
                  </Text>
                  {/* <h3>{userData.name.split(' ')[1]}</h3> */}
                </div>
              </div>
              <div className="flex flex-col items-start gap-[11px]">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">Company Name&nbsp;</span>
                  <span className="text-gray-500">(Optional)</span>
                </Text>
                <Input
                  shape="round"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-[11px]">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">Country / Region&nbsp;</span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="self-stretch h-[43px] pr-9 sm:pr-5 border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
                  <Img
                    src="images/img_options.svg"
                    alt="arrowdown_one"
                    className="h-[43px] left-[0.00px] bottom-0 top-0 my-auto absolute"
                  />
                  <div className="flex h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <input 
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[11px]">
                <Text as="p" className="!text-black-900_02">
                  Street Address
                </Text>
                <Input
                  size="md"
                  shape="round"
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder={`House number and street name ...`}
                  className="self-stretch sm:pr-5 border-blue_gray-100 border border-solid !rounded-md"
                />
                <Input
                  size="md"
                  shape="round"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={`Apartment, suite, unit, etc (Optional)`}
                  className="self-stretch sm:pr-5 border-blue_gray-100 border border-solid !rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-[11px]">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">Town / City&nbsp;</span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-[11px]">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">State / County&nbsp;</span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="self-stretch h-[43px] pr-9 sm:pr-5 border-blue_gray-100 border border-solid bg-white-A700 relative rounded-md">
                  <Img
                    src="images/img_options.svg"
                    alt="arrowdown_three"
                    className="h-[43px] left-[0.00px] bottom-0 top-0 my-auto absolute"
                  />
                  <div className="flex h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <input 
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[11px]">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">Zip Code&nbsp;</span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">Phone Number&nbsp;</span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Text as="p" className="!text-black-900_02">
                  <span className="text-black-900_02">Email Address&nbsp;</span>
                  <span className="text-red-600">*</span>
                </Text>
                <Input
                  shape="round"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="self-stretch sm:px-5 border-blue_gray-100 border border-solid !rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center w-[49%] md:w-full mt-10 ml-28 p-[17px] md:ml-0 border-gray-200_02 border border-solid bg-gray-200_02 rounded-[10px]">
              <div className="flex pb-[3px] pr-[3px]">
                <Text as="p" className="self-end mb-1 ml-[26px] !text-red-600 relative underline">
                  Agreement.
                </Text>
              </div>
            </div>
            <CheckBox
              name="createanaccount"
              label="Create an account?"
              id="createanaccount"
              className="mt-8 ml-28 gap-[7px] md:ml-0 text-black-900_02 text-left text-sm"
            />
            <Link href="/seller/maindash">
              <Heading className="min-w-[100px] rounded-[15px] mt-[10px]">
                Confirm
              </Heading>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[25px] border-gray-300_04 border-b border-solid bg-white-A700 rounded-[10px]">
          <div className="flex flex-col mt-[19px] gap-[3px]">
            <div className="flex p-[9px]">
              <Heading size="3xl" as="h2" className="self-start uppercase">
                our mission and vision
              </Heading>
            </div>
            <Text as="p" className="ml-[9px] md:ml-0 !text-black-900_02 leading-[25px]">
              <span className="text-black-900_02">
                Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie
                pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam
                et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed
                augue.&nbsp;
              </span>
              <span className="text-black-900_02 font-bold">
                Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas.
              </span>
            </Text>
          </div>
          <Img
            src="images/img_about3_png.png"
            alt="about3png_one"
            className="mb-[21px] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </>
  );
}

export default BecomeSellerPage;
