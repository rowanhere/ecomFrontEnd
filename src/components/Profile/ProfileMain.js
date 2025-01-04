import { Outlet, useLocation } from "react-router-dom";
import React from "react";

const ProfileMain = () => {
  const location = useLocation();

 
  const isProfileRoot = location.pathname === "/profile";
  return (
    <div>
      {isProfileRoot && (
        <>
          <h1>Profile Page</h1>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default ProfileMain;
