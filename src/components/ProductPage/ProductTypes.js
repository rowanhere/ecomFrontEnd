import React, { useState } from "react";

const ProductTypes = ({ typeTitle, typeChilds }) => {
  const [selectedType, setSelectedType] = useState(0);
  return (
    <div>
      <div className="text-[0.9rem] mt-3 flex gap-1 font-semibold ">
        <span className="text-gray-500 ">{typeTitle}:</span>
        <span>{typeChilds[selectedType].name}</span>
      </div>

      <div className="grid grid-cols-2 gap-y-2 gap-x-2  mt-2">
        {typeChilds.map((item, index) => {
          return (
            <button
              onClick={() => {
                setSelectedType(index);
              }}
              key={index}
              className={`border-2 transition-all  ${
                selectedType === index
                  ? "border-orange-500 text-orange-500 bg-orange-200"
                  : ""
              } rounded-xl  px-4 text-sm text-nowrap max-w-[10ch] overflow-ellipsis overflow-hidden`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTypes;
