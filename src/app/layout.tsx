"use client"
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
  header,
  body,
  footer,
    
}: {
  header:React.ReactNode;
  footer:React.ReactNode;
  body:React.ReactNode;
  children:React.ReactNode;
}) {
  const pathname = usePathname();
  if(pathname !="/"){
    return <>
     <html lang="en">
        <body>
    {children}
    </body>
       </html>
    </>
  }
  return (
      <html lang="en">
        <body>
            <div className="flex flex-col w-full gap-[11px] bg-gray-300_06 ">
          <div className="flex flex-col w-full gap-[5px] mx-auto md:p-5 bg-gray-300_06 max-w-[100wv] px-3 py-0"> 
             {header}
             {body}         
             {footer}
         </div>

      </div>

        </body>
   
     
      
      </html>
  )
}
