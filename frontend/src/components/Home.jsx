import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] sm:mx-auto mx-8 sm:px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 leading-normal">Hi, my name is</p>
        <h1 className="text-5xl leading-normal sm:text-7xl sm:leading-normal font-bold text-[#ccd6f6]">Abdul Hannan</h1>
        <h2 className="text-5xl leading-normal sm:text-7xl sm:leading-normal font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] leading-7">Currently pursuing a bachelors degree in Computer Science from FAST-NUCES.</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
