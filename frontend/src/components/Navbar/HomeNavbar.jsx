import React from "react";
import Logo from "../../assets/icons/Hannan.png";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";

const HomeNavbar = ({ pathname }) => {
  let scroll = Scroll.animateScroll;
  return (
    <>
      <div className="hidden md:flex fixed w-full h-[80px] justify-between items-center px-4 bg-[#111] text-[#f9f9f9] z-10">
        {pathname === "/" ? (
          <>
            <a onClick={scroll.scrollToTop}>
              <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
            </a>
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
              <li>
                <a href="/login" className="text-[#0f1923] border-1 border-[#ff4655] rounded-lg bg-[#ff4655] px-5 flex items-center hover:text-[#f9f9f9]">
                  Sign In
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <a href="/">
              <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
            </a>
            <ul className="hidden md:flex">
              <li className="hidden md:flex">
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                {pathname === "/register" ? (
                  <a href="/register" className="text-[#0f1923] border-1 border-[#ff4655] rounded-lg bg-[#ff4655] px-5 flex items-center hover:text-[#f9f9f9]">
                    Login
                  </a>
                ) : (
                  <a href="/login" className="text-[#0f1923] border-1 border-[#ff4655] rounded-lg bg-[#ff4655] px-5 flex items-center hover:text-[#f9f9f9]">
                    Register
                  </a>
                )}
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default HomeNavbar;
