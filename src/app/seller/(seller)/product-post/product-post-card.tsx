"use client"

import Modal from "@/modals/editpost";
import React, { useState } from 'react';
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: string;
  product_id: string;
}

export default function card({product}:{product:Product}){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (<>
        <div className="flex bg-white-A700 flex-col gap-3 p-4 rounded-lg">
            <div className="p-2 self-center ">
                <img src={`http://localhost:8000/${product.image}/`} alt="product" className="object-cover" />
            </div>
            <div className="flex flex-col gap-3 items-start">
                <h1>{product.name}</h1>
                <p className="text-blue-500">$ {product.price}</p>
            </div>
            <Modal 
                isVisible={isModalVisible} 
                onClose={closeModal}>       
            </Modal>
            <button onClick={openModal} className="self-center bg-gray-200 text-black p-3 rounded-lg hover:bg-gray-300  mr-4">
                    Edit Product
            </button>

        </div>
    </>)
}