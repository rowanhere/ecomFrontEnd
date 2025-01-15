import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProduct = ({ count = 10 }) => {
  return (
    <>
      {Array.from({ length: count }) // Ensure 'count' is correctly passed to create an array of that length
        .fill("a")
        .map((_, index) => {
          return (
            <div key={index} className="h-[300px] relative overflow-hidden border-b shadow-md  rounded-xl  rounded-br-[40px]">
              <div className="flex justify-center">
                <div className="min-h-[100%] min-w-[100%] aspect-square">
                  <Skeleton height={200} borderRadius={"0.75rem"} />
                </div>
              </div>
              <div className="bg-white relative -top-3 h-full rounded-t-[20px] p-4">
                <div className=" text-nowrap text-[1.1rem] font-bold overflow-ellipsis overflow-hidden">
                  <Skeleton height={12} borderRadius={"0.75rem"} />
                </div>
                <span className="capitalize text-sm text-gray-500">
                  <Skeleton height={12} borderRadius={"0.75rem"} />
                </span>
                <div className="flex justify-between items-center mt-1">
                  <div className="text-[0.98rem] ">
                    <div className="flex gap-1">
                      <Skeleton height={10} width={40} borderRadius={"0.75rem"} />
                    </div>
                    <div className="mt-1 text-red-500">
                      <Skeleton height={10} width={40} borderRadius={"0.75rem"} />
                    </div>
                  </div>
                  <Skeleton height={10} width={40} borderRadius={"0.75rem"} />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SkeletonProduct;
