"use client";
import { useState, useEffect } from 'react';
import FormModal from '@/modals/formModal';
import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/navigation';

type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'file';
};

const formFields: FormField[] = [
  { name: 'category_name', label: 'Category Name', type: 'text' },
  { name: 'image', label: 'Upload Image', type: 'file' },
];

const VariationForm:FormField[] =[
  { name: 'attribute_string', label: 'Attribute', type: 'text'}
  
]

interface Category {
  id:string;
  parent_category?:string;
  category_name: string;
  image?: string;
};

export default function Categroy({params}:{params:{id:string}}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddVariationOpen, setIsAddVariationOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openAddVariation =  () => setIsAddVariationOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeAddVariation = () => setIsAddVariationOpen(false);
  const router = useRouter();

  const handleSubmit = async (formData: { [key: string]: string | File | null }) => {
    try {
      setIsLoading(true);
      // Create a FormData object to handle file uploads
      const data = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          data.append(key, formData[key] as Blob);
        }
      }
      const response = await axios.post('http://localhost:8000/api/product/category/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.data) {
        const createdCategory = response.data;
        setCategories((prevCategories) => [...prevCategories, createdCategory]);
        closeModal();
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
        const response = await axios.get("http://localhost:8000/api/product/category/");
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
  }, []); // Add dependency array here to run the effect only once

  return (
    <div className="flex flex-col gap-2 p-2 sm:p-5 px-5">
      <div className="mt-2 flex flex-row justify-between">
        <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
          Categories
        </h1>
        <div>
          <button
            onClick={()=> router.push("categories/2")}
            className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8 rounded"
          >
            + Add Category
          </button>
        </div>
      </div>

      <FormModal
        heading="+ Add Categories"
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
      <div className="scrollable-div grid grid-cols-3 gap-4 sm:flex flex-col">
        {categories?.map((category, index) => (
          <div key={index} className="bg-white-A700 flex flex-col items-center gap-[10px] w-full border-2 p-[5px] rounded-md">
            <Link href={`categories/${category.id}`}>     
            <img
              src={category?.image}
              alt="image"
              className="w-[270px] h-[250px]"
            />
            </Link>
            <h1 className='font-inter text-2xl font-bold'>{category.category_name}</h1>
            <div className = "flex flex-row w-full justify-between px-2">
              <button onClick={openAddVariation} className=" bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8 rounded">+ Add variation</button>
              <button onClick={openModal} className="  bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8 rounded">+ Add Category</button>
            </div>      
          </div>
        ))}
      </div>
    </div>
  );
}
