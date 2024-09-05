"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRetrieveUserQuery, useUpdateUserMutation } from '@/redux/features/authApiSlice';
import SuccessModal from "@/modals/SucessModal";
const ProfileInformation: React.FC = () => {
  const { data: userData, isLoading: isFetching, error: fetchError } = useRetrieveUserQuery();
  const [updateUser, { isLoading: isUpdating, error: updateError }] = useUpdateUserMutation();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    image: '', // URL or File path
    id: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleOpenSuccess = () => setShowSuccess(true);
  const handleCloseSuccess = () => setShowSuccess(false);

  useEffect(() => {
    if (userData) {
      setFormData({
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone_number: userData.phone_number,
        email: userData.email || '',
        image: userData.image || '',
        id: userData.id,
      });
    }
  }, [userData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files?.[0] || null;
      if (file) {
        setImageFile(file);
        setFormData(prev => ({
          ...prev,
          image: URL.createObjectURL(file) // Temporary URL for display
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.id) {
      try {
        await updateUser({
          id: formData.id,
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone_number: formData.phone_number,
          email: formData.email || '',
          image: imageFile || undefined
        }).unwrap(); // Call the updateUser mutation
        setIsEditing(false);
        setErrorMessage(null); // Clear error message on successful update
        handleOpenSuccess()
      } catch (error) {
        console.error('Error updating user:', error);
        setErrorMessage('Failed to update user. Please try again.');
      }
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div className="flex gap-16 justify-between w-full p-[84px] md:p-5 bg-gray-100_08">
      <SuccessModal
        show={showSuccess}
        onClose={handleCloseSuccess}
        heading="Success!"
        back={false}
        message="Your account updated successfully."
      />
      <div className="flex flex-col w-[35%] md:w-full border-r-2 border-r-red-950 pr-10">
        <div className="h-[150px] w-[150px] rounded-[50%]">
          <img src={formData.image} className="object-cover" alt="User Profile" />
        </div>
        <div className="flex flex-col">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <div className="self-center">
            <text className="mt-1.5 mb-1 !text-blue-500_01 text-center">
              Photos Requirements
            </text>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[67%]  gap-5 ">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex w-[67%] flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>First Name</label>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name</label>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                /></div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Phone Number</label>
              <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                /></div>
            </div>
            <button
              className="bg-blue-800  hover:bg-blue-600  text-white-A700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              type="submit" disabled={isUpdating} >Save</button>
            {updateError && <p>Error updating profile. Please try again.</p>}
          </form>
        ) : (
          <div className="flex flex-col w-[67%]  gap-5">

            <p className="bg-blue-600 px-3 py-2  text-white-A700 text-center">First Name</p>
            <div className="w-full px-3 py-2  border-2 border-blue-500 flex items-center justify-center rounded-[5px]">
              <p>{formData.first_name}</p>
            </div>
            <p className="bg-blue-600 px-3 py-2  text-white-A700 text-center">Last Name</p>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] ">
              <p>{formData.last_name}</p></div>
            <p className="bg-blue-600 px-3 py-2  text-white-A700 text-center">Email</p>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] ">
              <p> {formData.email}</p></div>
            <p className="bg-blue-600 px-3 py-2  text-white-A700 text-center">Phone Number</p>
            <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px]">
              <p>{formData.phone_number}</p></div>
          </div>
        )}
        <button
          className=" w-[67%] bg-red-800  hover:bg-red-600  text-white-A700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

    </div>
  );
};

export default ProfileInformation;
