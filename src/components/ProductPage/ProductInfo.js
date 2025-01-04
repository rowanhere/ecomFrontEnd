import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import ProdcutDes from "./ProdcutDes";
import ProdcutPrice from "./ProdcutPrice";
import ProductTypes from "./ProductTypes";
import ProductReviews from "./ProductReviews";
const ProductTitle = ({ title, liked, addToWishlist }) => {
  const [titleCollapse,setTitleCollapse] = useState(true)
  return (
    <div className="flex justify-between items-center">
      <div className=" text-[1rem] flex items-center gap-1 ">
        <h3 onClick={()=> setTitleCollapse(e=> !e)}  className={titleCollapse ?"w-[25ch] overflow-hidden text-nowrap overflow-ellipsis":" text-left w-[25ch]"}>{title}</h3>
        <div className="flex items-center gap-1 bg-orange-400 rounded-xl w-[fit-content] px-2 text-white">
          <span>3.6</span>
          <FaStar className="text-white" size={17} />
        </div>
      </div>

      <button
        onClick={addToWishlist}
        className={`shrink-0  ${
          liked ? "text-red-400" : "text-gray-400"
        } cursor-pointer`}
      >
        {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
      </button>
    </div>
  );
};
const ProductInfo = ({info}) => {
  const [liked, setIsLiked] = useState(false);
  console.log(info.discount.isActive);
  
  const isDiscounted = info.discount;
  const addToWishlist = () => {
    setIsLiked((prev) => !prev);
  };
  const title = info.title;
  const price = info.price
  const des = info.description
  const ChooseTypes = info.type
  return (
    <div className="my-4 font-poppins font-semibold mb-[5rem]">
      <ProductTitle liked={liked} addToWishlist={addToWishlist} title={title} />
      <ProdcutPrice isDiscounted={isDiscounted} price={price} />
      <ProdcutDes des={des}/>
     {ChooseTypes &&  <div className="mt-2">
        <h3 className="text-[1rem]">Type</h3>
        <div className="grid grid-cols-2 gap-5">
         
         { 
          Object.keys(ChooseTypes).map(e=>{
            return (
              <ProductTypes
              key={e}
              typeTitle={e}
              typeChilds={
                ChooseTypes[e].map(e=>{
                  return {name:e}
                })
              }
            />
            )
          })
         }
          
        </div>
      </div>}
      
      <ProductReviews />
    </div>
  );
};

export default ProductInfo;
