import React, { useState } from "react";
import Logo from "../assets/icons/Hannan.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Socials from "./Socials";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { animateScroll } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    console.log(nav);
  };
  let scroll = Scroll.animateScroll;
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111] text-[#f9f9f9]">
      <a onClick={scroll.scrollToTop}>
        <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
      </a>

      {/* Need to conditionally render the menu for blogs, register */}
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#111] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          {" "}
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#ff4655]">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
