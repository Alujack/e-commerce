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
  image: string | null;
};

export default function Category() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddVariationOpen, setIsAddVariationOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [storeCategories, setStoreCategories] = useState<Category[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);
  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { store } = useStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeAddVariation = () => setIsAddVariationOpen(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleOpenSuccess = () => setShowSuccess(true);
  const handleCloseSuccess = () => setShowSuccess(false);

  const [query, setQuery] = useState('');

  const handleSubmit = async (formData: { [key: string]: string | File | null }) => {
    try {
      setIsLoading(true);
      const data = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          data.append(key, formData[key] as Blob);
        }
      }
      if (selectedParentCategoryId) {
        data.append('parent_category', selectedParentCategoryId);
      }
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/category/${store.id}/`, data, {
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/product/product-categories/`);
        if (response) {
          const data = response.data.map((category: Category) => ({
            ...category,
            image: category.image?.startsWith('http')
              ? category.image
              : `${process.env.NEXT_PUBLIC_HOST}/${category.image}`,
          }));
          setCategories(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const filteredCategories = categories.filter((category) =>
      category.category_name.toLowerCase().startsWith(query.toLowerCase())
    );
    setVisibleCategories(filteredCategories);
  }, [query, categories]);

  const handleAddCategory = (parentId: string | null = null) => {
    setSelectedParentCategoryId(parentId);
    openModal();
  };
  const AddToStore = async (category:any) =>{
      try {
        const response = await axios.post(`http://localhost:8000/api/store/category/save/${store.id}?category=${category}`);
        if (response) {
          console.log("Categories");
        }
      } catch (e) {
        console.log(e);
      }
    };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/store/category/save/${store.id}/`);
        if (response) {
          const data = response.data.map((category: Category) => ({
            ...category,
            image: category.image?.startsWith('http')
              ? category.image
              : `http://localhost:8000${category.image}`,
          }));
          setStoreCategories(data);
          console.log("Categories data:", data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategory();
  }, []);



  return (
    <div className="flex flex-col gap-2 p-2 sm:p-5 px-5">
      <div className="mt-2 flex flex-row justify-between">
        <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
          Categories
        </h1>
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
        heading="Success!"
        message="You created the category successfully."
        back={false}
      />

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search categories..."
          className="border p-2"
        />
        {query && visibleCategories.length > 0 && (
          <div className="absolute z-20 mt-3 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {visibleCategories.map((category, index) => (
              <div className="flex flex-row justify-between px-10">
                <Link key={index} href={`categories/${category.id}`}>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <h1 className='font-inter text-md'>{category.category_name}</h1>
                  </div>
                  
                </Link>
                <button onClick={()=>AddToStore(category.id)} className="p-2 bg-slate-200 hover:underline">Save</button>
              </div>
            ))}
          </div>
        )} 
        <div className="scrollable-div grid grid-cols-5 gap-10 sm:flex flex-col">
        {storeCategories?.map((category, index) => (
          <div key={index} className="h-[250px] w-[250px] bg-white-A700 flex flex-col items-center border-2 rounded-md">
            <Link href={`categories/${category.id}`}>
              <img
                src={category?.image ? category?.image : ""}
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
    </div>
  );
}
