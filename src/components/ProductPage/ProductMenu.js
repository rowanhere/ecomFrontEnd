import React from "react";
import { FiShoppingBag } from "react-icons/fi";

export const ProductMenuButton = ({ children,className,type }) =><button type={type || "button"} className={`flex items-center border-2 gap-1 font-semibold justify-center px-4 py-2 flex-1 shrink-0  rounded-lg ${className}`} children={children}/>
;

const ProductMenu = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4 font-josefin text-[1.05rem]">
      <ProductMenuButton className={"text-orange-500 border-orange-500"}>
        <FiShoppingBag size={19} />
        <span>Add to cart</span>
      </ProductMenuButton>
      <ProductMenuButton className={"bg-orange-500 text-white"}>CheckOut</ProductMenuButton>
    </div>
  );
};

export default ProductMenu;
