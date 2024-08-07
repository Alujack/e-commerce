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
export default function App({children}:{children:React.ReactNode}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [actionButton, setActionButton] = useState("Continue")
    const router = useRouter();
    const {
         product,
         variations,
         productItems,
         variationOptions, 
         stocks, 
         productImages,
         productId} = useProduct();

   const dataSubmit = {
      "product": {
        "name": product.name,
        "description": product.description,
        "price": product.price,
      },
      "product_items": productItems.map(item => ({
        "product": item.product,
        "variation_option": item.variation_option,
      })),
      "stocks": stocks.map(stock => ({
        "product_item_variation": {
          "product": stock.product_item_variation.product,
          "variation_option": stock.product_item_variation.variation_option,
        },
        "quantity": stock.quantity,
      })),
      "product_images": productImages.map(image => ({
        "url": image.url,
        "angle": image.angle,
      })),
    };

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
    const onSubmit = async ()=>{
        console.log(dataSubmit)
        const response = await axios.post(`http://localhost:8000/api/product/store/product/post/${product.id}/`,dataSubmit, {
       headers: {
            'Content-Type': 'application/json',
        },
        });
        if(response.status == 201){
            console.log("succesfully")
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
            <div className="w-full items-center">
                <main className="mt-10">{children}</main>
                <div className="flex justify-between px-64 py-16 ">
                <button 
                    className="bg-gray-200 text-gray-700  py-4 px-8 rounded-lg hover:bg-gray-300 border-2 border-sky-500"
                    >
                    Cancel
                    </button>
                    <div className="flex space-x-2">
                    <button 
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
