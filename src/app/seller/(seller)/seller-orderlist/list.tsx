import { ShopOrder, User } from "@/common.type";
import product from "@/constants/product";
import Link from "next/link";
// Order response data structure
interface OrderData {
  product_id: string;
  customer_email: string;
  order_total: number;
  quantity: number;
  status: string;
  order_date: string;  // ISO string format
}
export default function List({
  product_id,
  customer_email,
  order_total,
  quantity,
  status,
  order_date
}: OrderData) {
  return (
    <div className="grid grid-cols-8 gap-4 items-center py-2 border-b border-gray-300">
      <div className="col-span-1 flex items-center gap-2">
        <input type="checkbox" />
        <p>{product_id}</p>
      </div>
      <p className="col-span-1">{order_date}</p>
      <p className="col-span-2">{customer_email}</p>
      <p className="col-span-1 text-green-600">Paid</p>
      <p className="text-orange-500 p-1 rounded">{status}</p>
      <p className="col-span-1">{quantity}</p>
      <p className="col-span-1">{order_total}</p>
    </div>
  );
}
