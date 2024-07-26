export default function Checkout(){
  return (<>
      <div className="flex flec-row justify-between items-center px-14 py-10">
        <div className="flex flex-col gap-9">
             <h1 className="block text-3xl font-bold mb-2">Checkout</h1>
              <div className="flex flex-row  gap-3">
                <p className="ml-5 ">Already have account? </p>
                <span><a href="/auth-user/login">login</a></span> 
                <p>for faster checkout</p>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="block text-xl font-bold mb-2">Express Checkout</h1>
                <div className="flex flex-row gap-2">
                  <img src="" alt="paypal" className="w-[107px] h-[26px]" />
                  <img src="" alt="pay with apple" className="w-[107px] h-[26px]" />
                  <img src="" alt="pay with ABA" className="w-[107px] h-[26px]"/>
                  <img src="" alt="pay with ACLEDA" className="w-[107px] h-[26px]"/>
                </div>
              </div>
              <div className="flex flex-col gap-3">
              <label className="block text-xl font-bold mb-2">
                Customer Informations
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="flex flex-col">

              </div>
              <div className="flex flex-col">

              </div>
              <div className="flex flex-col">

              </div>
        </div>
        <div className="flex flex-col">

        </div>
      </div>
  </>)
}