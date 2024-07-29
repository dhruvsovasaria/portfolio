import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between pl-5 pr-5">
        <button>
          <Link to="home" smooth={true}>
            {/* <h1 className="logo text-codelime font-mono font-extrabold text-lg pl-3">
              Dhruv Sovasaria
            </h1> */}
            <img src="src\assets\logo.ico" alt="" className="w-14 h-14" />
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
        <button className="text-codelime border-dotted border-2 py-2 px-3">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
