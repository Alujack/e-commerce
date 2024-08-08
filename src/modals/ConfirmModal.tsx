import React from 'react';

interface ConfirmModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type:string;
  className:string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ show, onClose, onConfirm, title, message,type, className }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white-A700 w-[450px] h-[200px] rounded-lg shadow-lg max-w-sm ">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700">{message}</p>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-4">
         
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
           <button
            className={ className + "rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"}
            onClick={onConfirm}
          >
            {type}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
