// src/LoginPage.js
import React, { useState } from 'react';
import '../styles/LoginPage.css'; // Ensure this file exists to add custom styling.

function LoginPage({ onLogin }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '123' || password === '1234567') { // Check for either admin or skill assessment password
      onLogin(password); // Pass the password to determine the page
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
        </form>
        <p className="text-center mt-3">Not a member? <a href="#">Sign up now</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
