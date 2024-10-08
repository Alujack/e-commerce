"use client"
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { STEPS} from "@/constants/link";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import {useProduct} from "@/context/Product-Post";
import {useState} from "react"
import axios from 'axios';
import ShareModal from '@/modals/publish';
export default function App({children}:{children:React.ReactNode}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [actionButton, setActionButton] = useState("Continue")
    const router = useRouter();
    const {
         product,
         stocks, 
         productImages,
        } = useProduct();

   const dataSubmit = {
      "product": {
        "name": product.name,
        "description": product.description,
        "price": product.price,
      },
      "stocks": stocks.map(stock => ({    
        "variation_option": stock.variation_option,
        "quantity": stock.quantity,
      })),
      "product_images": productImages.map(image => ({
        "url": image.url,
        "angle": image.angle,
      })),
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
        // router.push(STEPS[step].href); // Navigate to the route corresponding to the step
    };

    const handleContinue = () => {
        const nextStep = activeStep + 1;
        if (nextStep < STEPS.length) {
            setActiveStep(nextStep);
            router.push(STEPS[nextStep].href); // Navigate to the next route
        }else{
            setActionButton("Publish")
        }
    };
    const onSubmit = async () => {
    const formData = new FormData();

    // Append JSON data as a string
  
    formData.append('product', JSON.stringify(product));

    stocks.map((stock,index) => {  
        if(stock) 
            formData.append(`stocks[${index}]['variation_option']`, stock.variation_option);
            formData.append(`stocks[${index}]['quantity]`, stock.quantity.toString());

    }),

    // Append product images as files
    productImages.forEach((image, index) => {
        if (image.url) {
            formData.append(`product_images[${index}][url]`, image.url);
            formData.append(`product_images[${index}][angle]`, image.angle);
        }
    });

    try {
        console.log(formData)
        const response = await axios.post(
            `http://localhost:8000/api/product/store/product/post/${product.id}/`,
            formData,
            {
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        if (response.status === 201) {
            console.log("Successfully submitted");
            setIsModalOpen(true);
            router.push('/seller/product-post');
        }
    } catch (error) {
        console.error("Error submitting the form:", error);
    }
};

    const PostProduct = async () =>{
    const response = await axios.post(`http://localhost:8000/api/product/store/product/draft/${product.id}/`)
    if(response){
      console.log("sucess");
    }
  }
    return (
        <>
         <Stepper activeStep={activeStep} alternativeLabel>

                {STEPS.map((step, index) => (
                    <Step key={index} onClick={handleStep(index)}>
                        
                        <StepLabel>
                            <Link href={step.href}>
                            {step.label}
                            </Link>
                        </StepLabel>
                        
                    </Step>
                ))}
            </Stepper>

            <ShareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="w-full items-center">
                <main className="mt-10">{children}</main>
                <div className="flex justify-between px-64 py-16 ">
                    <button 
                        onClick={()=>router.push("/seller/maindash")}
                        className="bg-gray-200 text-gray-700  py-4 px-8 rounded-lg hover:bg-gray-300 border-2 border-sky-500"
                        >
                        Cancel
                    </button>
                    <div className="flex space-x-2">
                    <button 
                    onClick={PostProduct}
                        className="bg-gray-200 text-gray-70 px-8  py-4 rounded-lg hover:bg-gray-300 border-2 border-sky-500"
                    >
                        Draft
                    </button>
                    <button 
                        className="bg-blue-600 text-white px-8 rounded-lg hover:bg-blue-700"
                        onClick={actionButton=="Continue"? handleContinue : onSubmit} 
                    >
                        {actionButton}
                    </button>
                    </div>
                </div>               
            </div>
        </>
    );
}
