"use client"
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { steps } from "@/constants/link"; // Ensure steps have a label and a href property
import { useRouter } from 'next/navigation';

import { ProductProvider } from '@/context/productContext';
export default function App({children}:{children:React.ReactNode}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const router = useRouter();

    const handleStep = (step: number) => () => {
        setActiveStep(step);
        router.push(steps[step].href); // Navigate to the route corresponding to the step
    };

    const handleContinue = () => {
        const nextStep = activeStep + 1;
        if (nextStep < steps.length) {
            setActiveStep(nextStep);
            router.push(steps[nextStep].href); // Navigate to the next route
        }
    };

    return (
        <>
        <ProductProvider >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step, index) => (
                    <Step key={index} onClick={handleStep(index)}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="w-full items-center">
                <main>{children}</main>
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
                        onClick={handleContinue} 
                    >
                        Continue
                    </button>
                    </div>
                </div>
                
            </div>

        </ProductProvider >
        </>
    );
}
