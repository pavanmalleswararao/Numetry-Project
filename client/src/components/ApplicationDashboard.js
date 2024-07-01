import React from 'react';
import './ApplicationDashboard.css'; // Import the CSS file
import barChartImage from './img/1.png'; // Update with the correct path to your image
import pieChartImage from './img/2.png'; // Update with the correct path to your pie chart image

const ApplicationDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img
          src="https://img.freepik.com/free-photo/top-view-blue-pink-arrows_23-2148488441.jpg?t=st=1718616335~exp=1718619935~hmac=80636ec8aa829e6462e670fa7a8584cd3f5fb2be3bebe29e0f663941f6e8989b&w=740"
          alt="Dashboard Logo"
          className="dashboard-logo"
        />
        <h1>Application Dashboard</h1>
        <div className="user-profile">
          <span className="user-name">admin</span>
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/65/75/68/1000_F_65756860_GUZwzOKNMUU3HldFoIA44qss7ZIrCG8I.jpg"
            alt="Admin Avatar"
            className="admin-avatar"
          />
        </div>
      </div>
      
      <div className="dashboard-actions">
        <button className="dashboard-button">Punch in/Punch Out</button>
        <button className="dashboard-button">Take Break</button>
        <button className="dashboard-button">View As Employee</button>
      </div>

      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Total Employees</h3>
        </div>
        <div className="stat-box">
          <h3>Total Departments</h3>
        </div>
        <div className="stat-box">
          <h3>Leave Status</h3>
        </div>
        <div className="stat-box">
          <h3>On Leave Today</h3>
        </div>
      </div>

      <div className="employee-stats">
        <div className="employee-stats-header">
          <h3>Employee Statistics</h3>
          <div className="stats-filters">
            <a href="#">by employment</a>
            <a href="#">by designation</a>
            <a href="#">by department</a>
          </div>
        </div>
        <div className="stats-charts">
          <div className="bar-chart">
            <img src={barChartImage} alt="Bar Chart" className="bar-chart-image" />
          </div>
          <div className="pie-chart">
            <h3>Total Attendance Today: 25</h3>
            <img src={pieChartImage} alt="Pie Chart" className="pie-chart-image" />
            <ul>
              <li>Early</li>
              <li>Regular</li>
              <li>Late</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDashboard;
