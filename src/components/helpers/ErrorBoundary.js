import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return (
    <>
    <div className="bg-[url(https://www.vizion.com/wp-content/smush-webp/2018/09/shutterstock_479042983.jpg.webp)] flex justify-center h-[400px] items-center bg-no-repeat bg-center bg-contain">

    </div>
    <Link to={"/"} className="flex gap-[2px] text-lg border items-center border-orange-500 w-fit mx-auto px-6 py-2 font-josefin rounded-lg text-orange-500">
    <FaArrowLeft size={16} className="mb-[3.5px]"/>

     Home
    </Link>
    </>
    // Uncaught ReferenceError: path is not defined
  );
};

export default ErrorBoundary;
