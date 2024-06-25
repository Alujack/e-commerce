"use client";

import { useRouter } from "next/navigation";
import List from "./list";

export default function App() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
            <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                Customer Information
            </h1>
            <div className="flex flex-row justify-between mr-[15%] ml-[5%]">
                <div className="flex flex-col justify-between self-start w-[70%] gap-[30px]">
                    <div className="flex flex-col justify-between gap-[20px]">
                        <div className="flex flex-row items-center gap-[20px]">
                            <img src="/images/img_image_2.png" alt="null" className="w-[120px]" />
                            <div className="flex-flex-col">
                                <h1 className="text-3xl">Yoeurn Yan</h1>
                                <p>Phnom Penh</p>
                                <p>5 orders</p>
                                <p>Customer for 4 years</p>
                            </div>
                        </div>
                        <h1 className="text-3xl">Customer Notes</h1>
                        <p>Notes</p>
                        <input type="text" className="w-[50%] ml-[10px]" placeholder="Add note about customer" />
                    </div>
                    <h1 className="text-3xl">Customer Orders</h1>
                    <div>
                        <div className="ml-[7%] flex items-center justify-between gap-5 mr-[15%]">
                            <div className="w-[25%] flex justify-between gap-5 self-start">
                                <h4 className="self-start !font-bold">ID Product</h4>
                            </div>
                            <div className="flex w-full justify-between gap-5 self-end mb-[10px]">
                                <h4 className="self-start !font-bold">Date</h4>
                                <h4 className="self-start !font-bold">Order Status</h4>
                                <h4 className="self-start !font-bold">Price</h4>
                            </div>
                        </div>
                        <div className="gap-6 rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800 py-6 sm:py-5">
                            <List />
                            <List />
                            <List />
                            <List />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-centers gap-[30px]">
                    <h1 className="text-4xl">Overview</h1>
                    <div className="flex flex-col gap-[10px]">
                        <p>Address</p>
                        <div className="flex flex-col gap-[3px]">
                            <h3>Khan Tika</h3>
                            <h3>Phnom Penh</h3>
                            <h3>12000</h3>
                            <h3>Cambodia</h3>
                        </div>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <h3>yeantouch12345@gmail.com</h3>
                    </div>
                    <div>
                        <p>Phone</p>
                        <h3>+855 719226094</h3>
                    </div>
                    <button className="text-red" onClick={() => router.push('/deleteCustomer')}>
                        Delete Customer
                    </button>
                </div>
            </div>
        </div>
    );
}
