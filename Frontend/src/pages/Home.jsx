// import React from 'react'

const Home = () => {
  return (
    <div className="h-screen relative">
      <img
        className="w-16 top-5 left-5 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
      />

      <div className="h-screen w-screen">
        <img
        className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>

      <div className="bg-white p-5 bottom-0 absolute w-screen">
        <h3 className="text-2xl font-semibold">Find a trip</h3>
        <form>
          <input type="text" placeholder="Add a pick-up location" className=" bg-[#eeee] rounded-lg text-lg mt-4 px-12 py-2 w-full"/>
          <input type="text" placeholder="Add your destination" className=" bg-[#eeee] rounded-lg text-lg mt-4 px-12 py-2 w-full"/>
        </form>
      </div>

    </div>
  );
};

export default Home;
