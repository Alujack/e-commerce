"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "@/context/Store";
import { useRouter } from "next/navigation";
import SuccessModal from "@/modals/SucessModal";

interface Category {
  id: string;
  parent_category?: string;
  category_name: string;
  image?: string;
}

interface ProductForm {
  product_id:string;
  name: string;
  short_description:string;
  description: string;
  image?: File | null;
  price: string;
  categories: string[];
  store: string;
}

export default function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { store } = useStore();
  const router = useRouter();
  const [form, setForm] = useState<ProductForm>({
    product_id:'',
    name: "",
    short_description:"",
    description: "",
    image: null,
    price: "",
    categories: [],
    store: store?.id || ""
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const handleOpenSuccess = () => setShowSuccess(true);
  const handleCloseSuccess = () => setShowSuccess(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
       const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/product/product-categories/`);
        const data = response.data.map((category: Category) => ({
          ...category,
          image: category.image?.startsWith("http")
            ? category.image
            : `http://localhost:8000${category.image}`,
        }));
        setCategories(data);
        console.log("Categories data:", data);
      } catch (e) {
        console.log("Error fetching categories:", e);
      }
    };
    if (store.id) {
      fetchCategory();
    }
  }, [store.id]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const target = e.target as HTMLInputElement | HTMLSelectElement;
  const { name, value} = target;

  if (target instanceof HTMLSelectElement) {
    const selectedValues = Array.from(target.options)
      .filter(option => option.selected)
      .map(option => option.value);

    setForm((prevForm) => ({
      ...prevForm,
      [name]: selectedValues,
    }));
  } else if (target instanceof HTMLInputElement && target.type === 'file') {
    const file = target.files && target.files[0];
    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        image: file,
      }));
    }
  } else {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    console.log("Form categories before submission:", form.categories);
    
    const formData = new FormData();
    formData.append("product_id", form.product_id);
    formData.append("name", form.name);
    formData.append("description", form.description);
    if (form.image) {
      formData.append("image", form.image);
    }
    formData.append("price", form.price);
    formData.append("store", store.id);
    
    form.categories.forEach((category, index) => {
      formData.append(`categories`, category);
    });
    console.log("FormData object before submission:", Array.from(formData.entries()));

    const response = await axios.post("http://localhost:8000/api/product/products/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 201) {
      console.log("Product created successfully:", response.data);
      handleOpenSuccess();
    } else {
      console.log("Error creating product:", response.status);
    }
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};




  return (
    <>
      <div className="flex flex-col gap-7 p-5">
        <div className="mt-2 flex flex-row justify-between px-20">
          <h1 className="text-2xl text-blue-900 font-bold">Add Product</h1>
          <div>
            <button className="bg-blue-600 text-black p-4 px-8 rounded-lg hover:bg-gray-300 mr-4" onClick={() => router.back()}>
              Cancel
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 px-8 rounded" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>


       <SuccessModal
        show={showSuccess}
        onClose={handleCloseSuccess}
        heading="Sucess!"
        message="You Create Category successfully."
        back={true}
      />


      <div className="px-20">
        <form className="bg-gray-50 flex flex-col gap-5 p-5 rounded-lg" onSubmit={handleSubmit}>
          <h1 className="text-2xl text-blue-900 font-bold">Information</h1>
           <label className="text-lg text-blue-900 font-bold">Product ID</label>
          <div className="bg-slate-200 border-2 border-b-gray-700 p-1">
            <input
              type="text"
              name="product_id"
              value={form.product_id}
              onChange={handleChange}
              className="w-full p-2"
              required
            />
          </div>
          <label className="text-lg text-blue-900 font-bold">Product Name</label>
          <div className="bg-slate-200 border-2 border-b-gray-700 p-1">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2"
              required
            />
          </div>
           <label className="text-lg text-blue-900 font-bold">Short Description</label>
          <div className="bg-slate-200 border-2 border-b-gray-700 p-1">
            <input
              type="text"
              name="short_description"
              value={form.short_description}
              onChange={handleChange}
              className="w-full p-2"
              required
            />
          </div>
          <label className="text-lg text-blue-900 font-bold">Description</label>
          <div className="bg-slate-200 border-2 border-b-gray-700 p-1">
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2"
              required
            />
          </div>
          <label className="text-lg text-blue-900 font-bold">Image</label>
          <div className="h-24 border-2 border-b-gray-700 p-2">
            <input type="file" name="image" onChange={handleChange} className="w-full" />
          </div>
          <label className="text-lg text-blue-900 font-bold">Product price</label>
          <div className="bg-slate-200 border-2 border-b-gray-700 p-1">
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2"
              placeholder="Enter Price"
              required
            />
          </div>
          <label className="text-lg text-blue-900 font-bold">Select Category</label>
          <select
            name="categories"
            multiple
            value={form.categories}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
          >
            {categories.map((option) => (
              <option key={option.id} value={option.id}>
                {option.category_name}
              </option>
            ))}
          </select>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 px-8 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
