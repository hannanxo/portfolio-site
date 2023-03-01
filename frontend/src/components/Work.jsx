import React from "react";
import { data } from "../data/data.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const project = data;
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#ececec]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#0f1923] border-[#ff4655] leading-normal">Work</p>
          <p className="md:pt-6 md:py-0 py-6  text-[#768079] ">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div>
          <Slider {...settings}>
            {project.map((item, index) => (
              <div key={index} className="px-2">
                <img src={item.Image} alt={item.name} width="550" height="200px" style={{ margin: "0 auto" }} className="md:w-[550px] w-[330px] hover:opacity-100" />

                {/* Hover effect for images */}
                {/* <div className="opacity-0 group-hover:opacity-100 "> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Work;
