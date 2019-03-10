import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {}

  return (
    <div>
      <h1 className="display-4 text-center">Please Login</h1>
      <div className="userForm py-4">
        <form>
          <input
            className="form-control"
            placeholder="john@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
}

export default Login;
