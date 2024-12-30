// import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(location);
  };

  useGSAP(function () {
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: "70%",
      });
    }else{
      gsap.to(panelRef.current, {
        height: "0%",
      });
    }
  },[panelOpen]);

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map image"
        />
      </div>

      <div className="flex flex-col justify-end h-screen top-0 absolute w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="line h-16 w-0.5 rounded-full absolute top-[43%] left-10 bg-gray-800"></div>
            <input
              type="text"
              onClick={() => setPanelOpen(true)}
              className="bg-[#eeee] w-full text-lg mt-3 rounded-lg px-12 py-2"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              type="text"
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee]  w-full text-lg mt-3 rounded-lg px-12 py-2"
              placeholder="Add destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-red-500 "></div>
      </div>
    </div>
  );
};

export default Home;
