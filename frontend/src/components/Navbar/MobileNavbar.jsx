import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Logo from "../../assets/icons/Hannan.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import * as Scroll from "react-scroll";

const MobileNavbar = ({ pathname }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const clearView = () => {
    setNav(!nav);
  };
  let scroll = Scroll.animateScroll;

  return (
    <>
      <div className="md:hidden fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111] text-[#f9f9f9] z-10">
        {pathname === "/" ? (
          <div onClick={scroll.scrollToTop}>
            <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
          </div>
        ) : (
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
          </div>
        )}

        <div className="flex">
          {user ? (
            <div onClick={onLogout} className="px-4">
              <FaSignOutAlt />
            </div>
          ) : (
            <div
              onClick={() => {
                navigate("/login");
              }}
              className="px-4"
            >
              {pathname !== "/" ? (
                <></>
              ) : (
                <>
                  <FaSignInAlt />
                </>
              )}
            </div>
          )}

          <div onClick={handleClick} className="md:hidden z-10 px-4">
            {pathname !== "/" ? null : <>{!nav ? <FaBars /> : <FaTimes />}</>}
          </div>
        </div>

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
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
            <Link to="blogs" smooth={true} duration={500} onClick={clearView}>
              Blogs
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#ff4655]">
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
