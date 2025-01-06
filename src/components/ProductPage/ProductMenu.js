import axios from "axios";
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useParams } from "react-router-dom";
import toastifyAlert from "../helpers/toastifyAlert";
import { CgSpinner } from "react-icons/cg";

export const ProductMenuButton = ({ children, className, type, onClick }) => (
  <button
    onClick={onClick}
    type={type || "button"}
    className={`flex items-center border-2 gap-1 font-semibold justify-center px-4 py-2 flex-1 shrink-0  rounded-lg ${className}`}
    children={children}
  />
);

const ProductMenu = () => {

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const addProductToCart = async () => {
    const url = process.env.REACT_APP_API_URL + "user/cart";
    const getAuthorizationToken = localStorage.getItem("userId");
    if (!getAuthorizationToken) {
      toastifyAlert("error", "Please login!");
      return;
    }
    setIsLoading(true);
    try {
      const sendAddCart = await axios.post(
        url,
        {
          productId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${getAuthorizationToken}`,
          },
        }
      );
      console.log(sendAddCart.data);
      toastifyAlert("success", "Product added to cart");
    } catch (err) {
      console.log(err);
      toastifyAlert("error", "Internal server error");
    }
    setIsLoading(false);
  };
  return (
    <div className="w-full flex justify-between items-center gap-4 font-josefin text-[1.05rem]">
      <ProductMenuButton
        onClick={addProductToCart}
        className={`text-orange-500  border-orange-500`}
      >
        {isLoading ? (
          <CgSpinner size={19} className={`${isLoading && "animate-spin"}`} />
        ) : (
          <>
            <FiShoppingBag size={19} />

            <span>Add to cart</span>
          </>
        )}
      </ProductMenuButton>
      <ProductMenuButton className={"bg-orange-500 text-white"}>
        CheckOut
      </ProductMenuButton>
    </div>
  );
};

export default ProductMenu;
