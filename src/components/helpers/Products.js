import React from "react";
import { BsBagPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
// import { ImSpinner10 } from "react-icons/im";
import { Link } from "react-router-dom";
import { useAddToCart } from "./addToCart";

const Products = ({ item }) => {
    const AddToCart = useAddToCart();
  return (
    <Link
      to={`/products/${item.id}`}
      preventScrollReset={false} 
      className="h-[fit-content] border-b shadow-md overflow-hidden bg-gray-100 rounded-xl  rounded-br-[40px]"
    >
      <div className="flex justify-center ">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="min-h-[100%] min-w-[100%] object-contain mix-blend-multiply aspect-square"
        />
      </div>
      <div className="bg-white h-full rounded-t-[20px] p-4">
        <div className=" text-nowrap text-[1.1rem] font-bold overflow-ellipsis overflow-hidden">
          {item.title}
        </div>
        <span className="capitalize text-sm text-gray-500">
          {item.category}
        </span>
        <div className="flex justify-between items-center mt-1">
          <div className="text-[0.98rem] ">
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" size={20} />
              {item.rating.rate}({item.rating.count})
            </div>
            <div className="mt-1 text-red-500">${item.price}</div>
          </div>
          <button className=" outline-none bg-orange-500 text-white p-[0.45rem]  rounded-[0.55rem] rounded-br-[1.6rem]" onClick={(e)=> {
            e.preventDefault()
            AddToCart(item.id)
          }} >
          <BsBagPlus size={30} className="p-[0.2rem]"/>
          {/* <ImSpinner10 size={30} className="p-[0.2rem] animate-spin" /> */}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Products;
