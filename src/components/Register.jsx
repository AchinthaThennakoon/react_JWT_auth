import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

    console.log(
      firstName +
        " " +
        lastName +
        " " +
        email +
        " " +
        password +
        " " +
        confirmPassword
    );

    axios
      .post("/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((Response) => {
        console.log(Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="col-8 offset-2 ">
      <h3>Register</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          id="firstName"
          value={firstName}
          onChange={(e) => handleSubmit(e)}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          id="lastName"
          value={lastName}
          onChange={(e) => handleSubmit(e)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="email"
          value={email}
          onChange={(e) => handleSubmit(e)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => handleSubmit(e)}
        />
      </div>

      <div className="form-group">
        <label>Confirmm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="confirm password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => handleSubmit(e)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-dark btn-lg btn-block"
        onClick={handleSubmit}
      >
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">log in?</Link>
      </p>
    </form>
  );
}

export default Register;
