import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Logout(props) {
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    props.logoutUser({});
    props.history.push("/login");
  }

  return (
    <>
      <a
        className={props.navColor ? "nav-link wLink" : "nav-link bLink"}
        onClick={handleLogout}
      >
        Logout
      </a>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: currentUser => dispatch({ type: "LOGOUT_USER", currentUser })
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Logout)
);
