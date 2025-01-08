// import React from "react";
import { Link } from "react-router-dom";

const CaptainRiding = () => {
  return (
    <div className="h-screen relative">
      <h4 className="p-1 text-center w-[93%] absolute top-0">
          <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
        </h4>
      <div className="fixed p-6 flex items-center justify-between w-full">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link
          to="/captain/logout"
          title="Logout"
          className=" bg-white w-10 h-10 flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400">
        
        <h4 className="text-xl font-medium mb-2">4 Km away</h4>
        <button className=" bg-green-600 text-white font-semibold text-lg  rounded-lg p-3 px-10">
          Complete Ride
        </button>
      </div>
    </div>
  );
};

export default CaptainRiding;
