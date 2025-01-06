import React, { useEffect, useState } from "react";
import { WishListProduct } from "./WishListProduct";
import axios from "axios";
import toastifyAlert from "../helpers/toastifyAlert";

const WishListMain = () => {
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const getMyWishList = async () => {
      try {
        const url = process.env.REACT_APP_API_URL + "user/wishlist";
        const getAuthorizationToken = localStorage.getItem("userId");
        if (!getAuthorizationToken) throw new Error("Please login in!");
        const getWishList = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${getAuthorizationToken}`,
          },
        });
        setWishList(getWishList.data);
      } catch (err) {
        console.log(err);
        toastifyAlert("error", err.response.data);
      }
    };
    getMyWishList();
  }, []);
  return (
    <main className="mt-6 ">
      <h2 className="font-[500] font-josefin text-xl">Your Wishlist</h2>
     {wishList.length>0?( <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 items-center font-josefin mb-[6.5rem]">
        {wishList.map((e,index) =><WishListProduct key={index} item={e} />)}
      </div>):(
        <p className="text-orange-500 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center font-medium mt-4">
        Your wishlist is empty! 🙈
      </p>
      )}
    </main>
  );
};

export default WishListMain;
