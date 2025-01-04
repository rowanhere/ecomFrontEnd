import React, { useEffect, useState } from "react";
import ImageSlider from "../helpers/ImageSlider";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductMain = () => {
  const { id } = useParams();
  const [productInfo,setProductInfo]  = useState(null)
  useEffect(() => {

    const fetchProductInfo = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL + "productDetail?id=" + id;
        const getRecommend = await axios.get(apiUrl);
        setProductInfo(getRecommend.data);
        console.log(getRecommend.data);
        
      } catch (err) {
        console.log("Some error occured");
      }
    };
    fetchProductInfo();
  }, [id]);
  return (
    <main className="mt-4">
      {productInfo && <ImageSlider images={productInfo.images}/>}
      {productInfo && <ProductInfo info={productInfo}/>}
    </main>
  );
};

export default ProductMain;
