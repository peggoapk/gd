import React, { useState, useEffect } from "react";
import axios from "axios";
import setAuthToken from "./SetAuthToken";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };
    axios
      .post("/api/users/login", user)
      .then(res => {
        const { token } = res.data;
        // set token to ls
        localStorage.setItem("jwtToken", token);
        // set token to auth header
        setAuthToken(token);
        //decode token to get user data
        const currentUser = jwt_decode(token);
        props.setCurrentUser(currentUser);
        props.history.push("/");
      })
      .catch(err => {
        setErrors(err.response.data);
      });
  }

  return (
    <div>
      <h1 className="display-4 text-center">Please Login</h1>
      <div className="userForm py-4">
        <form>
          <input
            className={classnames("form-control", {
              "is-invalid": errors.email
            })}
            placeholder="john@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
          <input
            className={classnames("form-control", {
              "is-invalid": errors.password
            })}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
          <button className="btn btn-outline-primary" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: currentUser =>
      dispatch({ type: "SET_CURRENT_USER", currentUser })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));
