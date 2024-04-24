"use client";
import React from "react";

import SellerTopBar from "@/components/sellertopbar";
import SellerSidebar from "@/components/sellersidebar";

export default function Sale({
children    
}:{children:React.ReactNode}) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <div className="w-full bg-white-A700_01">
      <div className="flex items-start md:flex-col">
        <SellerSidebar></SellerSidebar>
        <div className="flex-1 md:self-stretch md:p-5">
          <SellerTopBar />
           {children}
        </div>
      </div>
    </div>
  );
}
