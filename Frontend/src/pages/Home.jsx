// import React from 'react'

const Home = () => {
  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />

      <div className="h-screen w-screen ">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="bg-white p-5 absolute bottom-0 ">
        <h3 className="text-2xl font-semibold">Find a trip</h3>
        <form>
          <input
            className="bg-[#eeee] mt-3 text-lg w-full rounded-lg  px-8 py-2"
            type="text"
            placeholder="Add a pick-up location"
          />
          <input
            className="bg-[#eeee] mt-3 text-lg w-full rounded-lg  px-8 py-2"
            type="text"
            placeholder="Add your destination"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
