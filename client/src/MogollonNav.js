import React from "react";

function MogollonNav(props) {
  return (
    <>
      <div className="navbar">
        <h3>
          <a className="nav-link" href="/">
            Mogollon Interiors
          </a>
        </h3>
        <nav className="navbar">
          <a className="nav-link" href="aboutUs">
            About Us
          </a>
          <a className="nav-link" href="projects">
            Projects
          </a>
        </nav>
      </div>
    </>
  );
}

export default MogollonNav;
