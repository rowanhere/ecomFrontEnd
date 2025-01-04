import React, { useState } from 'react'

const ProdcutDes = ({des}) => {
    const requiredLength = 100;
    const description = des;
    
    const trunacateText = () => {
      if (description.length <= requiredLength) return description;
      else return description.substring(0, requiredLength) + "...";
    };
    const [productDescription, setProductDescription] = useState(trunacateText());
    const [buttonText, setButtonText] = useState("Read more");
    const showText = () => {
        const isTruncated = productDescription.endsWith("...");
        if (isTruncated) {
          setProductDescription(description);
          setButtonText("Read less");
        } else {
          setProductDescription(trunacateText());
          setButtonText("Read more");
        }
      };
  return (
    <div className="mt-2">
    <h3 className="text-[1rem]">Description</h3>
    <div className="flex flex-row">
      <p className="text-sm  text-gray-400 font-normal mt-2">
        {productDescription}
        {description.length >= requiredLength && (
          <button
            onClick={showText}
            className={`text-sm ml-1 underline decoration-[1.5px] text-orange-400`}
          >
            {buttonText}
          </button>
        )}
      </p>
    </div>
  </div>
  )
}

export default ProdcutDes