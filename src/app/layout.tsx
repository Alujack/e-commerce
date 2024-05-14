"use client"
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";


import  {CartProvider}  from '@/context/cartcontext';
import Header from "@/components/Header";
import Footer from "@/components/Footer"
export default function RootLayout({
  children,
    
}: {
  
  body:React.ReactNode;
  children:React.ReactNode;
}) {
  // const pathname = usePathname();
  // if(pathname !="/"){
  //   return (<> 
  //    <html lang="en">
  //       <body>
  //         <CartProvider>
  //            {children}
  //          </CartProvider>
  //   </body>
  //      </html>
    
  //   </>)
  // }
  return (
  
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        </head>
        <CartProvider>
        <body>
          
            <div className="flex flex-col w-full gap-[11px] bg-gray-300_06 ">
               <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 sm:p-1 bg-gray-300_06 max-w-[100wv] px-3 py-0"> 
                  <Header/> 
                  {children}                     
                  <Footer/>
                   
               </div>

            </div>
        
        </body>
        </CartProvider>
     
              
      </html>
    
  )
}
