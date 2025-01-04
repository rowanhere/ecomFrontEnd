import React from "react";
import Products from "../helpers/Products";

const HomePicked = ({ product = [] }) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold font-josefin text-xl">Handpicked for you</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 items-center font-josefin mb-[6.5rem]">
        {product.length === 0 ? (
          <p className="w-full text-nowrap text-red-500 ">
            Guess this is the end of products u can search for!
          </p>
        ) : (
          product.map((item, index) => <Products item={item} key={index} />)
        )}
      </div>
    </div>
  );
};

export default HomePicked;
