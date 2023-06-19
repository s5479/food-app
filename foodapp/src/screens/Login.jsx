import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const jsonData = await response.json();
    // console.log(jsonData.name);

    if (jsonData) {
      localStorage.setItem("user", jsonData.name);
      navigate("/");
    }
  };
  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div className="login">
        <Navbar />
        <div className="form loginform">
          <form className="innerform" onSubmit={handleSubmit}>
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
            <button>Login</button>
            <Link to="/signup">
              <button>New User</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
