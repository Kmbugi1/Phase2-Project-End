import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can do the fetch and post request to your server
    // Once the login is successful, you can navigate to the welcome page
    // For the sake of example, we'll assume the login is successful instantly.
    setTimeout(() => {
      alert("Welcome to Flavor Plaza!");
    }, 2000);
    navigate("/home");
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6 login-container shadow-lg">
          <h2 className="text-center login-text">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                required
              />
            </div>
          
            <div className="mb-3">
              <label htmlFor="area" className="form-label">
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="submit-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;