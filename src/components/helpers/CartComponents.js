import React, { useState } from "react";
import { ProductNavButton } from "../ProductPage/ProductNav";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";

const CartComponents = () => {
  const [ItemCount,setItemCount] = useState(1)
  return (
    <div className="text-black mt-4">
      <div className="flex items-center">
        <ProductNavButton takeBack={true}>
          <FaArrowLeft size={20} />
        </ProductNavButton>
        <h2 className="font-josefin mx-auto text-[1.1rem]">My Cart (03)</h2>
      </div>
      <div className="grid grid-cols-1  gap-2 mt-5">
        <div draggabl={true} className="flex gap-2 bg-white border  shadow-lg p-2 rounded-xl">
          {/* image  */}
          <div className="h-[80px] rounded-xl overflow-hidden aspect-square">
            <img
              className="max-w-full object-center max-h-full object-cover"
              src="https://img.drz.lazcdn.com/g/kf/S3612f631a80f476d9091051e7dc1d5d4S.jpg_720x720q80.jpg_.webp"
              alt="img"
            />
          </div>
          {/* other info */}
          <div  className="flex flex-col font-[600]">
            <span>Women Sexy Low-waisted</span>
            <span className=" text-red-400">$33.65</span>
            <div className="self-end justify-between flex items-center gap-[0.4rem]">
              <button disabled={ItemCount<=1}  onClick={()=>{
                
                setItemCount(count=>count-1)
              }} className={`border-2 ${ItemCount<=1?"text-gray-400 ":"text-orange-400 border-orange-400"} transition-colors ease-out duration-300 rounded-lg w-[30px] p-1 h-[28px] flex items-center justify-center text-center`}>
                <FaMinus size={15} fontWeight={400} />
              </button>

              <span className="w-[3ch] text-center">{ItemCount}</span>
              <button  onClick={()=>{
                
                setItemCount(count=>count+1)
              }} className="border-2 text-orange-400 border-orange-400 rounded-lg w-[30px] p-1 h-[28px] flex items-center justify-center text-center">
                <FaPlus fontWeight={400} size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
