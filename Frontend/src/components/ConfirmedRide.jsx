// import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div onClick={() => props.setConfirmedRide(false)}>
      <h4 className="p-1 text-center w-[93%] absolute top-0">
        <i className="text-3xl text-gray-200  ri-arrow-down-wide-line"></i>
      </h4>
      <h3 className="text-2xl font-semibold mb-5">Choose vehicle</h3>
    </div>
  );
};

export default ConfirmedRide;
