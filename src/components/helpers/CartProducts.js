import React, { useRef, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
const CartProducts = () => {
  const [ItemCount, setItemCount] = useState(1);
  const swipe = useRef(null);
  const swipeEndTrack = useRef(null);
  const [side, setSide] = useState(null);
  const config = {
    delta: 69, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  const handleSwap = (e) => {
    const swipeDiv = swipe.current;
    const swipePx = e.deltaX;
    if (e.dir === "Left") {
      console.log("swiping Left");
      setSide("Left");
      const max_swipe = -200;
      if (swipePx <= max_swipe) return;
      swipeDiv.style.transform = `translateX(${swipePx + "px"})`;
      swipeEndTrack.current = "Left";
    }
    if (e.dir === "Right") {
      setSide("Right");

      console.log("swiping Right");
      const max_swipe = 200;
      if (swipePx >= max_swipe) return;
      swipeDiv.style.transform = `translateX(${swipePx + "px"})`;
      swipeEndTrack.current = "Right";
    }
  };
  const handleEnd = ({ event }) => {
    const getLastTouched = event.changedTouches[0].clientX;
    const swipeTrack = swipeEndTrack.current;
    console.log(getLastTouched, swipeEndTrack.current);

    if (getLastTouched >= 200 && swipeTrack === "Right") {
      swipe.current.style.transform = `translateX(70px)`;
    }
    if (getLastTouched <= 200 && swipeTrack === "Left") {
      swipe.current.style.transform = `translateX(-70px)`;
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
        swipe.current.style.transform = `translateX(0px)`;
      }}
      className="relative overflow-hidden"
      {...handlers}
    >
      <div className={`absolute flex p-4 z-[1] ${side==="Left"?"bg-red-500":""} ${side==="Right"?"bg-orange-500":""} bg-opacity-40 inset-0 rounded-xl`}>
        {side === "Left" && (
          <button
            className="ml-auto  text-red-600"
            onClick={(e) => console.log("Hello")}
          >
            <RiDeleteBinFill size={25} />
          </button>
        )}

        {side === "Right" && (
          <button className=" text-white" onClick={(e) => console.log("Hello")}>
            <FaHeart size={25} />
          </button>
        )}
      </div>
      <div
        ref={swipe}
        className={`flex relative   z-[2] transition-transform duration-500 ease-out gap-2 bg-white border  shadow-lg p-2 rounded-xl`}
      >
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
