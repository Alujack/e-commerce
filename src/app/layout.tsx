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

const roboto = Roboto({
  subsets: ['latin'], // Specify the subsets you want to use
  weight: ['400', '700'], // Specify the weights you want to use
  style: ['normal', 'italic'], // Specify the styles you want to use
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
                                <div className={`${roboto.className} flex flex-col w-full max-w-[100wv] bg-[#E3E6E6] `}>                     
                                  <Header/>
                                  <div>{children}</div>
                                  <Footer/>
                                </div>
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