import { useOrder } from '@/context/CheckoutContext';
const BankTransferFields: React.FC = () => {
  return (
    <div className="space-y-2 ml-7">
      <p className="text-sm text-gray-500">Make payment directly through bank account.</p>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Account holder name"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Account number"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Bank name"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="Routing number"
          type="text"
        />
      </div>
      <div className="border border-current pt-[5px] pb-[5px] pl-9 pr-3 rounded-md mt-3">
        <input
          className="placeholder:text-slate-400 block bg-white w-full sm:text-sm"
          placeholder="IBAN (international)"
          type="text"
        />
      </div>
    </div>
  );
};

export default BankTransferFields;
