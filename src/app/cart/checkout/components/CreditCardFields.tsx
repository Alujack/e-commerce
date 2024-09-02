import { useOrder } from '@/context/CheckoutContext';
const CreditCardFields: React.FC = () => {
  const { creditCard, setCreditCard } = useOrder()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreditCard({
      ...creditCard,
      [name]: value
    });


  }
  return (
    <div className="space-y-2 ml-7 ">
      <p className="text-sm text-gray-500">Pay with your Visa, Mastercard.</p>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Cardholder Name"
          value={creditCard.card_holder_name}
          name="card_holder_name"
          type="text"
          onChange={onChange}
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Card Number"
          value={creditCard.card_number}
          name="card_number"
          type="text"
          onChange={onChange}
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Expiration Date (MM/YY)"
          value={creditCard.expired_date}
          name="expired_date"
          type="text"
          onChange={onChange}
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="CVV"
          value={creditCard.cvv}
          name="cvv"
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CreditCardFields;
