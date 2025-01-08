import React from "react";

const RidePopUp = () => {
  return (
    <div>
      <h4 className="p-1 text-center w-[93%] absolute top-0">
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h4>
      <h3 className="text-2xl font-semibold mb-6 mt-3">New Ride Available</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="data:image/jpeg;base64,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"
          />
          <h2 className="text-lg font-medium">Vaibhav Sathe</h2>
        </div>
        <h5 className="text-lg font-medium">2.5 km</h5>
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
        <button className="w-full bg-green-600 text-white font-semibold text-lg mt-5 rounded-lg py-2">
          Confirm
        </button>
        <button className="w-full bg-gray-300 text-gray-700 font-semibold text-lg mt-1 rounded-lg py-2">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
