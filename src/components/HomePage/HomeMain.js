import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import HomeCategories from "./HomeCategories";
import HomePicked from "./HomePicked";
import SearchBar from "../helpers/SearchBar";
import axios from "axios";

const Location = ({ deliveryLocation }) => {
  return (
    <div className="mt-3 w-full flex items-center gap-[0.08rem] font-inter font-medium text-[1.05rem] text-nowrap">
      <IoLocationSharp size={20} className="text-orange-400 shrink-0" />
      <span className={`${deliveryLocation ? "text-gray-400" : ""}`}>
        Deliver to
      </span>
      <div className="ml-1 font-bold overflow-hidden text-ellipsis">
        {deliveryLocation ? (
          deliveryLocation
        ) : (
          <button className="text-underline underline text-gray-500">
            Set delivery location
          </button>
        )}
      </div>
    </div>
  );
};
const HomeMain = () => {
  const [deliveryLocation, setDeliveryLocation] = useState(null);
  const [products,setProducts] = useState([])
  useEffect(() => {
    const fetchRecommend = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL + "getRecommend";
        const getRecommend = await axios.get(apiUrl);
        setProducts(getRecommend.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecommend()
  }, []);
  return (
    <>
      <main className="mt-4">
        <SearchBar />
        <Location deliveryLocation={deliveryLocation} />
        <HomeCategories />
        <HomePicked product={products}/>
      </main>
    </>
  );
};

export default HomeMain;
