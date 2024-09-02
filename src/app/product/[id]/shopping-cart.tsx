import { useCart } from '@/context/cartcontext';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  const { cartItems, FetchCartItem, removeFromCart } = useCart();
  const { data: user } = useRetrieveUserQuery();
  const id = user?.id ? user?.id : '';
  useEffect(() => {
    FetchCartItem(id)
  }, [])
  const subtotal = cartItems.reduce(
    (total, item) => total + item.products.price * item.cart_item.qty,
    0
  );
  const router = useRouter()


  return (
    <div className="fixed inset-0 z-auto flex items-start justify-end top-20 p-4">
      <div
        className="fixed inset-0"
        onClick={onClose}
      ></div>
      <div className="relative w-80 bg-white-A700 shadow-lg p-4 ">
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
                className="w-16 h-16 object-scale-down"
              />
              <div className="ml-4">
                <p className="text-sm font-medium">{item.products.name}</p>
                <p className="text-sm">${item.products.price}</p>
                <div className="flex flex-row gap-3 items-center mt-2">
                  <div className="bg-gray-200 rounded-lg p-[4px]">
                    <input
                      type="number"
                      className="w-12  border border-gray-300"
                      value={item.cart_item.qty}
                      readOnly
                    />
                  </div>
                  <button onClick={() => removeFromCart(item.products.id)}>
                    <div className="h-[30px] w-[30px] border-2 border-gray-400 rounded-xl p-[4px]">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="" stroke="">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"></path> </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Subtotal: ${subtotal}
          </p>
          <p className="text-green-600 text-sm">Free Shipping</p>
          <button onClick={() => router.push('/cart')} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
