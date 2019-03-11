import React, { useState } from "react";
import classnames from "classnames";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { name, email, password, passwordTwo };
    axios
      .post("/api/users/register", newUser)
      .then(() => {
        props.setUser(newUser);
        props.history.push("/login");
      })
      .catch(err => setErrors(err.response.data));
  }

  return (
    <div>
      <h1 className="disaply-4 text-center">Please Register</h1>
      <div className="userForm py-4">
        <form>
          <div className="form-group">
            <input
              className={classnames("form-control", {
                "is-invalid": errors.name
              })}
              placeholder="John"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
            <input
              className={classnames("form-control", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <input
              className={classnames("form-control", {
                "is-invalid": errors.passwordTwo
              })}
              placeholder="Confirm Password"
              type="password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={e => setPasswordTwo(e.target.value)}
            />
            {errors.passwordTwo && (
              <div className="invalid-feedback">{errors.passwordTwo}</div>
            )}
          </div>
          <button className="btn btn-outline-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  setUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({ type: "SET_USER", user })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Register));
