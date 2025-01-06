import React from "react";

const Riding = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-4">
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
        <button className="w-full bg-green-600 text-white font-semibold text-lg mt-5 rounded-lg py-2">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
