import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './EmploymentStatus.css';

const EmploymentStatus = () => {
  const [statuses, setStatuses] = useState([
    { id: 1, name: 'John Doe', preview: 'Terminated' },
    { id: 2, name: 'Jane Smith', preview: 'Permanent' },
    { id: 3, name: 'Pavan', preview: 'Probation' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState({ id: '', name: '', preview: '' });
  const [role, setRole] = useState('employment-status');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStatus({
      ...currentStatus,
      [name]: value
    });
  };

  const handleAddOrUpdateStatus = (e) => {
    e.preventDefault();
    if (isEditing) {
      setStatuses(statuses.map(status => (status.id === currentStatus.id ? currentStatus : status)));
    } else {
      const newStatus = {
        ...currentStatus,
        id: statuses.length + 1
      };
      setStatuses([...statuses, newStatus]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEditStatus = (status) => {
    setIsEditing(true);
    setCurrentStatus(status);
    setShowModal(true);
  };

  const handleDeleteStatus = (id) => {
    setStatuses(statuses.filter(status => status.id !== id));
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentStatus({ id: '', name: '', preview: '' });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value === 'designation') {
      history.push('/designation');
    } else if (e.target.value === 'all-employees') {
      history.push('/employee');
    } else {
      history.push('/employment-status');
    }
  };

  return (
    <div className="employment-status-container">
      <div className="sidebar">
        <div className="sidebar-section">
          <Link to="/job-desk" className="sidebar-link">Job Desk</Link>
        </div>
        <div className="sidebar-section">
          <Link to="/employee" className="sidebar-link">Employee</Link>
          <label htmlFor="employee-actions" className="sidebar-label">Actions:</label>
          <select
            id="employee-actions"
            className="input-field"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="all-employees">All Employees</option>
            <option value="designation">Designation</option>
            <option value="employment-status">Employment Status</option>
          </select>
        </div>
        <div className="sidebar-section">
          <Link to="/leave" className="sidebar-link">Leave</Link>
        </div>
        <div className="sidebar-section">
          <Link to="/attendance" className="sidebar-link">Attendance</Link>
        </div>
        <div className="sidebar-section">
          <Link to="/payroll" className="sidebar-link">Payroll</Link>
        </div>
        <div className="sidebar-section">
          <Link to="/administrations" className="sidebar-link">Administrations</Link>
        </div>
        <div className="sidebar-section">
          <Link to="/assets" className="sidebar-link">Assets</Link>
        </div>
        <div className="sidebar-section">
          <Link to="/settings" className="sidebar-link">Settings</Link>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Employment Status</h1>
          <button className="button" onClick={() => setShowModal(true)}>Add Employment Status</button>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
              <form onSubmit={handleAddOrUpdateStatus} className="status-form">
                <input
                  type="text"
                  name="name"
                  value={currentStatus.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="preview"
                  value={currentStatus.preview}
                  onChange={handleInputChange}
                  placeholder="Preview"
                  required
                />
                <button type="submit" className="button">{isEditing ? 'Update Status' : 'Add Status'}</button>
              </form>
            </div>
          </div>
        )}
        <table className="statuses-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Preview</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map(status => (
              <tr key={status.id}>
                <td>{status.name}</td>
                <td>{status.preview}</td>
                <td>
                  <button onClick={() => handleEditStatus(status)}>Edit</button>
                  <button onClick={() => handleDeleteStatus(status.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmploymentStatus;
