import React, {  useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
const CartProducts = () => {
  const [ItemCount, setItemCount] = useState(1);
  const [movedLeft, setIsMovedleft] = useState(false);

  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  const handleMoveLeft = () => {
    setIsMovedleft(true)
  };
  const handleMoveRight = () => {
    setIsMovedleft(false)
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleMoveLeft,
    onSwipedRight: handleMoveRight,
    ...config,
  });
  return (
    <div className="relative" {...handlers}>
      <div className="absolute flex p-4 -z-[1] bg-red-500 bg-opacity-40 inset-0 rounded-xl">
        <button className="ml-auto text-red-600">
          <RiDeleteBinFill size={25} />
        </button>
      </div>
      <div className={`flex transition-transform ${movedLeft?"-translate-x-[70px]":"translate-x-0"}  gap-2 bg-white border  shadow-lg p-2 rounded-xl`}>
        {/* image  */}

        <div className="h-[80px] rounded-xl overflow-hidden aspect-square">
          <img
            className="max-w-full object-center max-h-full object-cover"
            src="https://img.drz.lazcdn.com/g/kf/S3612f631a80f476d9091051e7dc1d5d4S.jpg_720x720q80.jpg_.webp"
            alt="img"
          />
        </div>
        {/* other info */}
        <div className="flex flex-col font-[600]">
          <span>Women Sexy Low-waisted</span>
          <span className=" text-red-400">$33.65</span>
          <div className="self-end justify-between flex items-center gap-[0.4rem]">
            <button
              disabled={ItemCount <= 1}
              onClick={() => {
                setItemCount((count) => count - 1);
              }}
              className={`border-2 ${
                ItemCount <= 1
                  ? "text-gray-400 "
                  : "text-orange-400 border-orange-400"
              } transition-colors ease-out duration-300 rounded-lg w-[30px] p-1 h-[28px] flex items-center justify-center text-center`}
            >
              <FaMinus size={15} fontWeight={400} />
            </button>
            <span className="w-[3ch] text-center">{ItemCount}</span>
            <button
              onClick={() => {
                setItemCount((count) => count + 1);
              }}
              className="border-2 text-orange-400 border-orange-400 rounded-lg w-[30px] p-1 h-[28px] flex items-center justify-center text-center"
            >
              <FaPlus fontWeight={400} size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
