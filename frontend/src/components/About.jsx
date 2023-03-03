import React from "react";
const About = () => {
  return (
    <section name="about" id="abt" className="w-full h-screen bg-[#e1e1e1]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right sm:pb-8 pl-4 py-2">
            <p className="text-4xl font-bold my-50 inline border-b-4 border-[#ff4655] leading-relaxed">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 px-4">
          <div className="sm:text-right leading-relaxed text-3xl sm:leading-normal sm:text-4xl font-bold text-[#0f1923]">
            <p>Hi. I'm Abdul Hannan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-1xl leading-10 py-3 sm:py-0 text-[#768079]">
              Exceptionally creative and dependable Website Developer with superlative work ethic. Highly adept at conveying complex techincal information to professional and lay audiences in a clear
              and understandable manner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
