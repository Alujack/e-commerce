export default function App(){
    return (
    <>
        <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="mt-[10px] flex flex-row justify-between ">
                 <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                    Add Product
                </h1>
                <div>
                  <button className="bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300  mr-4">
                    Cancel
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8  rounded">
                    Save
                  </button>
                </div>
               
              </div>
        </div>
        <div className="flex flex-row justify-between p-[20px] ml-[3%] mr-[20%]">
        <div className= "flex flex-col gap-[20px]  w-[60%]">
                <h1>Information</h1>
                <h2>Product ID</h2>
                <input type="text" />
                <h2>Product ID</h2>
                <input type="text" />
                <h2>Product ID</h2>
                <input type="text" />
                <h1>Image</h1>

                <div className="h-[100px] border-2 border-sky-500 p-[10px]">
                    <img src="" alt="" />
                </div>
                <h1>Price</h1>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        <h2>Product price</h2>
                        <input type="text" placeholder="Enter Price"/>
                    </div>
                     <div className="flex flex-col">
                        <h2>Discount Price</h2>
                        <input type="text" placeholder="Price Discount"/>
                    </div>
                </div>
                <input type="radio" />
                <p>This product has multiple option</p>
                <div className="flex flex-col gap-[30px] mb-[20px] border-2 border-sky-500 p-[20px]">
                    <h1>Option1</h1>
                    <div className="flex flex-row  justify-between w-full">
                        <h1>Size</h1>
                        <h1>Value</h1>

                    </div>
                    <div className="flex flex-row justify-between w-full">
                    
                        <p>Quantity</p>
                        <p>s m x xl x</p>
                    </div>
                </div>
                 <div className="flex flex-col gap-[30px] border-2 border-sky-500 p-[20px]">
                    <h1>Shipping</h1>
                    <div className="flex flex-row  justify-between w-full">
                        <h1>Color</h1>
                        <h1>Quantity</h1>

                    </div>
                    <div className="flex flex-row justify-between w-full ">
                    
                        <input type="text" placeholder="Enter Color of Product"/>
                        <input type="text" placeholder="Enter Quantity of Product"/>
                    </div>
                </div>
                    
                
                
                
            
                <button className="bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300  mr-4">
                + Add Category
                </button>
            </div>
            <div className="flex flex-col gap-[50px] ">
              <div className="flex flex-col gap-[25px] border-2 border-sky-500 p-[10px]">
                <h1>Category Visibility</h1>
                <label>Visible on Site</label>
                <input type="radio" />

              </div>
              <div className="flex flex-col gap-[25px] border-2  border-sky-500 p-[10px]">
                <h1>Tags</h1>
                <input type="text" placeholder="Enter tag name"/>
                <h1>Women Clothes</h1>
              </div>
              <div className="flex flex-col gap-[25px] border-2 border-sky-500 p-[10px]">
                <h1>SEO Tags</h1>
                <input type="text" placeholder="Enter tag name"/>
                <h1>Description</h1>
                <div className="w-full h-[100px] border-2 border-sky-500" >
                        <input type="text" />
                </div>
                
              </div>

            </div>
            
          </div>

    </>
    )
}