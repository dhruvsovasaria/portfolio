import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between pl-5 pr-5">
        <h1>Dhruv Sovasaria</h1>
        <ul className="flex flex-row">
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
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <button>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
