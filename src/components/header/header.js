import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import SocialLinks from "./social-links";

const Header = () => {
  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          
          <Logo/>
          <Navbar/>
          <SocialLinks/>

          
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
