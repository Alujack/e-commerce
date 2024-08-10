import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex justify-center">
          <div className="border-2 border-green-400 p-4 rounded-full">
            <img
              src="/path-to-icon.png" // replace with the correct path to your icon
              alt="Product Published"
              className="w-24 h-24"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-blue-500 mt-4">Product Published</h2>
        <p className="text-gray-500 mt-2">Share now!</p>
        <div className="flex justify-around mt-4">
          <a href="#" className="text-blue-600">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-pink-500">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-blue-400">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-red-500">
            <i className="fab fa-pinterest fa-2x"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
