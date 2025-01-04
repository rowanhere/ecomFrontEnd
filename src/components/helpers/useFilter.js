import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const checkParams = (params) => {
    const filterObj = Object.fromEntries(params);
    const tempSet = new Set(["category", "minPrice", "maxPrice", "rating","keyword"]);

    Object.keys(filterObj).forEach((key) => {
      if (!filterObj[key] || !tempSet.has(key) ) {
        delete filterObj[key];
      }
    
    });
    if (filterObj.category) filterObj.category = filterObj.category.split(",");

    if (filterObj.rating && (filterObj.rating > 5 || isNaN(filterObj.rating)))
      delete filterObj.rating;

    if (filterObj.minPrice && isNaN(filterObj.minPrice))
      delete filterObj.minPrice;
    if (filterObj.maxPrice && isNaN(filterObj.maxPrice))
      delete filterObj.maxPrice;

    if (
      filterObj.minPrice &&
      filterObj.maxPrice &&
      parseInt(filterObj.minPrice) > parseInt(filterObj.maxPrice)
    )
      delete filterObj.maxPrice;
    return filterObj;
  };

  useEffect(() => {
    const cleanedParams = checkParams(searchParams);
    
    const filterParams = new URLSearchParams(cleanedParams);

    if (filterParams.toString() !== searchParams.toString()) {
      
      setSearchParams(filterParams);
    }
  }, [searchParams, setSearchParams]);

  const setFilter = (newValue) => {
    if (
      newValue.category &&
      Array.isArray(newValue.category) &&
      newValue.category.length === 0
    )
      delete newValue.category;

    setSearchParams(new URLSearchParams(newValue));
  };

  const filterObj = checkParams(searchParams);

  return [filterObj, setFilter];
};

export default useFilter;
