"use client";
import { useState, useEffect } from 'react';
import FormModal from '@/modals/formModal';
import axios from 'axios';
import Link from "next/link";
import { useStore } from '@/context/Store';
import SuccessModal from '@/modals/SucessModal';

type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'file';
};

const formFields: FormField[] = [
  { name: 'category_name', label: 'Category Name', type: 'text' },
  { name: 'image', label: 'Upload Image', type: 'file' },
];

const VariationForm: FormField[] = [
  { name: 'attribute_string', label: 'Attribute', type: 'text' }
];

interface Category {
  id: string;
  parent_category?: string;
  category_name: string;
  image?: string;
};

export default function Category() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddVariationOpen, setIsAddVariationOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState<string | null>(null);
  const {store} = useStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeAddVariation = () => setIsAddVariationOpen(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleOpenSuccess = () => setShowSuccess(true);
  const handleCloseSuccess = () => setShowSuccess(false);

  const handleSubmit = async (formData: { [key: string]: string | File | null }) => {
    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          data.append(key, formData[key] as Blob);
        }
      }
      if (selectedParentCategoryId) {
        data.append('parent_category', selectedParentCategoryId);
      }
      console.log(data);
      const response = await axios.post(`http://localhost:8000/api/product/category/${store.id}/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.data) {
        const createdCategory = response.data;
        setCategories((prevCategories) => [...prevCategories, createdCategory]);
        closeModal();
        handleOpenSuccess();
      } else {
        console.error('Submission failed:', response);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/category/${store.id}/`);
        if (response) {
          const data = response.data.map((category: Category) => ({
            ...category,
            image: category.image?.startsWith('http')
              ? category.image
              : `http://localhost:8000${category.image}`,
          }));
          setCategories(data);
          console.log("Categories data:", data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategory();
  }, []);

  const handleAddCategory = (parentId: string | null = null) => {
    setSelectedParentCategoryId(parentId);
    openModal();
  };

  return (
    <div className="flex flex-col gap-2 p-2 sm:p-5 px-5">
      <div className="mt-2 flex flex-row justify-between">
        <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
          Categories
        </h1>
        <div>
          <button
            onClick={() => handleAddCategory()}
            className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8 rounded"
          >
            + Add Category
          </button>
        </div>
      </div>

      <FormModal
        heading="+ Add Category"
        isVisible={isModalOpen}
        onClose={closeModal}
        formFields={formFields}
        onSubmit={handleSubmit}
      />
      <FormModal
        heading="+ Add Variation"
        isVisible={isAddVariationOpen}
        onClose={closeAddVariation}
        formFields={VariationForm}
        onSubmit={handleSubmit}
      />
       <SuccessModal
        show={showSuccess}
        onClose={handleCloseSuccess}
        heading="Sucess!"
        message="You Create Category successfully."
        back={false}
      />
      <div className="scrollable-div grid grid-cols-5 gap-10 sm:flex flex-col">
        {categories?.map((category, index) => (
          <div key={index} className="h-[250px] w-[250px] bg-white-A700 flex flex-col items-center border-2 rounded-md">
            <Link href={`categories/${category.id}`}>
              <img
                src={category?.image}
                alt="image"
                className="h-[150px] p-2"
              />
            </Link>
            <h1 className='font-inter text-xl font-bold'>{category.category_name}</h1>
            <button
              onClick={() => handleAddCategory(category.id)}
              className="font-bold p-4 px-8 rounded"
            >
              + Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
