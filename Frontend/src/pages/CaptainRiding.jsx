// import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
// import RidePopUp from "../components/RidePopUp";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRideRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className=" h-screen relative">
      <div className="fixed p-6 flex items-center justify-between w-screen">
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
      <div
        onClick={() => setFinishRidePanel(true)}
        className="h-1/5 w-full p-6 pt-10 flex items-center justify-between bg-yellow-400 relative"
      >
        <h4 className="p-1 text-center w-[90%] absolute top-0">
          <i className="text-3xl font-semibold text-black ri-arrow-up-wide-line"></i>
        </h4>
        <h4 className="text-xl font-medium mb-2">4 Km away</h4>
        <button className=" bg-green-600 text-white font-semibold text-lg  rounded-lg p-3 px-10">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRideRef}
        className="fixed w-full bg-white translate-y-full bottom-0  z-10 px-3 py-6"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
