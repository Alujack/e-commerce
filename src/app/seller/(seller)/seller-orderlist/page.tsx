"use client";

import { useState, useEffect } from "react";
import { CloseSVG } from "@/assets/images";
import { Img, Input } from "@/components";
import List from "./list";
import axios from "axios";
import { useStore } from "@/context/Store";
import { ShopOrder, User } from "@/common.type";

interface OrderData {
  product_id: string;
  store_name: string;
  customer_email: string;
  order_total: number;
  quantity: number;
  status: string;
  order_date: string;
}

interface ApiResponse {
  order_line: OrderData[];
}

export default function ProductStock() {
  const { store } = useStore();
  const [searchBarValue, setSearchBarValue] = useState("");
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/store/product/order-list?store=${store.id}`
        );
        if (response.data) {
          setOrders(response.data);
        } else {
          console.log("No orders found");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [store.id]);

  return (
    <div className="flex flex-col gap-[29px] p-[23px] bg-slate-50 sm:p-5 ml-[5%] rounded-lg">
      <div className="flex flex-row justify-between items-center ml-[5%] mr-[5%] ">
        <div className="flex gap-[6px] justify-between">
          <h1>Filter</h1>
          <span>+</span>
        </div>
        <Input
          name="Group 8"
          placeholder={`Search for product`}
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          prefix={
            <Img
              src="/images/img_search.svg"
              width={20}
              height={20}
              alt="search"
              className="h-[20px] w-[20px] cursor-pointer"
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
            ) : null
          }
          className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-2 border-sky-500 rounded-[15px]"
        />
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold px-4 rounded mr-[10px]">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-blue-700 text-[#d3fee0] font-bold px-4 rounded">
            Delete
          </button>
        </div>
      </div>

      <div>
        <div className=" border-b-slate-600 py-4">
          <div className="grid grid-cols-8 gap-4 font-bold">
            <h4 className="col-span-1">ID Product</h4>
            <h4 className="col-span-1">Date</h4>
            <h4 className="col-span-2">Customer</h4>
            <h4 className="col-span-1">Payment Status</h4>
            <h4 className="col-span-1">Order Status</h4>
            <h4 className="col-span-1">Quantity</h4>
            <h4 className="col-span-1">Total</h4>
          </div>
        </div>

        <div className="border-2 border-solid border-blue_gray-800 py-6 sm:py-5 rounded-bl-[14px] rounded-br-[14px]">
          {orders.map((orderLine, index) => (
            <List
              key={index}
              product_id={orderLine.product_id}
              customer_email={orderLine.customer_email}
              order_total={orderLine.order_total}
              quantity={orderLine.quantity}
              status={orderLine.status}
              order_date={orderLine.order_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
