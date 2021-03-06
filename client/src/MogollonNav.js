import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./Auth/Logout";

function MogollonNav(props) {
  const [navColor, setNavColor] = useState(false);
  useEffect(currentUrlLocaton);
  function currentUrlLocaton() {
    let location = props.location.pathname;
    location === "/" ||
    location === "https://mogolloninteriors.herokuapp.com/" ||
    location === "https://mogolloninteriors.herokuapp.com/aboutUs" ||
    location === "/aboutUs"
      ? setNavColor(true)
      : setNavColor(false);
  }

  const guestLinks = (
    <Link
      className={navColor ? "nav-link wLink" : "nav-link bLink"}
      to="/login"
    >
      Login
    </Link>
  );

  return (
    <>
      <nav
        className={
          navColor
            ? "navbar navbar-expand-sm mb-4"
            : "navbar navbar-expand-sm mb-4 navBarBottom"
        }
      >
        <div className="container">
          <Link
            className={
              navColor
                ? "navbar-brand nav-link wLink"
                : "navbar-brand nav-link bLink"
            }
            to="/"
          >
            Mogollon Interiors
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
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
          {props.isAuthenticated ? <Logout navColor={navColor} /> : guestLinks}
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(MogollonNav));
