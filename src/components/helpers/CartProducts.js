import React, { useRef, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

const CartProducts = () => {
  const [ItemCount, setItemCount] = useState(1);
  const swipeRef = useRef(null);
  const [swipeState, setSwipeState] = useState({ direction: null, X: 0 });
  const SWIPE_THRESHOLD = 200; // Maximum swipe distance in pixels
  const SNAP_DISTANCE = 70; // Distance to snap on swipe end
  const config = {
    delta: 69, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  const handleSwap = ({ deltaX, dir }) => {
    const swipeDiv = swipeRef.current;
    const minMaxDelta = Math.max(
      -SWIPE_THRESHOLD,
      Math.min(SWIPE_THRESHOLD, deltaX)
    );
    console.log(minMaxDelta);
    setSwipeState({ direction: dir, X: minMaxDelta });
    swipeDiv.style.transform = `translate(${minMaxDelta}px)`;
  };
  const handleEnd = () => {
    const swipeDiv = swipeRef.current;
    const { direction, X } = swipeState;
    if (direction === "Right" && X >= SNAP_DISTANCE) {
      swipeDiv.style.transform = `translateX(70px)`;
      return;
    }
    if (direction === "Left" && X <= SNAP_DISTANCE) {
      swipeDiv.style.transform = `translateX(-70px)`;
      return;
    }
  };
  const handlers = useSwipeable({
    onSwiping: handleSwap,
    onTouchEndOrOnMouseUp: handleEnd,
    ...config,
  });

  return (
    <div
      onClick={() => {
        swipeRef.current.style.transform = `translateX(0px)`;
      }}
      className="relative overflow-x-hidden overflow-y-visible"
      {...handlers}
    >
      <div
        className={`absolute flex p-4 z-[1] ${
          swipeState.direction === "Left" ? "bg-red-500" : ""
        } ${
          swipeState.direction === "Right" ? "bg-orange-500" : ""
        } bg-opacity-40 inset-0 rounded-xl`}
      >
        {swipeState.direction === "Left" && (
          <button
            className="ml-auto  text-red-600"
            onClick={(e) => console.log("Hello")}
          >
            <RiDeleteBinFill size={25} />
          </button>
        )}

        {swipeState.direction === "Right" && (
          <button className=" text-white" onClick={(e) => console.log("Hello")}>
            <FaHeart size={25} />
          </button>
        )}
      </div>
      <div
        ref={swipeRef}
        className={`flex relative min-h-[fit-content]  z-[2] transition-transform duration-500 ease-out gap-2 bg-white border  shadow-lg p-2 rounded-xl`}
      >
        {/* image  */}
        <div className="h-[80px]   rounded-xl overflow-hidden aspect-square">
          <img
            className="max-w-full  object-center max-h-full object-cover"
            src="https://img.drz.lazcdn.com/g/kf/S3612f631a80f476d9091051e7dc1d5d4S.jpg_720x720q80.jpg_.webp"
            alt="img"
          />
        </div>
        {/* other info */}
        <div className="flex flex-col font-[600] grow">
          <span>Man trousers</span>
          <span className=" text-red-400">$33.65</span>

          {/* Product type */}

          {/* Product amount */}
          <div className=" justify-between flex mt-1">
            <div className="grid grid-cols-2 gap-1 mr-1">
              <span className="border-2 text-center border-orange-400 text-orange-500 px-3 rounded-xl">
                White
              </span>
              <span className="border-2 text-center border-orange-400 text-orange-500 px-3 rounded-xl">
                XL
              </span>
            </div>
            <div className="flex items-center gap-[0.4rem]">
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
    </div>
  );
};

export default CartProducts;
