"use client";

import { CartProvider } from '@/context/cartcontext';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayoutClient({ children }:{children:React.ReactNode}) {
  const path = usePathname();
  const patharray = path.split("/");
  
  if (patharray[1] === "admin" || patharray[1] === "seller") {
    return (
      <div className="flex flex-col w-full gap-[11px] bg-gray-300_06">
        <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0">
          <main className="scrollable-divbody">{children}</main>
        </div>
      </div>
    );
  } else {
    return (
      <SessionProvider>
        <CartProvider>
          <div className="flex flex-col w-full gap-[11px] bg-gray-300_06">
            <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0">
              <Header />
              <main className="scrollable-divbody">
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </CartProvider>
      </SessionProvider>
    );
  }
}
