import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Register.css";

function Register() {
  return (
    <div className="register">
      <div className="box">
        <h2>Register</h2>

        <label>Name</label>
        <input type="text" placeholder="Enter Name" />

        <label>Email</label>
        <input type="email" placeholder="Enter Email" />

        <label>Password</label>
        <input type="password" placeholder="Enter Password" />

        <label>Contact</label>
        <input type="text" placeholder="Enter Contact Number" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;