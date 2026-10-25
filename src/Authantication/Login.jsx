import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>

        <label>Contact Number</label>
        <input
          type="text"
          placeholder="Enter Contact Number"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
        />

        <button>Login</button>

        <p className="signup">
          Don't have an account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;