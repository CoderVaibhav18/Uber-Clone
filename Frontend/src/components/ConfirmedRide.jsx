// import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
      <h4
        onClick={() => props.setConfirmedRide(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200  ri-arrow-down-wide-line"></i>
      </h4>
      <h3 className="text-2xl font-semibold mb-5 mt-3">Confirm your Ride</h3>
      <div className="flex flex-col items-center justify-between gap-2">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
        />
        <div className="w-full">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold text-lg rounded-lg py-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
