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
      <UserProvider>
        <DataProvider>
        <Provider>
          <Setup />
           <StoreProvider>
          < CartProvider>
           <div className="flex flex-col w-full gap-[11px] bg-gray-300_06">
            <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0">
              <Header/>
              <main className="scrollable-divbody">
                {children}
                <Footer />
              </main>
            </div>
          </div>
          </ CartProvider>
          </StoreProvider>
        </Provider>
        </DataProvider>
      </UserProvider>
      </body>
    </html>
  );
}
export default RootLayout;