import React, { useState } from "react";
import classnames from "classnames";
import axios from "axios";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { name, email, password, passwordTwo };
    console.log(newUser);
    axios
      .post("/api/users/register", newUser)
      .then(res => {
        console.log(res.data);
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
                "is-invalid": errors.password
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

export default Register;
