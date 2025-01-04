import React from "react";
import { FaStar } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

const FilterSideBar = ({
  isFilterVisible,
  setIsFilterVisible,
  insertedFilter,
  setInsertedFilter,
  maxPrice,
  minPrice
}) => {
  const Categories = [
    "Electronic",
    "Food & Drink",
    "Accesories",
    "Beauty",
    "Furniture",
    "Fashion",
    "Health",
    "Stationery",
  ];
 
  const insertCategories = (category) => {
    const categoryArr = insertedFilter.category || [];
    const newCategory = categoryArr.filter((item) => item !== category);
    if (newCategory.length === categoryArr.length) {
      newCategory.push(category);
    }
    setInsertedFilter({ ...insertedFilter, category: newCategory });
  };
  const inputStar = (star) => {
    if (star === insertedFilter.rating) {
      delete insertedFilter.rating;
      setInsertedFilter(insertedFilter);
      return;
    }
    setInsertedFilter({ ...insertedFilter, rating: star });
  };

  return (
    <div
      style={{
        transform: isFilterVisible ? "translateX(0px)" : "translateX(-350px)",
      }}
      className="fixed left-0 transition-transform duration-300 max-w-[350px]  overflow-hidden bg-white shadow-lg bottom-0  p-4 z-[999] rounded-br-xl rounded-tr-xl top-0"
    >
      {/* Overlay */}
      <button
        onClick={() => setIsFilterVisible((prev) => !prev)}
        className="absolute right-0 top-0 p-3 text-orange-400"
      >
        <GiCrossedBones size={20} />
      </button>
      <section className="mt-10 text-xl px-2 flex flex-col gap-5">
        {/* Price */}
        <div>
          <span>Price</span>
          <button className="flex gap-2 mt-1">
            <input
              type="number"
              name="minPrice"
              ref={minPrice}
              defaultValue={insertedFilter.minPrice || ""}

              placeholder="Min"
              onChange={(e) =>
                setInsertedFilter({
                  ...insertedFilter,
                  minPrice: parseInt(e.target.value) || null,
                  maxPrice:parseInt(maxPrice.current.value) || null
                })
              }
              className="w-full font-light  outline-none indent-3 border rounded-xl border-gray-300"
            />
            <span>-</span>

            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              ref={maxPrice}
              defaultValue={insertedFilter.maxPrice || ""}
              onChange={(e) =>
                setInsertedFilter({
                  ...insertedFilter,
                  maxPrice: parseInt(e.target.value) || null,
                  minPrice: parseInt(minPrice.current.value) || null,
                })
              }
              className={`w-full outline-none font-light indent-3 border rounded-xl ${
                parseInt(minPrice.current?.value) >
                parseInt(maxPrice.current?.value)
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
          </button>
        </div>
        {/* Rating */}
        <div>
          <span>Rating</span>
          <div className="flex justify-between items-center gap-2 mt-2">
            {["5", "4", "3", "2", "1"].map((star) => {
              return (
                <button
                  key={star}
                  onClick={() => {
                    inputStar(star);
                  }}
                  className={`flex items-center gap-1 transition-all duration-300 ${
                    insertedFilter.rating === star
                      ? "bg-orange-400 text-white"
                      : "bg-slate-100 text-gray-600 "
                  } rounded-lg px-2`}
                >
                  <span className="text-[1rem] mt-1">
                    {star === 5 ? star : `\u2265` + star}
                  </span>
                  <FaStar className="  text-yellow-300" />
                </button>
              );
            })}
          </div>
        </div>
        {/* Categories */}
        <div>
          <span>Categories</span>
          <div className="mt-2 flex flex-wrap gap-x-[0.4rem] gap-y-3 text-gray-600 font-[400] text-[1rem]">
            {Categories.map((item) => (
              <button
                key={item}
                onClick={() => insertCategories(item)}
                className={`${
                  insertedFilter.category?.includes(item)
                    ? "bg-orange-400 text-white"
                    : "bg-slate-100"
                } rounded-lg px-2 py-1 w-[fit-content]`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterSideBar;
