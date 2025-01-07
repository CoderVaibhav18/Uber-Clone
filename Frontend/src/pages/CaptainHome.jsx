// import React from "react";
import { Link } from "react-router-dom";

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
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 justify-start">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="data:image/jpeg;base64,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"
            />
            <h4 className="text-lg font-medium">Vaibhav Sathe</h4>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-semibold">₹234.5</h4>
            <p className="text-sm text-gray-600 ">Earned</p>
          </div>
        </div>
        <div className="flex p-3 bg-gray-50 rounded-xl items-center justify-evenly">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h4 className="text-lg font-medium">10.2</h4>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h4 className="text-lg font-medium">10.2</h4>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h4 className="text-lg font-medium">10.2</h4>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
