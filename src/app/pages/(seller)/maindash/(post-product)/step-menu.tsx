"use client"
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    "Product Information",
    "Product Detail Information",
    "Product Variant Creation",
    "Logistics and Shipment",
    "Bulk Purchase Discounts"
];

const StepperComponent: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={label} onClick={handleStep(index)}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default StepperComponent;
