import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../HomePage/HomeNav";
export const ProductNavButton = ({ children, takeBack, link }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => takeBack && navigate(link || -1)}
      className="border text-gray-500 p-2 rounded-[50%]"
    >
      {children}
    </button>
  );
};
const ProductNav = () => {
  return (
    <>
      <ProductNavButton takeBack={true}>
        <FaArrowLeft size={20} />
      </ProductNavButton>
      <div className="font-josefin font-semibold text-lg">Detail Product</div>
      <NavButton alert={true}>
        <FiShoppingBag size={22} />
      </NavButton>
    </>
  );
};

export default ProductNav;
