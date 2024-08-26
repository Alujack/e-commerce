"use client";
import { useState } from "react";
import SigninForm from "./SignInForm";
import RegisterForm from "./SignUpForm";

// Define the props for the modal
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-900_01 bg-opacity-50">
      <div className="relative bg-white-A700 rounded-lg  w-[30%] p-6 animate-zoomIn shadow-xs shadow-purple-950">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          X
        </button>
        {isRegister ? (
          <RegisterForm onClose={onClose} onToggleForm={toggleForm} />
        ) : (
          <SigninForm onClose={onClose} onToggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
