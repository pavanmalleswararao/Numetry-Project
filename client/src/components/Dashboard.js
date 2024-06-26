// src/components/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you'll create a separate CSS file for dashboard styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img
          src="https://img.freepik.com/free-photo/top-view-blue-pink-arrows_23-2148488441.jpg?t=st=1718616335~exp=1718619935~hmac=80636ec8aa829e6462e670fa7a8584cd3f5fb2be3bebe29e0f663941f6e8989b&w=740"
          alt="Logo"
          className="dashboard-logo"
        />
        <nav className="dashboard-nav">
          <ul>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/employee">Employee</Link></li>
            <li><Link to="/all-employees">All Employees</Link></li>
            <li><Link to="/designation">Designation</Link></li>
            <li><Link to="/employment-status">Employment Status</Link></li>
            <li><Link to="/leave">Leave</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/payroll">Payroll</Link></li>
            <li><Link to="/administrations">Administrations</Link></li>
            <li><Link to="/assets">Assets</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-main">
        <h1>Dashboard</h1>
        <Link to="/job-desk">
            <button className="job-desk-button">Job Desk</button>
        </Link>
      </main>
    </div>
  );
};

export default Dashboard;
