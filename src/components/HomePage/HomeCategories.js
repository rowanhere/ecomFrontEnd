import React from "react";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  const categories = [
    {
      img: "/images/electronic.png",
      text: "Electronic",
    },
    {
      img: "/images/food.png",
      text: "Food & Drink",
    },

    {
      img: "/images/accesories.png",
      text: "Accesories",
    },
    {
      img: "/images/beauty.png",
      text: "Beauty",
    },
    {
      img: "/images/furniture.png",
      text: "Furniture",
    },
    {
      img: "/images/fashion.png",
      text: "Fashion",
    },
    {
      img: "/images/health.png",
      text: "Health",
    },
    {
      img: "/images/stationery.png",
      text: "Stationery",
    },
  ];
  return (
    <div className="mt-4 grid grid-cols-4 gap-y-4 gap-x-6 font-poppins  font-medium text-nowrap text-[0.8rem]">
      {categories.map((item, index) => {
        return (
          <Link
            key={index}
            to={"/search?category="+encodeURIComponent(item.text)}
            className="flex flex-col items-center"
          >
            <div className="w-[60px] aspect-square border flex justify-center items-center border-gray-400 rounded-[50%] mb-2">
              <img
                src={item.img}
                alt={item.text}
                className="h-[55%] aspect-square"
              />
            </div>
            <p>{item.text}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeCategories;
