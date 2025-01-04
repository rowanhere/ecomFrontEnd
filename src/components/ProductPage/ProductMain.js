import React, { useEffect, useState } from "react";
import ImageSlider from "../helpers/ImageSlider";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import toastifyAlert from "../helpers/toastifyAlert";

const ProductMain = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL + "productDetail?id=" + id;
        const getAuthorizationToken = localStorage.getItem("userId");

        const getProductDetail = await axios.get(apiUrl);
        getProductDetail.data.liked = false;
        try {
          if (getAuthorizationToken) {
            const likedUrl =
              process.env.REACT_APP_API_URL +
              `user/wishlist/${getProductDetail.data._id}`;
            const getLiked = await axios.get(likedUrl, {
              headers: {
                Authorization: `Bearer ${getAuthorizationToken}`,
              },
            });
            getProductDetail.data.liked = getLiked.data;
          }
        } catch (err) {
          const errMessage = err.response.data
          toastifyAlert("error",errMessage)
        }
        setProductInfo(getProductDetail.data);
        console.log(getProductDetail.data);
      } catch (err) {
        console.log(err);
        toastifyAlert("error","Some error occured")
        }
    };
    fetchProductInfo();
  }, [id]);
  return (
    <main className="mt-4">
      {productInfo && <ImageSlider images={productInfo.images} />}
      {productInfo && <ProductInfo info={productInfo} />}
    </main>
  );
};

export default ProductMain;
