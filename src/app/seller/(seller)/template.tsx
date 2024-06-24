
import SellerTopBar from "@/components/sellertopbar";
import SideBar from "@/components/sidebar";
import { SELLER_MENU } from "@/constants/link";

export default function Sale({
children    
}:{children:React.ReactNode}) {
  return (
    <div className="w-full">
      <div className="flex items-start md:flex-col">
        <SideBar menu={SELLER_MENU}/>
        <div className="w-px h-full bg-indigo-50_03" />
        <div className="flex-1 md:self-stretch md:p-5">
          <SellerTopBar className = "h-[100px] mb-[35px]"/>
           {children}
        </div>
      </div>
    </div>
  );
}
