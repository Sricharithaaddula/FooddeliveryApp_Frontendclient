import React from 'react'

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-box light-bg">
        <h2 className="login-title">Register</h2>
        <form>
        <div className="input-group">
            <label htmlFor="staticUserName" className="input-label">User Name</label>
            <input
              type="text"
              id="staticUserName"
              className="input-field"
              placeholder="Enter your Name"
            />
          </div>
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
  )
}

export default Register
