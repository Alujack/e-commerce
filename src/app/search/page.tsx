
"use client"
import ProductCard from "./ProductCard"
import { CheckBox, Button } from "@/components"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/common.type';
import { useSearchParams } from 'next/navigation';

function ProductSearch() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/search/search_products?q=${query}`
                );
                setProducts(response.data);
            } catch (error) {
                console.error("There was an error fetching the products!", error);
            }
        }
        fetchProducts()

    }, [query]);

    return (
        <main>
            <div className="flex flex-row bg-slate-50 p-[35px]">
                <div className=" w-[20%]  sm:hidden m-[10px] P-[10px]">
                    <div className="flex flex-col bg-slate-50 shadow-xl rounded-[5px] items-center w-[100%] h-[500px]  P-[10px] ">
                        <div className="mt-[15px] mb-[15px]  w-[100%]  sm:hidden p-[10px]">
                            <h1 className=" leading-[21px]">
                                Filter by price
                            </h1>

                        </div>
                        <div className=" mt-[15px] mb-[15px] h-[2px] w-[50%] bg-green-500"></div>
                        <div className="flex flex-col w-full  sm:hidden p-[10px]">
                            <input type="range" className="w-[100%] " />
                            <div className="flex flex-row justify-between">
                                <span>from $500</span>
                                <span> To:$1,000</span>
                            </div>

                        </div>
                        <div className=" w-[100%]  sm:hidden">
                            <div className="flex flex-col justify-between items-center p-[10px]">
                                <p>Color</p>
                                <CheckBox
                                    name="shape"
                                    label="Red(56)"
                                    id="shape"
                                    className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                                />
                                <CheckBox
                                    name="shape"
                                    label="Green(78)"
                                    id="shape"
                                    className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                                />
                                <CheckBox
                                    name="shape"
                                    label="Blue(54)"
                                    id="shape"
                                    className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                                />
                            </div>
                            <div className=" w-[100%]  sm:hidden">
                                <div className="flex flex-col justify-between items-center p-[10px]">
                                    <p>Item Conditions</p>
                                    <CheckBox
                                        name="shape"
                                        label="New(1056)"
                                        id="shape"
                                        className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                                    />
                                    <CheckBox
                                        name="shape"
                                        label="Refurbished(27)"
                                        id="shape"
                                        className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                                    />
                                    <CheckBox
                                        name="shape"
                                        label="Used(45)"
                                        id="shape"
                                        className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
                                    />
                                </div>
                            </div>
                            <Button color="green">Filter</Button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-[80%] bg-slate-50 shadow-xl rounded-[5px] h-auto  p-[20px] m-[10px] sm:w-[100%]">
                    
                    <h1>Results</h1>
                    <p>Check each product page for other buying options.</p>

                    <div className="flex flex-col gap-3">
                        {
                            products.map((item) => (
                                <ProductCard product={item} />
                            ))
                        }

                    </div>
                </div>

            </div>

        </main>)
}

export default ProductSearch;
