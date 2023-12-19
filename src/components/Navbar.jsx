import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="bg-[#222831] w-full h-[100px] flex justify-between items-center px-4">
      <div>
        <img src={logo} style={{ width: "100px" }} alt="/"></img>
      </div>
      {/* Navbar */}
      <ul className="md:flex hidden text-[#FAF6F0]">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
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
          <Link to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/**/}
      <div onClick={handleNavbar} className="md:hidden z-10 text-[#FAF6F0]">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#393E46] text-[#FAF6F0] flex flex-col justify-center items-center transition ease-in-out delay-150"
        }
      >
        <li  className="py-6 text-4xl">
          <Link onClick={handleNavbar} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbar} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbar} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbar} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbar} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:flex flex-col fixed top-[40%] right-0 text-[#FAF6F0] z-10">
        <li className="flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0">
          <a
            href="/"
            className="w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#0077b5]"
          >
            LinkedIn <FaLinkedin size={35} />
          </a>
        </li>
        <li className="flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0 ">
          <a
            href="/"
            className="w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#333]"
          >
            Github <FaGithub size={35} />
          </a>
        </li>
        <li className="flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0 ">
          <a
            href="/"
            className="w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#c71610]"
          >
            E-mail <HiOutlineMail size={35} />
          </a>
        </li>
        <li className="flex justify-end mr-[-80px] hover:mr-0 duration-300 p-0 ">
          <a
            href="/"
            className="w-[125px] rounded-sm p-1 flex flex-row-reverse justify-between items-center bg-[#6DB56D]"
          >
            Resume <BsFillPersonLinesFill size={35} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
