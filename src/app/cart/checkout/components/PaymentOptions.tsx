"use client"
import React, { useState } from 'react';
import BankTransferFields from './BankTransferFields';
import CreditCardFields from './CreditCardFields';
const PaymentOption: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('bank-transfer');

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.id);
  };

  return (
    <div className="my-3">
      <h2 className="flex justify-between text-lg hover:underline">Payment option</h2>
      <form className="space-y-4 ">
        <div className="flex items-center">
          <input
            id="cod"
            name="payment"
            type="radio"
            className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 transition-[0.5]"
            checked={selectedPayment === 'cod'}
            onChange={handlePaymentChange}
          />
          <label className="ml-3 block text-sm font-medium text-gray-700">Cash On Delivery</label>
        </div>
        {selectedPayment === 'cod' && (
          <p className="ml-7 text-sm text-gray-500">Pay with cash upon delivery.</p>
        )}

        <div className="flex items-center">
          <input
            id="bank-transfer"
            name="payment"
            type="radio"
            className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 transition-[0.5]"
            checked={selectedPayment === 'bank-transfer'}
            onChange={handlePaymentChange}
          />
          <label className="ml-3 block text-sm font-medium text-gray-700">Direct bank transfer</label>
        </div>
        {selectedPayment === 'bank-transfer' && <BankTransferFields />}

        <div className="flex items-center ">
          <input
            id="credit-card"
            name="payment"
            type="radio"
            className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 transition-[0.5]"
            checked={selectedPayment === 'credit-card'}
            onChange={handlePaymentChange}
          />
          <label className="ml-3 block text-sm font-medium text-gray-700">Credit/Debit card</label>
        </div>
        {selectedPayment === 'credit-card' && <CreditCardFields />}
      </form>
    </div>
  );
};

export default PaymentOption;
