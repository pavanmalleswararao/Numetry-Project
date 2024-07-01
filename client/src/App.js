// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import JobDesk from './components/JobDesk';
import ApplicationDashboard from './components/ApplicationDashboard';
import './App.css'; // Import the CSS file

function App() {
  const [user, setUser] = useState({ isLoggedIn: false, role: '' });

  const handleLogin = (role) => {
    setUser({ isLoggedIn: true, role });
  };

  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <img
            src="https://img.freepik.com/free-photo/top-view-blue-pink-arrows_23-2148488441.jpg?t=st=1718616335~exp=1718619935~hmac=80636ec8aa829e6462e670fa7a8584cd3f5fb2be3bebe29e0f663941f6e8989b&w=740"
            alt="Logo"
            className="logo"
          />
          {!user.isLoggedIn && <p className="welcome-message">Welcome to...!</p>}
          {user.isLoggedIn ? (
            <div className="button-container">
              {user.role === 'app-admin' && (
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/admin-settings-male.png" // Admin icon
                  alt="Admin"
                  className="admin-icon"
                />
              )}
            </div>
          ) : (
            <div className="button-container">
              <Link to="/login" className="nav-link">
                <button className="nav-button">Login</button>
              </Link>
              <Link to="/register" className="nav-link">
                <button className="nav-button">Register</button>
              </Link>
            </div>
          )}
        </div>
        <div className="content">
          <Switch>
            <Route path="/login">
              {user.isLoggedIn ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />}
            </Route>
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/job-desk" component={JobDesk} />
            <Route path="/application-dashboard" component={ApplicationDashboard} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
