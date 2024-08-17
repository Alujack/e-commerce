import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import {useState, useEffect} from "react";
import axios from "axios";
export default function CartitemsModal({show}:{show:boolean}) {
    const {data:user} = useRetrieveUserQuery();
    useEffect(()=>{},[])

    if (!show) return null;
    return(
    <>
    <div className="fixed right-2  flex flex-col w-[10%] p-2 bg-gray-500 h-[555px]">

    </div>
    
    </>
    )
}