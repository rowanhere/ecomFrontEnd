import React, { useRef } from "react";

const ImageSlider = ({images}) => {
  
  const imagesRef = useRef([]);
  const imageTrackRef = useRef([]);
  const markerRef = useRef(null);
  const checkScroll = (e) => {
    const carouselWrapper = e.target.getBoundingClientRect();
    const carousel_Center_X = carouselWrapper.left + carouselWrapper.width / 2;
    // const carousel_Center_X = 195.20000076293945;
    imagesRef.current.forEach((image, index) => {
      const imageBound = image.getBoundingClientRect();
      const imageCenter = imageBound.left + imageBound.width / 2;
      if (imageCenter <= carousel_Center_X) {
        //   console.log("Currently on image no ", index);
        const getSlideTracker = imageTrackRef.current[index];
        markerRef.current.style.left = getSlideTracker.offsetLeft + "px";
        markerRef.current.style.width = getSlideTracker.offsetWidth + "px";
      }
    });
  };
  
  return (
    <>
      <div
        onScroll={checkScroll}
        className="overflow-x-scroll relative scroll-smooth  productScroll snap-x snap-mandatory flex w-[300px] gap-2 aspect-square rounded-xl m-auto "
      >
        {images.map((img, index) => {
          return (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="w-[300px] flex flex-col items-center  shrink-0 snap-center"
            >
              <img className="object-cover" src={img} alt="girl-pic" />
            </div>
          );
        })}
      </div>
      <div className="flex relative justify-center gap-2 mt-4">
        {/* marker for slider track */}
        <div
          ref={markerRef}
          className="absolute left-[111px] transition-all ease-linear bg-orange-400 w-[40px]  h-1 rounded-lg"
        ></div>
        {Array(images.length)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              ref={(el) => (imageTrackRef.current[index] = el)}
              onClick={() => imagesRef.current[index].scrollIntoView()}
              className="bg-gray-500 w-10 h-1 rounded-lg"
            ></div>
          ))}
      </div>
    </>
  );
};

export default ImageSlider;
