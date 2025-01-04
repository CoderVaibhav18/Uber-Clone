// import React from 'react'
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = [
    "167, Killa Ward Ballarpur-442701, Dist Chandrapur, Near Visapur Road",
    "168, Sidharth Ward Ballarpur-442701, Dist Chandrapur",
    "169, Jay bhim chok Ward Ballarpur-442701, Dist Chandrapur",
  ];
  return (
    console.log(props);
    
    <div>
      {locations.map((location, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="gap-3 border-2 border-gray-100 active:border-black rounded-xl flex items-center my-2 p-3 justify-start"
          >
            <h2 className="bg-[#eeee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
