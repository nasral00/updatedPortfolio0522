import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavClick = () => setNavOpen((prev) => !prev);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#32484c] text-[#F5E021] font-semibold z-10">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="main" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleNavClick} className="md:hidden z-10">
        {!navOpen ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu*/}
      <ul
        className={
          !navOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#456268] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleNavClick} to="main" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavClick}
            to="about"
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavClick} to="work" smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      {/*Social Icons*/}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/nasr/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-gray-900">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/nasral00"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-[#ce6262]">
            <Link
              className="flex justify-between items-center w-full text-white"
              to="contact"
              smooth={true}
              duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
