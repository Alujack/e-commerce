"use client"
import { useEffect } from "react";
import { createPortal } from "react-dom";
interface Props{
    children:React.ReactNode;
    isOpen:boolean;
    onClose:() => void;
}

export default function Modal({ children, isOpen, onClose }:Props) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-900_01 bg-opacity-50" onClick={onClose}>
            <div
                className="bg-white-A700 p-6 rounded-lg shadow-lg max-w-lg w-full animate-zoom-in"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}
