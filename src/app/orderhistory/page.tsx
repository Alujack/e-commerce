import {Input} from "@/components"

export default function OrderHistory(){
    return (
       <main>
        <div className="flex flex-col w-screen bg-[#FFFFFF] pr-[20%] p-5">
          <p className="mb-3">Your account - Your order </p>         
           <div className="flex flex-row justify-between mb-5">
            <h4 className="self-start text-3xl mt-3">Your Carts</h4> 
            <div className="flex flex-row gap-3 justify-between">        
            <Input
                  name="search"
                  placeholder={`Search Techness`}
                  prefix={
                    <>
                    <div className=" w-10 h-full p-2 mr-4"> 
                      <img src="/images/icons/search.svg" alt="icon" />
                    </div>
                    </>
                  }
                  
                  className="h-[40px] px-0 text-black-900_01 border-2 border-solid deep_purple_700_pink_400_01_border"
            />
            <button className="h-[40px] rounded-lg bg-[#303333] text-white-A700 px-4 p-2">Search Orders</button>
            </div>
           </div>
           <div className="flex flex-row justify-between mb-3 border-b-2 cursor-pointer border-b-slate-400 ">
            <ul className="hover:underline ">Orders</ul>
            <ul className="hover:underline ">Buy Again</ul>
            <ul className="hover:underline "> Not Yet Shipped</ul>
            <ul className="hover:underline "> Digital Orders</ul>
            <ul className="hover:underline "> Local Store Orders</ul>
            <ul className="hover:underline "> Cancelled Orders</ul>      
           </div>
           <div className="flex flex-col h-96 gap-5 mt-5 items-center">
            <p>Looks like you haven't placed an order in the last 3 months. View orders in 2024</p>
            <div className="w-full border-l-[16px] border-2 border-gray-600 border-l-green-700_01 py-5 px-4 rounded-lg">
              <h1>Your Orders has been Achieved</h1>
              <p>There is no more longer appeared in your account</p>              

            </div>


           </div>
        </div>
       </main>
    )
}