import React from "react";
import Logo from "../../assets/icons/Hannan.png";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const HomeNavbar = ({ pathname }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

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
              {user ? (
                <div onClick={onLogout} className="px-5 py-1 hover:cursor-pointer">
                  <FaSignOutAlt />
                </div>
              ) : (
                <a href="/login" className="px-5 py-1">
                  <FaSignInAlt />
                </a>
              )}
            </ul>
          </>
        ) : (
          <>
            <a href="/">
              <img src={Logo} alt="Logo" style={{ width: "155px", marginLeft: "-10px" }} />
            </a>
            <ul className="hidden md:flex">
              <div className="hidden md:flex">
                {user ? (
                  <li>
                    <button onClick={onLogout} className="text-[#0f1923] border-1 border-[#ff4655] rounded-lg bg-[#ff4655] px-5 flex items-center hover:text-[#f9f9f9]">
                      Logout
                    </button>
                  </li>
                ) : null}
              </div>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default HomeNavbar;
