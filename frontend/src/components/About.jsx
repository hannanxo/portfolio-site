import React from "react";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right sm:pb-8 pl-4 py-2">
            <p className="text-4xl font-bold my-50 inline border-b-4 border-pink-600 leading-relaxed">About</p>
          </div>
          {/* <div></div> */}
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 px-4">
          <div className="sm:text-right leading-relaxed text-3xl sm:leading-normal sm:text-4xl font-bold">
            <p>Hi. I'm Abdul Hannan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-1xl leading-10 py-3 sm:py-0 ">
              Exceptionally creative and dependable Website Developer with superlative work ethic. Highly adept at conveying complex techincal information to professional and lay audiences in a clear
              and understandable manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
