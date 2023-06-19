import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.address,
      }),
    });

    const jsonData = await response;
    console.log(jsonData);
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="signup">
      <Navbar />
      <div className="form">
        <form className="innerform" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={credentials.name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={credentials.address}
              onChange={onChange}
              required
            />
            <button>Click for current Location</button>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <button>Sign Up</button>
          <Link to="/login">
            <button>Already User</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
