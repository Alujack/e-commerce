"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Input, Text, Heading } from "@/components"; // Ensure these components are correctly imported
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'; // Ensure this query hook is correctly implemented
import { useUser } from '@/hooks/use-user'; // Ensure this hook is correctly implemented

interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  image: string;
  email?: string;
  id?: string;
}

const ProfileInformation: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<User | null>(null);
  const [update, setUpdate] = useState<User | null>(null);

  // Retrieve user data using the query hook
  const { data: user } = useRetrieveUserQuery();

  const { updateUser } = useUser(user ? user.id : "");

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target){
     const { name, value } = e.target;
      setUpdate((prevData) => prevData ? ({
        ...prevData,
        [name]: value,
      }) : null);
   }
   
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload logic here
      // For example, you might want to upload the image to a server and then set the URL
    }
  };

  const handleUpdate = async () => {
    if (formData) {
      try {
        await updateUser(formData);
        setIsEditing(false); // Set editing mode to false after updating
      } catch (error) {
        console.error("Failed to update user:", error);
        // Optionally set an error state here to display a message to the user
      }
    }
  };

  const renderField = (label: string, name: keyof User) => (
    <div className="flex flex-col items-start gap-3.5 w-full">
      <Text as="p">
        <span className="text-black-900_01">{label}&nbsp;</span>
        <span className="text-red-600">*</span>
      </Text>
      {isEditing ? (
        <Input
          name={name}
          value={update? update[name] : formData ? formData[name]: ""}
          onChange={handleInputChange}
          placeholder=""
          className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
        />
      ) : (
        <Text as="p" className="text-gray-900_21 text-sm">
          {formData ? formData[name] : ""}
        </Text>
      )}
    </div>
  );

  return (
    <div className="flex md:flex-col justify-between w-full gap-5 p-[84px] md:p-5 bg-gray-100_08 rounded-[10px]">
      <div className="flex flex-col w-[24%] md:w-full ml-14 md:ml-0">
        <div className="bg-gradient2 rounded-[77px]">
          {formData?.id}
          <img src={formData?.image} className="h-[150px] w-[150px] rounded-[50%]" alt="User Profile" />
        </div>
        <div className="flex flex-col items-end mt-[-2px] mb-[78px] relative">
          <div className="flex mr-[80px] p-2.5 md:mr-0">
            <Heading size="md" as="h1" className="mt-1.5 mb-1 text-center">
              Upload Photo
            </Heading>
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            className="self-center mt-2"
          />
          <div className="flex mr-[70px] self-center p-[5px]">
            <Text as="p" className="mt-1.5 mb-1 !text-blue-500_01 text-center">
              Photos Requirements
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-[67%] md:w-full mr-[35px] gap-5 md:mr-0">
        <form >
          {renderField("First Name", "first_name")}
          {renderField("Last Name", "last_name")}
          {renderField("Email address", "email")}
          {renderField("Phone Number", "phone_number")}
        </form>
        <button
          onClick={isEditing ? handleUpdate : toggleEditMode}
          className="h-[50px] px-[35px] sm:px-5 uppercase text-xs font-medium bg-green-700 min-w-[126px] rounded-[10px]"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ProfileInformation;
