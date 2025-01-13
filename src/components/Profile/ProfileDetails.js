import React from "react";
import {
  FaArrowLeft,
  FaMapMarker,
  FaSignOutAlt,
  FaUserCog,
} from "react-icons/fa";
import { ProductNavButton } from "../ProductPage/ProductNav";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { RiVideoOnLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";

const ProfileDetails = () => {
  return (
    <>
      <nav className="mt-4 flex items-center">
        <ProductNavButton takeBack={true}>
          <FaArrowLeft size={20} />
        </ProductNavButton>
        <h1 className="font-josefin text-2xl text-center w-full mr-[2.25rem]">
          Account
        </h1>
      </nav>
      <main className="mt-4 grid grid-cols-1 mb-[8rem]">
        <section className=" bg-gray-100 rounded-2xl py-2 px-4 flex gap-3">
          <div className="h-[60px] aspect-square rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrZo7P_HRVNiFSpstkfGxijcNK-2jQ96guQ&s"
              alt="avatar"
              className="min-w-full min-h-full object-contain"
            />
          </div>
          <div className="mt-2">
            <div className="font-bold font-josefin text-[1.1rem]">Rowan</div>
            <div className="text-[0.95rem] text-gray-400 -mt-[0.3rem]">
              rowanhere@gmail.com
            </div>
          </div>
        </section>

        <section className="font-poppins">
          <div className="font-josefin text-2xl mt-4 mb-1">Settings</div>
          <div className=" bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl">
              <FaUserCog size={25} />
            </div>
            <button>Account Details</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl">
              <IoNotificationsCircleSharp size={25} />
            </div>
            <button>Notifications</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-3 rounded-2xl">
              <FaMapMarker />
            </div>
            <button>Delivery Location</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-3 rounded-2xl">
              <FaSignOutAlt />
            </div>
            <button>Log Out</button>
          </div>
        </section>
        {/* Support */}
        <section className="font-poppins">
          <div className="font-josefin text-2xl mt-4 mb-1">Support</div>
          <div className=" bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl">
            <MdContactSupport size={25}/>

            </div>
            <button>FAQ</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl">
              <LuContact size={25} />
            </div>
            <button>Contact Us</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-3 rounded-2xl">
              <RiVideoOnLine size={17} />
            </div>
            <button>Delivery Location</button>
          </div>
          <div className="mt-3 bg-gray-100 rounded-2xl py-2 px-4 flex items-center gap-3">
            <div className="bg-white p-3 rounded-2xl">
              <GiReturnArrow  />
            </div>
            <button>Returns & Refunds</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileDetails;
