// import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-6 flex items-center justify-between w-full">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link
          to="/captain/logout"
          className=" bg-white w-10 h-10 flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div className="fixed w-full bg-white  bottom-0 z-10 px-3 py-6">
        <RidePopUp />
      </div>
    </div>
  );
};

export default CaptainHome;
