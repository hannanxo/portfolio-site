import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import Logo from "../../assets/icons/Hannan.png";
const MobileNavbar = ({ pathname }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const clearView = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="md:hidden fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111] text-[#f9f9f9] z-10">
        <a href="/">
          <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
        </a>

        <div className="flex">
          {pathname === "/login" ? (
            <a href="/register" className="mx-10">
              <FaSignInAlt />
            </a>
          ) : (
            <a href="/login" className="mx-10">
              <FaSignInAlt />
            </a>
          )}

          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        {/* Mobile Menu  */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#111] flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
            <Link to="about" smooth={true} duration={500} onClick={clearView}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
            <Link to="skills" smooth={true} duration={500} onClick={clearView}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
            <Link to="work" smooth={true} duration={500} onClick={clearView}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
            {" "}
            <Link to="blogs" smooth={true} duration={500} onClick={clearView}>
              Blogs
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
            {" "}
            <Link to="contact" smooth={true} duration={500} onClick={clearView}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
