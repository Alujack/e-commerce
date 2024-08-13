import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import React from "react"
import { CartProvider } from '@/context/cartcontext';
import Provider from '@/redux/provider';
import { Setup } from '@/components/utils'; 
import { DataProvider } from "@/context/productContext";
import { UserProvider } from '@/context/UserContext'
import { StoreProvider } from '@/context/Store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ProductProvider} from '@/context/Product-in-store';
import { ProductPostProvider } from "@/context/Product-Post";
import {ProductDetailProvider} from "@/context/productDetail";

import { Inter } from "next/font/google"


const inter = Inter({
      subsets: ['latin'],
      weight: ['400', '500', '700']
  });

async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <title>Techness</title>
        <meta name="description" content="Your website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>

      <ProductDetailProvider>
        <ProductPostProvider>
          <UserProvider>
            <DataProvider>
              <Provider>
                <Setup />
                <StoreProvider>
                  <CartProvider>
                    <ProductProvider> 
                      <div className={`${inter.className} flex flex-col w-full  max-w-[100wv] `}>                     
                          <Header/>
                            <div className="px-20">{children}</div>
                          <Footer/>
                      </div>
                    </ProductProvider>
                  </CartProvider>
                </StoreProvider>
              </Provider>
            </DataProvider>
          </UserProvider>
        </ProductPostProvider>
      </ProductDetailProvider>   
      </body>
    </html>
  );
}
export default RootLayout;