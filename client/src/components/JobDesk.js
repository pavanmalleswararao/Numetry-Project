import React from 'react';
import { useHistory } from 'react-router-dom';
import './JobDesk.css'; // Import the CSS file

const JobDesk = () => {
  const history = useHistory();

  const handleDashboardRedirect = () => {
    history.push('/application-dashboard');
  };
  return (
    <div className="job-desk">
      <div className="job-desk-header">
        <img
          src="https://img.freepik.com/free-photo/top-view-blue-pink-arrows_23-2148488441.jpg?t=st=1718616335~exp=1718619935~hmac=80636ec8aa829e6462e670fa7a8584cd3f5fb2be3bebe29e0f663941f6e8989b&w=740"
          alt="Job Desk Logo"
          className="job-desk-logo"
        />
        <h1>Job Desk</h1>
      </div>
      
      <div className="job-desk-info">
        <div className="profile-info">
          <h2>Priya Pawar</h2>
          <p>Permanent</p>
          <p>Director</p>
          <p>Emp ID: AS23</p>
          <p>App Admin</p>
        </div>
        <div className="department-info">
          <p>Department: Main Department</p>
          <p>Salary: 80,000/-</p>
          <p>Work Shift: Regular work shift</p>
          <p>Joining Date: 05/5/2021</p>
        </div>
      </div>

      <div className="job-desk-actions">
        <button
          className="job-desk-button"
          onClick={handleDashboardRedirect}
        >
          Attendance Dashboard
        </button>
      </div>
      
      <div className="job-desk-details">
        <ul>
          <li>Attendance</li>
          <li>Documents</li>
          <li>Bank details</li>
          <li>Address Details</li>
          <li>Emergency Contact</li>
          <li>Assets</li>
        </ul>
        <ul>
          <li>April 2023</li>
          <li>Total Scheduled work hour</li>
          <li>Total work availability</li>
          <li>Regular: 15 days</li>
          <li>Early: 8 days</li>
          <li>On leave: 2 days</li>
          <li>Late: 0 days</li>
          <li>Total active hours</li>
          <li>Average behavior</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDesk;
