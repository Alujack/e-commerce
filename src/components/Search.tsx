"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CloseSVG } from "@/assets/images";
import axios from "axios";
import { Product } from "@/common.type";

interface SearchBarProps {
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    const [searchBarValue, setSearchBarValue] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Debounce the search function to prevent too many API calls
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchBarValue) {
                fetchProducts(searchBarValue);
            }
        }, 1); // 300ms delay

        return () => clearTimeout(delayDebounceFn);
    }, [searchBarValue]);

    // Update suggestions based on searchBarValue
    //   useEffect(() => {
    //     if (searchBarValue.length > 0) {
    //       const fetchProducts = async (query: string) => {
    //         setIsLoading(true);
    //         try {
    //         const response = await axios.get(
    //             `http://localhost:8000/api/search/products/?name=${query}`
    //         );
    //         setProducts(response.data);
    //         } catch (error) {
    //         console.error("There was an error fetching the products!", error);
    //         } finally {
    //         setIsLoading(false);
    //         }
    //     }
    //     fetchProducts(searchBarValue)
    //   };
    //   }, [searchBarValue]);

    const fetchProducts = async (query: string) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:8000/api/search/products/?name=${query}`
            );
            setProducts(response.data);
        } catch (error) {
            console.error("There was an error fetching the products!", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex-grow mx-9">
            <div className="flex items-center bg-[#FFFFFF] h-[40px] focus:border-2 border-solid deep_purple_700_pink_400_01_border">
                {/* Prefix */}
                <div className="py-[8px] w-[50px] h-full bg-[#8A8A8A] flex justify-center items-center">
                    <h5 className="text-md text-white-A700 text-center">All</h5>
                </div>

                {/* Input */}
                <input
                    name="search"
                    placeholder={placeholder}
                    value={searchBarValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchBarValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            router.push(`/search?query=${searchBarValue}`);
                        }
                    }}
                    className="flex-grow px-2 text-white-A700 border-none outline-none bg-transparent focus:ring-0 focus:border-none"
                    autoComplete="off"
                />

                {/* Suffix */}
                {searchBarValue.length > 0 ? (
                    <CloseSVG
                        onClick={() => setSearchBarValue("")}
                        height={24}
                        width={24}
                        fillColor="#b0b9beff"
                        className="cursor-pointer mx-2"
                    />
                ) : null}

                <div className="bg-gradient1 w-10 h-full p-2 flex justify-center items-center">
                    <img src="/images/icons/search.svg" alt="icon" />
                </div>
            </div>

            {/* Suggestions & Loading */}
            <ul className="absolute bg-white-A700  w-full mt-1 z-50 max-h-60 overflow-y-auto shadow-2xl">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSearchBarValue(product.name);
                                router.push(`/search?query=${product.name}`);
                            }}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                        >
                            <div className="inline-flex items-start ">
                                <div className=" w-10 h-full p-2 items-center">
                                    <img src="/images/icons/search.svg" alt="icon" />
                                </div>
                                <h4 className="self-center">{product.name}</h4>
                            </div>
                        </li>
                    ))
                ) : (
                    suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSearchBarValue(suggestion);
                                setSuggestions([]);
                                router.push(`/search?query=${suggestion}`);
                            }}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                        >
                            {suggestion}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default SearchBar;
