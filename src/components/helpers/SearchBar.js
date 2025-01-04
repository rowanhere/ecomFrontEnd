import React from "react";
import {  IoSearch } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import useFilter from "./useFilter";


const SearchBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const toSearch = () => {
    if (pathname === "/search") return;
    navigate("/search");
  };
  const [insertedFilter, setInsertedFilter] = useFilter();
  
  const checkSearch = (e)=>{
    const searchText = e.target.value
    console.log(insertedFilter);
    setInsertedFilter({...insertedFilter,"keyword":searchText})
    
  }
  return (
    <button
      onClick={toSearch}
      className="flex w-full text-gray-400 justify-between border-2 p-2 gap-2 items-center rounded-lg border-gray-300"
    >
      <span>
        <IoSearch size={23} />
      </span>
      <input
        type="text"
        name="search"
        readOnly={pathname !== "/search"}
        autoFocus={pathname === "/search"}
        placeholder="Find your need.."
        onChange={checkSearch}
        className=" indent-2 text-[1.2rem] w-full h-full outline-none"
      />
     
    </button>
  );
};

export default SearchBar;
