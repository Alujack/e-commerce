"use client"
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";


import  {CartProvider}  from '@/context/cartcontext';
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import SessionWrapper from "@/components/SessionWraper"
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
        </head>
        <SessionWrapper>
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
     </SessionWrapper>
              
      </html>
    
  )
}
