"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
  heading:string;
  message:string;
  back:boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ show, onClose,heading,message,back }) => {
  const router = useRouter();
  if (!show) return null;
  const handleClose = ()=>{
    onClose();
    if(back){
      router.back();
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-black bg-opacity-50 fixed inset-0" onClick={onClose}></div>
      <div className="bg-[#FFFFFF] rounded-lg p-6 w-[540px] h-[274px] max-w-md mx-auto relative shadow-lg">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[28px] font-inter font-bold mb-2">{heading}</h2>
          <p className="text-gray-600 mb-4">{message}</p>
          <button className="bg-blue-800 text-white-A700 py-2 px-4 rounded hover:bg-blue-600" onClick={handleClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
