import React, { useEffect, useState } from "react";
import SearchBar from "../helpers/SearchBar";
import HomePicked from "../HomePage/HomePicked";
import SeacrhFilter from "./SeacrhFilter";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
const SearchMain = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [getProduct, setGetProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getFilterProducts = async () => {
      const getsearchParams = searchParams;
      console.log(getsearchParams.toString());

      const apiUrl = process.env.REACT_APP_API_URL;
      const UrlToRequest = `${apiUrl}getProduct?${getsearchParams.toString()}`;
      try {
        const requestProduct = await axios.get(UrlToRequest);
        const getRequestedData = requestProduct.data;
        // console.log(getRequestedData);

        setGetProduct(getRequestedData);
        setIsLoading(false);
      } catch (err) {
        console.log("Error occured sent url was", UrlToRequest);
      }
    };

    getFilterProducts();
  }, [searchParams]);

  return (
    <main className="mt-4">
      <SearchBar />
      <SeacrhFilter />
      {isLoading ? (
        <div className="absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2">
          <CgSpinner className="animate-spin" size={50} />
        </div>
      ) : (
        <HomePicked product={getProduct} />
      )}
    </main>
  );
};

export default SearchMain;
