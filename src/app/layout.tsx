"use client"
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

import  {CartProvider}  from '@/context/cartcontext';
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
export default async function RootLayout({
  children,
    
}: {
  
  body:React.ReactNode;
  children:React.ReactNode;
}) {
  const path = usePathname();
  if (path === "/admin" || path=== "/seller" ){
    return (
      <html lang="en">
      <head>
        </head>
        <body>
            <div className="flex flex-col w-full gap-[11px] bg-gray-300_06 ">
               <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0">                
                  <main className = "scrollable-divbody ">{children}</main>                                        
               </div>
           </div>        
        </body>  
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
                  <main className = "scrollable-divbody ">{children}</main>                     
                  <Footer/>                   
               </div>
           </div>        
        </body>
        </CartProvider>
      </SessionProvider>
              
      </html>
    
    )}
}