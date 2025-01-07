import React from "react";
import { ProductNavButton } from "../ProductPage/ProductNav";
import { FaArrowLeft } from "react-icons/fa";
import CartProducts from "./CartProducts";


const CartComponents = () => {
  
  return (
    <div className="text-black mt-4">
      <div className="flex items-center">
        <ProductNavButton takeBack={true}>
          <FaArrowLeft size={20} />
        </ProductNavButton>
        <h2 className="font-josefin mx-auto text-[1.1rem]">My Cart (03)</h2>
      </div>
      <div className="grid grid-cols-1  gap-2 mt-5">
       <CartProducts/>
       <CartProducts/>
      </div>
    </div>
  );
};

export default CartComponents;
