import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function MogollonNav(props) {
  const [navColor, setNavColor] = useState(false);
  useEffect(currentUrlLocaton);
  function currentUrlLocaton() {
    let location = props.location.pathname;
    console.log(location);
    location === "/" ||
    location === "https://mogolloninteriors.herokuapp.com/" ||
    location === "https://mogolloninteriors.herokuapp.com/aboutUs" ||
    location === "/aboutUs"
      ? setNavColor(true)
      : setNavColor(false);
  }
  return (
    <>
      <div className={navColor ? "navbar" : "navbar navBarBottom"}>
        <h3>
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/"
          >
            Mogollon Interiors
          </Link>
        </h3>
        <nav className="navbar">
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/aboutUs"
          >
            About Us
          </Link>
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/contactUs"
          >
            Contact
          </Link>
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/services"
          >
            Services
          </Link>
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            className={navColor ? "nav-link wLink" : "nav-link bLink"}
            to="/login"
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}

export default withRouter(MogollonNav);
