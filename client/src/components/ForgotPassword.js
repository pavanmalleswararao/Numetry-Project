// src/components/ForgotPassword.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email (you can add more validation logic as needed)
    if (email.trim() === '') {
      alert('Please enter a valid email.');
      return;
    }

    // Redirect to reset password page with email as URL parameter
    history.push(`/reset-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
