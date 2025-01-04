import React, { useEffect, useRef, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import FilterSideBar from "./FilterSideBar";
import { FaStar } from "react-icons/fa";
import useFilter from "../helpers/useFilter";

const ReturnPriceFilter = ({ minPrice, maxPrice, checkPrice }) => {
 
  return (
    <button
      onClick={checkPrice}
      className="flex gap-1 items-center border min-w-[fit-content] border-orange-600 text-orange-400 rounded-lg py-1 px-3"
    >
      {minPrice && maxPrice ? (
        <>
          {minPrice}
          <span className="w-[10px] mb-1 h-[3px] bg-orange-400"></span>
          {maxPrice} $
        </>
      ) : (
        <>
          {minPrice && `\u2265${minPrice}`}
          {maxPrice && `\u2264${maxPrice}`} $
        </>
      )}
    </button>
  );
};

const SeacrhFilter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [insertedFilter, setInsertedFilter] = useFilter();

  const minPrice = useRef();
  const maxPrice = useRef();
  const checkClickCount = {
    price: () => {
      setInsertedFilter({...insertedFilter,minPrice:null,maxPrice:null});
     minPrice.current.value = ''
     maxPrice.current.value = ''
    },
    rating: () => {
      setInsertedFilter({...insertedFilter,rating:null});
    },
    category: (id) => {
      const newCategoryArr = insertedFilter.category.filter((e) => e !== id);

      setInsertedFilter({ ...insertedFilter, category: newCategoryArr });
    },
  };
 
  return (
    <div className="mt-2  px-2 productScroll font-josefin flex items-center gap-2 overflow-x-scroll">
      {/* Main filter */}
      <button
        onClick={() => setIsFilterVisible((prev) => !prev)}
        className="flex   items-center gap-1 border border-gray-300 rounded-lg py-1 px-3"
      >
        Filter <IoFilterSharp />
      </button>
      {/* Overlay for mistake clicks outside filter panel */}
      {isFilterVisible && (
        <div
          onClick={() => setIsFilterVisible(false)}
          className="fixed z-[999] inset-0"
        ></div>
      )}

      <FilterSideBar
        insertedFilter={insertedFilter}
        setInsertedFilter={setInsertedFilter}
        setIsFilterVisible={setIsFilterVisible}
        isFilterVisible={isFilterVisible}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      {/* Price filter */}
      {(insertedFilter.minPrice || insertedFilter.maxPrice) && (
        <ReturnPriceFilter
          minPrice={insertedFilter.minPrice}
          maxPrice={insertedFilter.maxPrice}
          checkPrice={() => checkClickCount.price()}
        />
      )}
      {/* Rating filter */}
      {insertedFilter.rating && (
        <button
          onClick={() => checkClickCount.rating()}
          className="flex justify-center items-center gap-[0.15rem] border min-w-[fit-content] border-orange-600  text-orange-400 rounded-lg py-1 px-3"
        >
          <span>
            {insertedFilter.rating === 5
              ? insertedFilter.rating
              : `\u2265` + insertedFilter.rating}
          </span>
          <FaStar className=" pb-1" size={19} />
        </button>
      )}
      {/* Category filter */}
      {insertedFilter.category?.length > 0 &&
        insertedFilter.category.map((e) => {
          return (
            <button
              key={e}
              onClick={() => checkClickCount.category(e)}
              className=" border min-w-[fit-content] border-orange-600  text-orange-400 rounded-lg py-1 px-3"
            >
              {e}
            </button>
          );
        })}
    </div>
  );
};

export default SeacrhFilter;
