import React from "react";
import { Link } from "react-scroll";
// import { motion } from "framer-motion";
import logo from "../assets/logo.ico";

const handleLogoClick = () => {
  window.location.reload();
};

const Header = () => {
  return (
    <header className="py-3 hover:shadow-none transition-shadow duration-500 hover:border-none main-navigation nav">
      <nav className="flex flex-row justify-between px-10">
        <button>
          <Link>
            <img
              src={logo}
              alt=""
              onClick={handleLogoClick}
              className="w-8 h-8 border-solid border-white border-2 hover:scale-110 transition-all duration-300"
            />
          </Link>
        </button>
        <ul className="flex flex-row space-x-4 items-center justify-start">
          <li className="text-base transition-transform duration-300">
            <Link to="home" smooth={true} duration={500}>
              <span className="inline-block">Home</span>
            </Link>
          </li>
          <li className="text-base transition-transform duration-300">
            <Link to="about" smooth={true} duration={500}>
              <span className="inline-block">About</span>
            </Link>
          </li>
          <li className="text-base transition-transform duration-500">
            <Link to="projects" smooth={true} duration={500}>
              <span className="inline-block">Projects</span>
            </Link>
          </li>
          <li className="text-base transition-transform duration-300">
            <Link to="contact" smooth={true} duration={500}>
              <span className="inline-block">Links</span>
            </Link>
          </li>
        </ul>
        <button className="text-black hover:bg-codelightlime border-black bg-codebutton border-solid font-normal text-sm border-4 px-3 py-1  rounded-lg font-semibold">
          Let's talk
        </button>
      </nav>
    </header>
  );
};

export default Header;
