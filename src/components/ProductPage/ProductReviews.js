import React, { useState } from "react";
import { FaAngleDoubleDown, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import MyCommentProduct from "./MyCommentProduct";

const FillStart = ({ rating }) => {
  const { floorRating, isHalfRating } = rating;

  return (
    <>
      {floorRating.map((_, index) => (
        <FaStar key={index} />
      ))}
      {isHalfRating && <FaStarHalfAlt />}
    </>
  );
};

const ProductReviews = () => {
  const roundRating = (rating) => {
    const floorRating = parseInt(Math.floor(rating)) || 0;
    const isHalfRating = !(floorRating.toString() === rating);
    return {
      floorRating: Array(floorRating).fill(floorRating),
      isHalfRating,
    };
  };
  const reviews = [
    {
      name: "Sarah",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      rating: "4.5",
      description:
        "This t-shirt is a wardrobe staple. The material is soft and breathable, making it perfect for everyday wear. The V-neck design adds a touch of elegance without being too revealing. It fits true to size and has a flattering cut that works well for various body shapes. The color selection is versatile, ranging from neutral tones to vibrant hues. The only downside is that the fabric is slightly thinner than expected, which might not be ideal for those who prefer a more substantial feel.",
    },
    {
      name: "Amy",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      rating: "3.5",

      description:
        "Madewell’s Perfect Crew Neck Tee lives up to its name. The quality is impressive, with a thick, durable fabric that holds its shape even after multiple washes. The crew neck design is classic and pairs well with almost any outfit, whether casual or dressed up. The fit is relaxed but not baggy, providing a comfortable yet polished look. The only minor drawback is that the t-shirt may shrink slightly after washing, so consider sizing up if you’re between sizes.",
    },
    {
      name: "Rose",
      rating: "4",

      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      description:
        "T-Shirt is an excellent budget-friendly option. The fabric is soft, smooth, and surprisingly durable for the price. It has a slightly boxy fit that gives it a trendy, laid-back vibe, perfect for casual days. The range of colors is extensive, making it easy to find the perfect shade to match your style. However, the cut might not be as tailored as other options, and it runs a bit large, so you might want to size down for a more fitted look.",
    },
  ];
  const [isMore, setIsMore] = useState(false);
  return (
    <div className="mt-3">
      <h3 className="text-[1rem]">Reviews</h3>
      <MyCommentProduct/>
      <div>
        {reviews.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center mt-5 gap-4 font-poppins font-[500] w-full">
                <img
                  className="w-[40px] aspect-square rounded-[50%]"
                  src={item.img + "&" + index}
                  alt={item.name}
                />
                <span>{item.name}</span>
                <div className="ml-auto text-yellow-400 flex items-center gap-1">
                  <FillStart rating={roundRating(item.rating)} />
                </div>
              </div>
              <div className=" leading-[17.5px] relative reveiwScroll text-sm mt-2  text-gray-600 ">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center text-orange-500 border-t-2 mt-2 pt-2 font-josefin">
        {isMore ? (
          <button className="flex items-center">
            Show more <FaAngleDoubleDown size={15} />
          </button>
        ) : (
          <p>Seems you have reached the end!</p>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
