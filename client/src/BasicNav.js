import React from "react";
import { withRouter } from "react-router-dom";

function BasicNav(props) {
  function goBack() {
    props.history ? props.history.goBack() : props.history.push("/");
  }

  return (
    <div className="navbar">
      <h3>
        <a className="nav-link text-dark goBack" onClick={goBack}>
          &lsaquo;
        </a>
      </h3>
      <nav className="navbar">
        <a className="nav-link text-dark" href="/">
          Home
        </a>
        <a className="nav-link text-dark" href="/aboutUs">
          About Us
        </a>
        <a className="nav-link text-dark" href="/projects">
          Projects
        </a>
        <a className="nav-link text-dark" href="/blogs">
          Blogs
        </a>
      </nav>
    </div>
  );
}

export default withRouter(BasicNav);
