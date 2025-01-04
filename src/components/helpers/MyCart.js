import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
const Mycart = ({ item,setMyCart }) => {
//   const inputTrack = useRef();
//   const deleteFromCart = (id) => {
//     console.log(id);
//     const getCurrentNo = parseInt(inputTrack.current.value);
//     if (getCurrentNo < 1) return;
//     const getItems = JSON.parse(localStorage.getItem("cart"))
//     console.log(getItems);
//     if(getItems[id].count === getCurrentNo) delete getItems[id]
//     else getItems[id].count -= getCurrentNo
//    localStorage.setItem("cart",JSON.stringify(getItems))
//    setMyCart(getItems)
//   };
  return (
    <div className="flex px-3  py-4 mb-2 items-center justify-between border-b border-gray-400">
      <div className="w-[40px] aspect-square">
        <img
          src="https://img.drz.lazcdn.com/static/np/p/14ee520dbe8f3526070800ab3a86fc05.jpg_400x400q75.jpg_.webp"
          alt="1"
          className="min-w-full min-h-full object-cover"
        />
      </div>
      <div className="text-[1.1rem] self-start flex flex-col justify-start mt-1 font-bold ">
        <div className="w-[15ch] line-clamp-2 ">Bench</div>
      </div>
      <div className="w-[60px]  flex items-center bg-white shadow-lg border rounded-2xl p-1 justify-between">
        <input
          type="number"
          name="Items"
          className="w-full text-center outline-none"
          defaultValue="1"
        
        />
        <IoIosArrowDown size={35} className="font-bold" />
      </div>
      <button >
      {/* onClick={() => deleteFromCart(item.id)} */}
        <RiDeleteBinLine size={28} />
      </button>
    </div>
  );
};

export default Mycart;
