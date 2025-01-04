import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

const DefaultMenu = ({path,menus}) => {
 
    const markerRef = useRef(null);
    const trackMenus = useRef([]);
    useEffect(() => {
      const pathIndex = menus.findIndex((menu) => menu.url === path);
  
      if (pathIndex === -1) {
        markerRef.current.style.width = "0px";
        return;
      }
  
      const currentItem = trackMenus.current[pathIndex];
      if (currentItem) {
        markerRef.current.style.left = `${currentItem.offsetLeft}px`;
        markerRef.current.style.width = `${currentItem.offsetWidth}px`;
      }
    }, [path, menus]);
  return (
    <>
    <div ref={markerRef} className="marker"></div>
      {menus.map((item, index) => {
        return (
          <Link
            ref={(el) => (trackMenus.current[index] = el)}
            to={item.url}
            key={item.url}
            className={`${
              item.url === path ? "text-orange-500" : "text-gray-400"
            } flex flex-col items-center gap-1 font-josefin font-bold`}
          >
            <span>
              <item.icon size={30} />
            </span>
            <span className="text-[0.95rem]">{item.text}</span>
          </Link>
        );
      })}
    </>
  )
}

export default DefaultMenu