"use client";

import { useState, useEffect } from "react";
import { CloseSVG } from "@/assets/images";
import { Img, Heading, Input } from "@/components";
import Link from "next/link";
import Stockpro from "./stockproduct";
import axios from "axios";
import { useStore } from "@/context/Store";
import ConfirmModal from "@/modals/ConfirmModal";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: string;
  product_id: string;
}

export default function ProductStock() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [pendingDeleteIds, setPendingDeleteIds] = useState<Set<string>>(new Set());
  const [ productId, setProductId ] = useState<string>("");

  const [showConfirm, setShowConfirm] = useState(false);

  const handleOpenConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);
  const { store } = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/store/${store.id}/product/`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [store.id]);
  
  const handleConfirmDelete = async () => {
    handleCloseConfirm(); // Close the modal
    const productIds = Array.from(selectedProducts);
    console.log("Product IDs to delete:", productIds);
    try {
      await axios.delete('http://localhost:8000/api/product/store/product/delete', { data: { productIds } });
      setProducts(prevProducts => prevProducts.filter(product => !selectedProducts.has(product.id)));
      setSelectedProducts(new Set());
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };

  const handleDelete = () => {
    // Set the IDs of the products to be deleted and open the confirmation modal
    setPendingDeleteIds(selectedProducts);
    handleOpenConfirm();
  };

  const handleProductCheck = (productId: string, isChecked: boolean) => {
    setSelectedProducts((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (isChecked) {
        newSelected.clear(); // Ensure only one product is selected
        newSelected.add(productId);
      } else {
        newSelected.delete(productId);
      }
      return newSelected;
    });
  };

  const handleConfirmPost = () => {
    const productIds = Array.from(selectedProducts);
    if (productIds.length > 0) {
      setProductId(productIds[0]); // Set the first (and only) selected product
      handleCloseConfirm();

      console.log(productId);
    } else {
      console.error("No product selected");
    }
  };

  const handlePost = () => {
    if (selectedProducts.size === 1) {
      handleConfirmPost();
    } else {
      console.error("Please select exactly one product to post");
    }
  };
  const PostProduct = async () =>{
    const response = await axios.post(`http://localhost:8000/api/product/store/product/publish/${productId}/`)
    if(response){
      console.log("sucess");
    }
  }

  return (
    <div className="flex flex-col bg-white-A700_01 gap-[29px] p-[23px] sm:p-5 rounded-[10px] ml-[5%]">
      <div className="mt-[10px] flex flex-row justify-between">
        <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">Product Stock</h1>
        <div className="flex flex-row gap-4">
          <Link href={`/seller/add-product/${productId}`} className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-4 rounded">
            Publish
          </Link>
          <Link href="/seller/product-stock/add-product-in-stock" className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-4 rounded">
            + Add Product
          </Link>
          <button onClick={handlePost} className="bg-green-500 hover:bg-green-700 text-[#d3fee0] font-bold px-4 rounded">
            Post
          </button>
          <button onClick={PostProduct} className="bg-green-500 hover:bg-green-700 text-[#d3fee0] font-bold px-4 rounded " >Post Product</button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex gap-[6px] justify-between">
          <h1>Filter</h1>
          <span>+</span>
        </div>
        <Input
          name="Group 8"
          placeholder={`Search for product`}
          value={searchBarValue}
          onChange={(e: any) => setSearchBarValue(e.target.value)}
          prefix={
            <Img
              src="/images/img_search.svg"
              width={20}
              height={20}
              alt="search"
              className="h-[20px] w-[20px] cursor-pointer"
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
            ) : null
          }
          className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-2 border-sky-500 rounded-[15px]"
        />
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold px-4 rounded mr-[10px]">
            edit
          </button>
          <ConfirmModal
              show={showConfirm}
              onClose={handleCloseConfirm}
              onConfirm={handleConfirmDelete}
              title="Delete Items"
              message={`Are you sure you want to delete ${pendingDeleteIds.size} product(s)?`}
              type="Delete"
              className="bg-red_A700 text-white-A700 p-2 "
          />
          <button onClick={handleDelete} className="bg-red-500 hover:bg-blue-700 text-[#d3fee0] font-bold px-4 rounded">
            delete
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between gap-5 mr-[37px]">
          <div className="ml-7 flex w-[30%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
            <Heading as="p" className="mr-[37px] self-end !font-bold md:mr-0">Product</Heading>
          </div>
          <div className="flex w-[65%] justify-between gap-5 self-end md:w-full mr-[4%]">
            <Heading as="h4" className="self-end !font-bold">Inventory</Heading>
            <Heading as="h4" className="self-end !font-bold">Color</Heading>
            <Heading as="h5" className="self-start !font-bold">Price</Heading>
            <Heading as="p" className="self-end !font-bold">ID Product</Heading>
          </div>
        </div>
        <div className="h-2 w-full bg-indigo-50_03" />
        <div className="rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800 py-6 sm:py-5 mr-[37px]">
          {products.map((product, index) => (
            <Stockpro
              key={index}
              product={product}
              onProductCheck={handleProductCheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
