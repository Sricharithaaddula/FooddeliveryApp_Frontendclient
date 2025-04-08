import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box light-bg">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="staticEmail" className="input-label">Email</label>
            <input
              type="text"
              id="staticEmail"
              className="input-field"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="inputPassword" className="input-label">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="input-field"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;