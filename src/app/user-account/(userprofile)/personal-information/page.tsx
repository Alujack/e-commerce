"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRetrieveUserQuery, useUpdateUserMutation } from '@/redux/features/authApiSlice';
import SuccessModal from "@/modals/SucessModal";
const ProfileInformation: React.FC = () => {
  const { data: userData, isLoading: isFetching, error: fetchError } = useRetrieveUserQuery();
  const [updateUser, { isLoading: isUpdating, error: updateError}] = useUpdateUserMutation(); 
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
    <div className="flex md:flex-row gap-16 justify-between w-full p-[84px] md:p-5 bg-gray-100_08 rounded-[10px]">
      <SuccessModal
        show={showSuccess}
        onClose={handleCloseSuccess}
        heading="Success!"
        back={false}
        message="Your account updated successfully."
      />
      <div className="flex flex-col w-[24%] md:w-full ml-14 md:ml-0">
        <div className="bg-gradient2 rounded-[77px]">
          <img src={formData.image} className="h-[150px] w-[150px] rounded-full" alt="User Profile" />
        </div>
        <div className="flex flex-col items-end mt-[-2px] mb-[78px] relative">
          <div className="flex mr-[80px] p-2.5 md:mr-0">
            <h1 className="mt-1.5 mb-1 text-center">
              Upload Photo
            </h1>
          </div>
          <label>Profile Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <div className="flex mr-[70px] self-center p-[5px]">
            <text className="mt-1.5 mb-1 !text-blue-500_01 text-center">
              Photos Requirements
            </text>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[67%] md:w-full mr-[35px] gap-5 md:mr-0">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <button
              className="text-white bg-transparent w-28 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
              type="submit" disabled={isUpdating} >Save</button>
              {updateError && <p>Error updating profile. Please try again.</p>}
          </form>
        ) : (
          <div className="flex flex-col gap-5">
            <p>First Name: {formData.first_name}</p>
            <p>Last Name: {formData.last_name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phone_number}</p>
          </div>
        )}
         <button 
          className="text-white bg-transparent w-28 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
          onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit"}
        </button>  
      </div> 
     
    </div>
  );
};

export default ProfileInformation;
