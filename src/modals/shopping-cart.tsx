"use client"

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete :()=>void;
  onAdd:()=>void;
}

const ShopCartModal: React.FC<ModalProps> = ({ isOpen, onClose, onDelete,onAdd }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div>
             <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
           </button>
        </div>
      
    </div>
  );
};

export default ShopCartModal;
