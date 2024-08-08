import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="relative w-[1005px] h-[718px] bg-white-A700 p-4 rounded-[15px] shadow-lg">
       <div className="flex flex-col p-5 bg-white-A700_01">
                    <div className="flex flex-row justify-between mb-8">
                        <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">Edit Postt</h1>
                        <div className="flex flex-rows judtify-between">
                            <button onClick={onClose} className="bg-gray-200 text-black p-2 px-2 rounded-lg hover:bg-gray-300  mr-4">
                                Cancel
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-2 px-2  rounded">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="flex felx-row justify-between">
                        <div className="flex flex-col items-start">
                            <div className="top-0 flex flex-col gap-4">
                                <h1 className ="text-xl text-[#343C6A] font-bold inter decoration-8">Primary Details</h1>
                                <div className="flex flex-row gap-5">
                                    <label className="text-[#343C6A] self-center font-bold inter decoration-8">Product name :</label>
                                    <div className="bg-slate-200 border-2 border-b-blue-500 p-1" >
                                        <input type="text" value="" placeholder=" Product name" className="w-full p-2 rounded-lg border border-gray-500"/>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <label className="text-[#343C6A] self-center font-bold inter decoration-8">Product ID :</label>
                                    <div className="bg-slate-200 border-2 border-b-blue-500 p-1" >
                                        <input type="text" value="" placeholder=" Product ID" className="w-full p-2 rounded-lg border border-gray-500"/>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <label className="text-[#343C6A] self-center font-bold inter decoration-8">Product Category : </label>
                                    <div className="bg-slate-200 border-2 border-b-blue-500 p-1" >
                                        <input type="text" value="" placeholder=" Product category" className="w-full p-2 rounded-lg border border-gray-500"/>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <label className="text-[#343C6A] self-center font-bold inter decoration-8">Price : </label>
                                    <div className="bg-slate-200 border-2 border-b-blue-500 p-1" >
                                        <input type="text" value="" placeholder=" $ 12" className="w-full p-2 rounded-lg border border-gray-500"/>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <label className="text-[#343C6A] self-center font-bold inter decoration-8">Opening Stock : </label>
                                    <div className="bg-slate-200 border-2 border-b-blue-500 p-1" >
                                        <input type="text" value="" placeholder="40" className="w-full p-2 rounded-lg border border-gray-500"/>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-20">
                            <div className="self-center">
                                <img src="" alt="Product" className="border-2 border-blue-400 w-[150px] h-[150px]"/>
                            </div>
                            <div>
                                <h1 className ="text-[16px] text-[#343C6A] font-bold inter decoration-8 mb-4 ">Product Gallery</h1>
                                <div className= "grid grid-cols-2 gap-3">
                                <img src="" alt="" className="w-[150px] h-[150px]" />
                                <img src="" alt="" className="w-[150px] h-[150px]" />
                                <img src="" alt="" className="w-[150px] h-[150px]" />
                                <img src="" alt="" className="w-[150px] h-[150px]" />

                            </div>
                            </div>
                           
                        </div>
                    </div>


                </div>   
      </div>
    </div>
  );
};

export default Modal;
