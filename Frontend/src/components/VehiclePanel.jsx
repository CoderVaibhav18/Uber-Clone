// import React from 'react'

const VehiclePanel = (props) => {
  console.log(props);

  return (
    <div>
      <h4
        onClick={() => props.setVehiclePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h4>
      <h3 className="text-2xl font-semibold mb-5 mt-3">Choose vehicle</h3>
      <div
        onClick={() => props.setConfirmedRide(true)}
        className="flex items-center border-2 active:border-black rounded-lg justify-between p-3 mb-2 w-full"
      >
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
        <h4 className="font-semibold text-lg">₹193.20</h4>
      </div>
      <div
        onClick={() => props.setConfirmedRide(true)}
        className="flex items-center border-2 active:border-black rounded-lg justify-between p-3 mb-2 w-full"
      >
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
      <div
        onClick={() => props.setConfirmedRide(true)}
        className="flex items-center border-2 active:border-black rounded-lg justify-between p-3 mb-2 w-full"
      >
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
  );
};

export default VehiclePanel;
