"use client";
import { useState, useEffect } from 'react';
import FormModal from '@/modals/formModal'; // Ensure this import path is correct
import axios from 'axios';
import SuccessModal from '@/modals/SucessModal';
type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'file' |'select'; // Add more types as needed
};

const formFields: FormField[] = [
  { name: 'attribute_type', label: 'category name', type: 'text' },
  { name: 'value', label:'Variation Values (comma-separated)', type: 'text' },
];
const addformFields: FormField[] = [
  { name: 'category_name', label: 'Attribute Type', type: 'text' },
  { name: 'product', label: 'Product', type: 'select' },
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
interface product{
  name:string;
  image:string;
}

export default function CategoryDetail({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>();
  const [variations, setVariations] = useState<Variation[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [Products, setProducts] = useState<product[]>([]);


  const openModal = () => setIsModalOpen(true);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeAddModal = () => setIsAddModalOpen(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleOpenSuccess = () => setShowSuccess(true);
  const handleCloseSuccess = () => setShowSuccess(false);


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
        // handleOpenSuccess();
        fetchVariations();

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

  const fetchVariations = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/category/variations/${params.id}`);
        console.log(response.data)
        setVariations(response.data);
      } catch (error) {
        console.error('Error fetching variations:', error);
      }
    };


  useEffect(() => {
    fetchVariations();
  }, [params.id]);
  

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/category/product/${params.id}`);
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [params.id]);



  const Delete = () => {
    alert("Delete success");
  }
  const handleDropdownToggle = (attributeType: string) => {
    setOpenDropdown((prev) => (prev === attributeType ? null : attributeType));
  };
  const getImageUrl = (path:string) => {
  return `http://localhost:8000${path}`;
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
       <SuccessModal
        show={showSuccess}
        onClose={handleCloseSuccess}
        heading="Sucess!"
        message="You Create Variontions successfully."
        back={false}
      />
      <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
        <div className="mt-[10px] flex flex-row justify-between">
          <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
            {category?.category_name}
          </h1>
          <div>
            <button className="self-center bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300 mr-4">
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
          {variations.map((variation, index) => (
            <div key={index} className="bg-blue-400 p-4">
              <h2
                className="text-[18px] text-white-A700 font-bold inter decoration-8 cursor-pointer"
                onClick={() => handleDropdownToggle(variation.attribute_type)}
              >
                {variation.attribute_type}
              </h2>
              {openDropdown === variation.attribute_type && (
                <ol className="list-inside pl-4 mt-4">
                  {variation.variation_option.map((option) => (
                    <li key={option.id} className="text-gray-800 m-2">
                      {variation.attribute_type}: {option.value}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col  bg-white-A700 rounded-xl w-full gap-3 ml-[10%] p-4">
          <h2 className="text-[18px] text-[#343C6A] font-bold inter decoration-8">Product</h2>
          {Products.map((product, index) => {
                const imageUrl = getImageUrl(product?.image);
                return (
                  <div key={index} className="h-[60px] flex flex-row justify-between p-4 border border-gray-600 rounded-lg mx-10">
                    <div className="flex flex-row gap-10 ">
                      <img src={imageUrl} alt="product" className="h-full bg-clip-padding" />
                      <h1 className="text-[14px] text-[#343C6A] font-bold inter decoration-8 self-center">
                        {product?.name}
                      </h1>
                    </div>
                    <div className="self-center">
                    </div>
                  </div>
                );
              })}
         <button
            onClick={openAddModal}
            className=" text-black p-4 rounded-lg hover:bg-gray-300 mx-10"
            >
            + add product
          </button>
        </div>    
      </div>
    </>
  );
}
