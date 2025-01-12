import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import ProfileDetails from "./ProfileDetails";

const ProfileMain = () => {
  const location = useLocation();

 
  const isProfileRoot = location.pathname === "/profile";
  return (
    <div>
      {isProfileRoot && (
       <ProfileDetails/>
      )}
      <Outlet />
    </div>
  );
};

export default ProfileMain;
