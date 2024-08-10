
import SellerTopBar from "@/components/sellertopbar";
import SideBar from "@/components/sidebar";
import { SELLER_MENU } from "@/constants/link";

export default function Sale({
children    
}:{children:React.ReactNode}) {
  return (
      <div className="flex items-start  md:flex-col px-10">
        <SideBar menu={SELLER_MENU}/>
        <div className="w-px h-full bg-indigo-50_03" />
        <div className="flex-1 md:self-stretch md:p-5 border-2 border-l-deep_purple-700_05 ">
          <SellerTopBar className = "h-[100px] mb-[35px]"/>
          <div>{children}</div>
        </div>
      </div>
  );
}
