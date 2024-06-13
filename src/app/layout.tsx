"use client"
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";


import  {CartProvider}  from '@/context/cartcontext';
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { SessionProvider } from "next-auth/react";
import { decodeFormState } from "next/dist/server/app-render/entry-base";
export default async function RootLayout({
  children,
    
}: {
  
  body:React.ReactNode;
  children:React.ReactNode;
}) {
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
    
  )
}''