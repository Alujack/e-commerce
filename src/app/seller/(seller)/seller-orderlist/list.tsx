import { ShopOrder,User } from "@/common.type";
interface Order{
  order:ShopOrder
  customer:User
}
export default function List({order,customer}:Order){
    return (
    <>
    <div className="ml-[5%] flex items-center justify-between gap-5 mr-[15%] mt-[20px]">
                    <input type="checkbox"/>
                      <div className="w-[17%] flex justify-between gap-5 self-start "> 
                        <p className="self-end ">
                          
                          </p>
                      </div>     
                      <div className="flex w-full justify-between gap-5 self-end ">
                          <p className="self-start ">
                           {order.order_date}
                          </p>
                          <p  className="self-start ">
                            {customer.first_name} - {customer.last_name}
                          </p>
                          <p className="self-start text-[#06A561] ">
                              paid
                          </p>
                          <p className="self-start text-[#f3e1ff] bg-orange-500 p-[3px]">
                            {order.status}
                          </p>
                          <p className="self-start  ">
                            {order.order_total}
                          </p>
                        </div>
        </div>
    </>)
}