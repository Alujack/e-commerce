"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useUser } from '@/context/UserContext';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';


const ProfileInformation: React.FC = () => {
   const { data: users } = useRetrieveUserQuery();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { user, updateUser, fetchUser } = useUser();
  const [formData, setFormData] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    phone_number: user?.phone_number || '',
    email: user?.email || '',
    image: user?.image, // Can be a URL or File
    id: user?.id,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const userId = users ? users.id : ""; // Replace with actual user ID

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        email: user.email || '',
        image: user.image, // Adjust as needed
        id: user.id,
      });
    }
  }, [user]);

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
    if (user) {
      try {
        // Prepare FormData for file upload
        const data = new FormData();
        data.append("first_name", formData.first_name);
        data.append("last_name", formData.last_name);
        data.append("phone_number", formData.phone_number);
        data.append("email", formData.email || '');
        data.append("id", formData.id || '');
        if (imageFile) {
          data.append("image", imageFile);
        }

        await updateUser(data);
        setIsEditing(false);
        setErrorMessage(null); // Clear error message on successful update
      } catch (error) {
        console.error('Error updating user:', error);
        setErrorMessage('Failed to update user. Please try again.');
      }
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex md:flex-col justify-between w-full gap-5 p-[84px] md:p-5 bg-gray-100_08 rounded-[10px]">
      <div className="flex flex-col w-[24%] md:w-full ml-14 md:ml-0">
        <div className="bg-gradient2 rounded-[77px]">
          <img src={user?.image as string} className="h-[150px] w-[150px] rounded-[50%]" alt="User Profile" />
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
          {formData.image && typeof formData.image === 'string' && (
            <img src={formData.image} alt="User Profile" className=" w-[50px] rounded-full"/>
          )}
          <div className="flex mr-[70px] self-center p-[5px]">
            <text className="mt-1.5 mb-1 !text-blue-500_01 text-center">
              Photos Requirements
            </text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-[67%] md:w-full mr-[35px] gap-5 md:mr-0">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <p>First Name: {formData.first_name}</p>
            <p>Last Name: {formData.last_name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phone_number}</p>
          </div>
        )}
      </div>
      <button onClick={toggleEditMode}>{isEditing ? "Cancel" : "Edit"}</button>
    </div>
  );
};

export default ProfileInformation;
