import React from "react";
import { useLocation } from "react-router-dom";
import DefaultMenu from "./helpers/DefaultMenu";
import ProductMenu from "./ProductPage/ProductMenu";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { RiHome7Fill } from "react-icons/ri";
const MenuBar = () => {
  const location = useLocation();
const path = location.pathname;
  
const isHome = path.startsWith("/products/") 
 const userId = localStorage.getItem("userId"); 
  const profileUrl = userId?"/profile":"/profile/login"
    const menus = [
      {
        url: "/",
        icon: RiHome7Fill,
        text: "Home",
      },
      {
        url: "/wishlist",
        text: "Wishlist",
        icon: FaHeart,
      },
      {
        url: "/transcation",
        text: "Transcation",
        icon: IoIosPaper,
      },
      {
        url: profileUrl,
        text: "Profile",
        icon: FaUser,
      },
    ];
  return (
    <footer className={`${isHome || "grid grid-cols-4 gap-5"}  justify-items-center items-center p-3  one-edge-shadow  border-t-[0.3px] border-gray-200 bg-white fixed bottom-0 left-0 right-0`}>
      { isHome ? (
        <ProductMenu />
      ) : (
        <DefaultMenu path={path} menus={menus}/>
      )}
    </footer>
  );
};

export default MenuBar;
