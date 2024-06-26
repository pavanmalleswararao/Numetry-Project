// src/components/ResetPassword.js

import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam || '');
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset logic
    alert(`Password for ${email} reset successfully!`);
    // Redirect to login page or dashboard
    history.push('/login');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Reset Password</h2>
        <p>Enter a new password for your account.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="con-password">Conform Password:</label>
            <input
              type="password"
              id="con-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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

export default ResetPassword;
