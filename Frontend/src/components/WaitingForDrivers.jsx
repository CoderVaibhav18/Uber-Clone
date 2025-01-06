import React from "react";

const WaitingForDrivers = (props) => {
  return (
    <div>
      <h4
        onClick={() => props.setWaitingForDriver(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h4>

      <div className="flex items-center justify-between">
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Vaibhav</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MH34 AX 2029</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2">
        <div className="w-full flex flex-col mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="font-sm -mt-1 text-gray-600">
                Block 11, Sector 562
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="font-sm -mt-1 text-gray-600">
                Block 11, Sector 562
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="font-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDrivers;
