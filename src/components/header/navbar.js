import React from "react";

const Navbar = () => {
  return (
    <div id="header-nav" className="collapse navbar-collapse w-100 my-lg-auto">
      <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
        <li className="nav-item">
          <a className="nav-link smooth-scroll active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link smooth-scroll" href="#about">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link smooth-scroll" href="#services">
            What I Do
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link smooth-scroll" href="#resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link smooth-scroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
