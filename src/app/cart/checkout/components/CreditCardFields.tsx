const CreditCardFields: React.FC = () => {
  return (
    <div className="space-y-2 ml-7 ">
      <p className="text-sm text-gray-500">Pay with your Visa, Mastercard.</p>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Cardholder Name"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Card Number"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Expiration Date (MM/YY)"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="CVV"
          type="text"
        />
      </div>
    </div>
  );
};

export default CreditCardFields;
