import React, { useState } from "react";
import Logo from "../assets/icons/Hannan.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Socials from "./Socials";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    console.log(nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111] text-[#f9f9f9]">
      <a href="/">
        <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
      </a>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        {/* <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
        <li>Blogs</li> */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#111] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <a href="/skills">Skills</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <a href="/work">Work</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <a href="/blogs">Blogs</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Socials */}
      <Socials />
    </div>
  );
};

export default Navbar;
