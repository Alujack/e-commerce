import { useCart } from '@/context/cartcontext';
import React from 'react';



interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  const { cartItems} = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.products.price * item.cart_item.qty,
    0
  );
  

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4">
      <div
        className="fixed inset-0 bg-black-900_01 opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative w-80 bg-white-A700 shadow-lg p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cart Summary</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <img
                src={`http://localhost:8000/${item.products.image}`}
                alt={item.products.name}
                className="w-16 h-16 object-cover"
              />
              <div className="ml-4">
                <p className="text-sm font-medium">{item.products.name}</p>
                <p className="text-sm">${item.products.price}</p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    className="w-12 border border-gray-300 rounded-md p-1"
                    value={item.cart_item.qty}
                    readOnly
                  />
                  <button
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
          <p className="text-green-600 text-sm">Free Shipping</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
