import React, { useEffect } from "react";
import { IoCameraOutline } from "react-icons/io5";

const ProfileModel = () => {
  useEffect(() => {
    // Add the no-scroll class to the body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the class when the modal is unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed  bottom-0 mb-[-2rem] top-0 bg-black bg-opacity-80 left-0 right-0 z-[999]">
      <div className="bg-white p-4 font-josefin shadow-2xl h-[500px] rounded-[0.8rem] absolute bottom-0 left-0 right-0">
        <h1 className="text-xl text-center">Edit Profile</h1>
        <div className="relative h-[80px] aspect-square mx-auto mt-2">
          <div className="h-full w-full overflow-hidden rounded-[50%]">
            <img
              src="https://i.pinimg.com/550x/89/34/98/8934981056087d4e85f90ca5ed52586c.jpg"
              alt="pfp"
              className="min-w-full min-h-full object-cover object-center"
            />
          </div>
          <button className="absolute bottom-1 -right-3 bg-white rounded-[50%] p-2">
            <IoCameraOutline  size={15}/>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-2">
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
