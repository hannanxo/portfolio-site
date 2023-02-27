import React from "react";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JavaScript from "../assets/icons/javascript.png";
import ReactImg from "../assets/icons/react.png";
import Node from "../assets/icons/node.png";
import GitHub from "../assets/icons/github.png";
import AWS from "../assets/icons/aws.png";
import Mongo from "../assets/icons/mongo.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#ece8e1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:mt-0 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff4655] leading-normal">Skills</p>
          <p className="py-4 text-[#768079]">Following is the tech stack I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-[#768079]">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-[#768079]">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-[#768079]">JAVASCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-[#768079]">REACT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-[#768079]">GIT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 text-[#768079]">NODE JS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 text-[#768079]">MONGO DB</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4 text-[#768079]">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
