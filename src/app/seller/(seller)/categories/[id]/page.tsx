"use client";
import { useState, useEffect } from 'react';
import FormModal from '@/modals/formModal'; // Ensure this import path is correct
import axios from 'axios';

type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'file' |'select'; // Add more types as needed
};

const formFields: FormField[] = [
  { name: 'attribute_type', label: 'category name', type: 'text' },
  { name: 'product', label: 'Product ', type: 'select' },
];
const addformFields: FormField[] = [
  { name: 'category_name', label: 'Attribute Type', type: 'text' },
  { name: 'product', label: 'Variation Values (comma-separated)', type: 'text' },
];

interface Category {
  category_name: string;
  image?: string;
}

interface VariationOption {
  id: string;
  value: string;
}

interface Variation {
  id: string;
  attribute_type: string;
  variation_option: VariationOption[];
}

interface VariationsByCategory {
  variations: Variation[];
}

export default function CategoryDetail({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>();
  const [variationsState, setVariationsState] = useState<VariationsByCategory>({ variations: [] });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const Products=[
    {
      id:'1',
      name:'Product 1',
      src:'/images/product/1.headphone.png'
    },
    {
      id:'2',
      name:'Product 2',
      src:'/images/product/1.headphone.png'
    }
  ]

  const openModal = () => setIsModalOpen(true);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeAddModal = () => setIsAddModalOpen(false);


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


  useEffect(() => {
    const fetchVariations = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/category/variations/${params.id}`);
        console.log(response.data.variations)
        setVariationsState({ variations: response.data.variations });
      } catch (error) {
        console.error('Error fetching variations:', error);
      }
    };

    fetchVariations();
  }, [params.id]);



  const Delete = () => {
    alert("Delete success");
  }
  const handleDropdownToggle = (attributeType: string) => {
    setOpenDropdown((prev) => (prev === attributeType ? null : attributeType));
  };

  return (
    <>
      <FormModal
        heading="+ Add Variations"
        isVisible={isModalOpen}
        onClose={closeModal}
        formFields={formFields}
        onSubmit={handleSubmit}
      />
      <FormModal
        heading="+ Add Product"
        isVisible={isAddModalOpen}
        onClose={closeAddModal}
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
              className="self-center bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300 mr-4"
            >
              + Add Variations
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between p-5 rounded-xl">
          <div className="flex flex-col w-[20%] gap-3">
          <h2 className="w-full bg-white-A700 pl-12 py-4 rounded-lg items-center self-center text-[18px] text-[#343C6A] font-bold inter decoration-8">
            Variations
          </h2>
          {variationsState.variations.map((variation, index) => (
            <div key={index} className="bg-blue-400 p-4">
              <h2
                className="text-[16px] text-white-A700 font-bold inter decoration-8 cursor-pointer"
                onClick={() => handleDropdownToggle(variation.attribute_type)}
              >
                {variation.attribute_type}
              </h2>
              {openDropdown === variation.attribute_type && (
                <ul className="list-disc pl-4">
                  {variation.variation_option.map((option) => (
                    <li key={option.id} className="text-gray-800">
                      Value: {option.value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col  bg-white-A700 rounded-xl w-full gap-3 ml-[10%] p-4">
          <h2 className="text-[18px] text-[#343C6A] font-bold inter decoration-8">Product</h2>
          {Products.map((product,index) =>(
            <div key={index} className="h-[60px] flex flex-row justify-between p-4 border border-gray-600 rounded-lg">
                <div className= "flex flex-row  p-4 ">
                    <img src={product?.src} alt="" className="w-[87px] self-center" />
                    <h1 className="text-[14px] text-[#343C6A] font-bold inter decoration-8 self-center"> {product?.name}</h1>
                </div>
                <div className="self-center">
                      <button className="  self-center text-black rounded-lg p-2">
                        <img src="/images/edit.png" className="w-[70%]" />
                      </button>
                      <button
                        onClick={Delete}
                        className=" text-black p-4 rounded-lg hover:bg-gray-300 mr-4"
                      >
                        X
                      </button>
                </div>
            </div>
          ))}  
         <button
            onClick={openAddModal}
            className=" text-black p-4 rounded-lg hover:bg-gray-300 mr-4"
            >
            + add product
          </button>
        </div>    
      </div>
    </>
  );
}
