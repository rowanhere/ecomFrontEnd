import React from "react";
import { FaArrowLeft, FaBell } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { ProductNavButton } from "../ProductPage/ProductNav";
// import { TriggerCart } from "../../App";
const NavButton = ({ children, onClick, alert }) => {
  return (
    <button
      onClick={onClick}
      children={children}
      className={`border-2 ${
        alert && "alert"
      } relative border-gray-200  text-gray-300 p-2 rounded-lg`}
    />
  );
};
const HomeNav = ({ isSearch, cartAlert, notificationAlert }) => {
  //     const checkCart = useContext(TriggerCart)
  
  // const openCart = ()=>{
  //   checkCart()
  // }
  return (
    <>
        {isSearch ? (
          <ProductNavButton takeBack={true} link={"/"}>
            <FaArrowLeft size={20} />
          </ProductNavButton>
        ) : (
      <div className="flex items-center h-[50px] ">
            {" "}
            <img
              src="/images/logo.png"
              alt="logo"
              className="object-cover w-[50px] aspect-square SpinAround"
            />
            <h2 className="font-josefin font-bold text-xl">Luxeshop</h2>
            </div>
        )}
      <div className="flex gap-4">
        <NavButton alert={cartAlert} >
          <FiShoppingBag size={20} />
        </NavButton>
        <NavButton alert={notificationAlert}>
          <FaBell size={20} />
        </NavButton>
      </div>
    </>
  );
};

export default HomeNav;
