import React from "react";

import { useLocation } from "react-router-dom";
import HomeNav from "./HomePage/HomeNav";
import ProductNav from "./ProductPage/ProductNav";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const isNotHome = path.startsWith("/products/");
  const isSearch = path.startsWith("/search");
 const isProfile = path.startsWith("/profile")
 if (isProfile) return null; 
  return (
   
    <nav className="flex items-center h-[50px] justify-between relative mt-2">
      {isNotHome ? <ProductNav /> :<HomeNav isSearch={isSearch} />}
    </nav>
  
  );
};

export default NavBar;
