import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h4
        onClick={() => props.setConfirmRidePopUp(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h4>
      <h3 className="text-2xl font-semibold mb-6 mt-3">
        Confirm this Ride to Start
      </h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-xl">
        <div className="flex items-center gap-2 ">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="data:image/jpeg;base64,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"
          />
          <h2 className="text-lg font-medium">Mr.D.M</h2>
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
        <div className="w-full mt-6">
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              className="bg-[#eeeeeec7] rounded-lg text-lg font-mono mt-3 w-full px-6 py-4"
              type="number"
              placeholder="Enter a OTP"
            />
            <Link
              to="/captain-riding"
              className="flex justify-center w-full bg-green-600 text-white font-semibold text-lg mt-5 mb-2 rounded-lg py-3"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUp(false);
                props.setRidePopUP(false);
              }}
              className="w-full bg-red-600 text-white  font-semibold text-lg mt-1 rounded-lg py-3"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
