import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Socials from "./Socials";
const Home = () => {
  // const navigate = useNavigate();
  // const handleGoToWork = () => navigate("/work");
  return (
    <div name="home" className="w-full h-screen bg-[#ece8e1]">
      {/* Container */}
      <div className="max-w-[1000px] sm:mx-auto mx-8 sm:px-8 flex flex-col justify-center h-full">
        <p className="leading-normal text-[#ff4655]">Hi, my name is</p>
        <h1 className="text-5xl leading-normal sm:text-7xl sm:leading-normal font-bold text-[#0f1923] ">Abdul Hannan</h1>
        <h2 className="text-5xl leading-normal sm:text-7xl sm:leading-normal font-bold text-[#0f1923] ">I'm a Full Stack Developer</h2>
        <p className="py-4 max-w-[700px] leading-8 text-[#768079]">Currently pursuing a bachelors degree in Computer Science from FAST-NUCES.</p>
        <div>
          <button className="text-white border-2 border-[#ff4655] bg-[#ff4655] group px-6 py-3 my-2 flex items-center hover:bg-[#0f1923] hover:border-[#0f1923]">
            View Work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      {/* Socials */}
      <Socials />
    </div>
  );
};

export default Home;
