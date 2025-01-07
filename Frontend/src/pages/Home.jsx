import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import { useRef, useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDrivers from "../components/LookingForDrivers";
import WaitingForDrivers from "../components/WaitingForDrivers";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [confirmedRide, setConfirmedRide] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const vehiclePanelRef = useRef(null);
  const confirmedRidRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const waitingForDriverRef = useRef(null);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
        opacity: 1,
      });
      gsap.to(panelClose.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0",
        padding: 0,
        opacity: 0,
      });
      gsap.to(panelClose.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (confirmedRide) {
      gsap.to(confirmedRidRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmedRidRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRide]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <img
        className="w-20 absolute top-6 left-6"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />

      <div className="h-screen w-screen">
        {/* Temporary map image */}
        <img
          className="h-screen  w-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute bottom-0 w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h4
            ref={panelClose}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 right-6 top-7 text-3xl font-bold"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h4>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form>
            <div className="line h-14 w-1 rounded-full bg-gray-900 absolute top-[44%] left-10"></div>
            <input
              className="bg-[#eeeeeec7] rounded-lg text-lg mt-3 w-full px-12 py-2"
              type="text"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eeeeeec7] rounded-lg text-lg mt-3 w-full px-12 py-2"
              type="text"
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Add your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white opacity-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full bg-white translate-y-full bottom-0 z-10 px-3 py-6"
      >
        <VehiclePanel
          setConfirmedRide={setConfirmedRide}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmedRidRef}
        className="fixed w-full bg-white translate-y-full bottom-0 z-10 px-3 py-6"
      >
        <ConfirmedRide
          setConfirmedRide={setConfirmedRide}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full bg-white translate-y-full bottom-0 z-10 px-3 py-6"
      >
        <LookingForDrivers setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full translate-y-full bg-white bottom-0 z-10 px-3 py-6"
      >
        <WaitingForDrivers setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
