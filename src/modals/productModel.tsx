
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg w-11/12 max-w-3xl">
        <button onClick={onClose} className="absolute top-0 right-0 p-2">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
