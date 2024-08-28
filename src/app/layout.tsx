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
import { Roboto } from "next/font/google";
import { CategoryProvider } from '@/context/CategoryContext';
import { AddressProvider } from '@/context/AddressContext';
import {ProductsCategoryProvider} from "@/context/productListByCategory"
import { OrderProvider } from "@/context/CheckoutContext";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Techness</title>
        <meta name="description" content="Your website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                          <CategoryProvider>
                            <AddressProvider>
                              <ProductsCategoryProvider>
                                <OrderProvider>
                                  <div className={`${roboto.className} flex flex-col w-full max-w-[100wv] bg-[#E3E6E6] `}>                
                                    <Header/>
                                    <div>{children}</div>
                                    <Footer/>
                                  </div>
                                </OrderProvider>
                              </ProductsCategoryProvider>
                          </AddressProvider>
                        </CategoryProvider>
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