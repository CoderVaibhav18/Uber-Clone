import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import { useRef, useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const panelRef = useRef(null);
  const panelClose = useRef(null);

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
        <h4
          onClick={() => setVehiclePanel(false)}
          className="absolute right-6 top-7 text-3xl font-bold"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h4>
        <h3 className="text-2xl font-semibold mb-5">Choose vehicle</h3>
        <div className="flex items-center border-2 active:border-black rounded-lg justify-between p-3 mb-2 w-full">
          <img
            className="h-10"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs">Affortable, compact rides</p>
          </div>
          <h4 className="font-semibold text-lg">₹193.2</h4>
        </div>
        <div className="flex items-center border-2 active:border-black rounded-lg justify-between p-3 mb-2 w-full">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs">Affortable, motorcycle rides</p>
          </div>
          <h4 className="font-semibold text-lg">₹65.17</h4>
        </div>
        <div className="flex items-center border-2 active:border-black rounded-lg justify-between p-3 mb-2 w-full">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs">Affortable, Auto rides</p>
          </div>
          <h4 className="font-semibold text-lg">₹118.86</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
