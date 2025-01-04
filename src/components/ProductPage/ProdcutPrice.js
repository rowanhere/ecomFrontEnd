import React from 'react'

const ProdcutPrice = ({isDiscounted,price}) => {
  const discountedAmt = price - (price * 6/100)
  console.log(discountedAmt);
  
  return (
    <div className="mt-2 flex gap-2 items-start">
        <div className="text-red-400 ">
          <span>${price}</span>
          {isDiscounted.isActive && (
            <span className="block line-through text-gray-300">${discountedAmt}</span>
          )}
        </div>
        {isDiscounted.isActive && (
          <span className="text-orange-500 bg-orange-200 rounded-xl py-[0.1rem] px-[0.65rem] text-[0.75rem]">
            {isDiscounted.amount}% off
          </span>
        )}
      </div>
  )
}

export default ProdcutPrice