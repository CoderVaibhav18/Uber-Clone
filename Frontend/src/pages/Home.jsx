// import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0",
        padding: 0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen, panelCloseRef]);

  return (
    <div className="h-screen relative">
      <img
        className="w-20 absolute top-6 left-6"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full  object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="flex flex-col justify-end h-screen w-full absolute bottom-0">
        <div className="bg-white h-[30%] p-6 relative">
          <h4
          ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="font-bold text-3xl absolute right-6"
          >
            <i className="ri-arrow-up-wide-line"></i>
          </h4>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form>
            <div className="line h-16 w-1 bg-gray-900 rounded-full absolute top-[43%] left-10"></div>
            <input
              type="text"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add your pick-up location"
              className="px-12 py-2 text-lg mt-3 w-full rounded-lg"
            />
            <input
              type="text"
              onClick={() => setPanelOpen(true)}
              placeholder="Add your destination"
              className="px-12 py-2 text-lg mt-3 w-full rounded-lg"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
