// src/components/Dashboard.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you'll create a separate CSS file for dashboard styles

const Dashboard = () => {
  const [role, setRole] = useState('app-admin'); // state to handle the selected value

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img
          src="https://img.freepik.com/free-photo/top-view-blue-pink-arrows_23-2148488441.jpg?t=st=1718616335~exp=1718619935~hmac=80636ec8aa829e6462e670fa7a8584cd3f5fb2be3bebe29e0f663941f6e8989b&w=740"
          alt="Logo"
          className="dashboard-logo"
        />
        <nav className="dashboard-sidebar">
          <ul>
            <li><Link to="/admin">Admin</Link></li>
            <li>
              <Link to="/employee">Employee</Link>
              <div className="form-group">
                <label htmlFor="employee-actions">Actions:</label>
                <select
                  id="employee-actions"
                  className="input-field"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="all-employees">All Employees</option>
                  <option value="designation">Designation</option>
                  <option value="employment-status">Employment Status</option>
                </select>
              </div>
            </li>
            <li>
              <Link to="/leave">Leave</Link>
              <div className="form-group">
                <label htmlFor="leave-actions">Actions:</label>
                <select
                  id="leave-actions"
                  className="input-field"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="leave-status">Leave Status</option>
                  <option value="leave-request">Leave Request</option>
                </select>
              </div>
            </li>
            <li>
              <Link to="/attendance">Attendance</Link>
              <div className="form-group">
                <label htmlFor="attendance-actions">Actions:</label>
                <select
                  id="attendance-actions"
                  className="input-field"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="daily-log">Daily Log</option>
                  <option value="attendance-request">Attendance Request</option>
                  <option value="summary">Summary</option>
                </select>
              </div>
            </li>
            <li>
              <Link to="/payroll">Payroll</Link>
              <div className="form-group">
                <label htmlFor="payroll-actions">Actions:</label>
                <select
                  id="payroll-actions"
                  className="input-field"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="salary-generation">Salary Generation</option>
                  <option value="payrun">Payrun</option>
                  <option value="pay-slips">Pay Slips</option>
                </select>
              </div>
            </li>
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
