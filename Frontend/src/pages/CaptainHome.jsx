// import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUP, setRidePopUP] = useState(true);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const ridePopUpRef = useRef(null);
  const confirmridePopUpRef = useRef(null);

  useGSAP(() => {
    if (ridePopUP) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUP]);

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUp]);
  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpRef}
        className="fixed w-full bg-white translate-y-full bottom-0 z-10 px-3 py-6"
      >
        <RidePopUp
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopUP={setRidePopUP}
        />
      </div>
      <div
        ref={confirmridePopUpRef}
        className="fixed h-screen w-full translate-y-full bg-white  bottom-0 z-10 px-3 py-6"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopUP={setRidePopUP}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
