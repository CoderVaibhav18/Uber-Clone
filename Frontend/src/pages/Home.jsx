import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef, useState } from "react";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)

  useGSAP(() => {
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%'
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0'
      })
    }
  },[panelOpen])


  return (
    <div className="h-screen relative w-screen">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />

      <div className="h-screen w-screen">
        <img
          className="h-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute bottom-0 w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form>
            <div className="line h-16 w-0.5 bg-gray-900 absolute top-[45%] left-10"></div>
            <input
              className="bg-[#eeeeeec7] rounded-lg text-base mt-3 w-full px-12 py-2"
              type="text"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eeeeeec7] rounded-lg text-base mt-3 w-full px-12 py-2"
              type="text"
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Add your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-red-600"></div>
      </div>
    </div>
  );
};

export default Home;
