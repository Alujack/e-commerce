"use client"
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import  {CartProvider}  from '@/context/cartcontext';
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { DataProvider } from "@/context/productContext";


export default async function RootLayout({
  children,
    
}: {
  
  body:React.ReactNode;
  children:React.ReactNode;
}) {
  const path = usePathname();
  const patharray = path.split("/");
  if (patharray[1] === "admin" || patharray[1]=== "seller" ){
    return (
      <html lang="en">
      <head>
        </head>
        <DataProvider>
        <body>
            <div className="flex flex-col w-full gap-[11px] bg-gray-300_06 ">
               <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0">                
                  <main className = "scrollable-divbody ">{children}</main>                                        
               </div>
           </div>        
        </body> 
         </DataProvider>
      </html>
    )
  }else{
  return (
  
      <html lang="en">
      <head>
        </head>
     <SessionProvider>
        <CartProvider>
              
        <body>
            <div className="flex flex-col w-full gap-[11px] bg-gray-300_06 ">
               <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0"> 
                  <Header/> 
                  <main className = "scrollable-divbody ">{children}<Footer/></main>                     
                                   
               </div>
           </div>        
        </body>
     
        </CartProvider>
      </SessionProvider>
              
      </html>
    
    )}
}