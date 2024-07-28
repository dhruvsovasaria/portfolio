import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex">
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
