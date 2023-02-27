import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import "../index.css";
const Socials = () => {
  return (
    <React.Fragment>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="h-[60px] flex justify-between items-center duration-300">
            <a className="flex justify-between items-center w-full text-gray-300 icon" href="https://pk.linkedin.com/in/abdul-hannan-a8b538215">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="h-[60px] flex justify-between items-center duration-300 ">
            <a className="flex justify-between items-center w-full text-gray-300 icon" href="https://github.com/hannanxo">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="h-[60px] flex justify-between items-center duration-300 ">
            <a className="flex justify-between items-center w-full text-gray-300 icon" href="/">
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="h-[60px] flex justify-between items-center duration-300 ">
            <a className="flex justify-between items-center w-full text-gray-300 icon" href="/">
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Socials;
