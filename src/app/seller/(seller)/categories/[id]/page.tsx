"use client";
import { useState, useEffect } from 'react';
import FormModal from '@/modals/formModal'; // Ensure this import path is correct
import axios from 'axios';

type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'file'; // Add more types as needed
};

const formFields: FormField[] = [
  { name: 'attribute_type', label: 'Category Name', type: 'text' },
  { name: 'value', label: 'Category Values (comma-separated)', type: 'text' },
];

interface Category {
  category_name: string;
  image?: string;
}

export default function CategoryDetail({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (formData: { [key: string]: string | File | null }) => {
    const { attribute_type, value } = formData;

    if (typeof value === 'string') {
      // Split the value string by commas and trim whitespace
      const options = value.split(',').map(option => option.trim());

      // Prepare the payload for your API request
      const payload = {
        attribute_type,
        options: options.map(option => ({ value: option })),
      };

      try {
        // Send the data to your API
        const response = await fetch(`http://localhost:8000/api/product/category/${params.id}/detail/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log('Success:', data);
        // Handle success, e.g., show a success message or update state
        closeModal();
      } catch (error) {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
      }
    } else {
      console.error('Invalid data type for value');
      // Handle invalid data type
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/category/${params.id}/detail/`);
        if (response.data) {
          const data = response.data;
          setCategory(data);
          console.log("Category data:", data); // Log the response data
        }
      } catch (error) {
        console.log('Failed to fetch category', error);
      }
    };

    fetchCategory();
  }, [params.id]);

  return (
    <>
      <FormModal
        heading="+ Add Variations"
        isVisible={isModalOpen}
        onClose={closeModal}
        formFields={formFields}
        onSubmit={handleSubmit}
      />
      <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
        <div className="mt-[10px] flex flex-row justify-between">
          <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
            {category?.category_name}
          </h1>
          <div>
            <button className="bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300 mr-4">
              Cancel
            </button>
            <button
              onClick={openModal}
              className="bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300 mr-4"
            >
              + Add Variations
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between p-[20px] ml-[10%] mr-[20%]">
        <div className="flex flex-col w-[60%] gap-3">
          {/* Add content here */}
        </div>
        <div className="self-center">
          {/* Add content here */}
        </div>
      </div>
    </>
  );
}
