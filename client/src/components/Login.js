// src/components/Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('app-admin'); // Default role
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic - replace with actual authentication logic
    if (email === 'pavanmalleswararao6026@gmail.com' && password === '1234') {
      // Successful login logic
      console.log(`Logged in as ${role}`);
      alert("Login successfully");
      // Call onLogin with the role
      onLogin(role);
      // Redirect to dashboard or another page
      history.push('/dashboard');
    } else {
      // Failed login logic
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Redirect to forgot password page
    history.push('/forgot-password');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Hi!</h2>
        <p>Login to your dashboard</p>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-as" style={{ color: 'black' }}>Login as:</label>
            <select
              id="login-as"
              className="input-field"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="app-admin">
                <i className="fas fa-user-shield"></i> App Admin
              </option>
              <option value="department">
                <i className="fas fa-building"></i> Department
              </option>
              <option value="manager">
                <i className="fas fa-user-tie"></i> Manager
              </option>
              <option value="employee">
                <i className="fas fa-user"></i> Employee
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: 'black' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: 'black' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group checkbox">
            <label style={{ color: 'black' }}>
              <input type="checkbox" id="remember-me" style={{ marginLeft: 0 }} />
              Remember me
            </label>
            <div className="forgot-password">
              <a href="/forgot-password" onClick={handleForgotPassword}>Forgot password?</a>
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
