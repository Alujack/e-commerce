"use client";
import { useState } from "react";
import SigninForm from "./SignInForm";
import RegisterForm from "./SignUpForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match the duration with the animation time
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-900_01 bg-opacity-50">
      <div className="fixed inset-0" onClick={handleClose}></div>
      <div
        className={`relative bg-white-A700 rounded-lg w-[30%] p-6 shadow-xs shadow-purple-950 ${
          isClosing ? "animate-zoomOut" : "animate-zoomIn"
        }`}
      >
        {isRegister ? (
          <RegisterForm onClose={handleClose} onToggleForm={toggleForm} />
        ) : (
          <SigninForm onClose={handleClose} onToggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
