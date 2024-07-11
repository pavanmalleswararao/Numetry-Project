import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Designation.css';

const Designation = () => {
  const [designations, setDesignations] = useState([
    { id: 1, name: 'Web Development', description: 'jhbjvh', numberOfEmployees: 45 },
    { id: 2, name: 'Human Resources', description: '', numberOfEmployees: 20 },
    { id: 3, name: 'Directors', description: '', numberOfEmployees: 5 }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState({ id: '', name: '', description: '', numberOfEmployees: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentDesignation({
      ...currentDesignation,
      [name]: value
    });
  };

  const handleAddOrUpdateDesignation = (e) => {
    e.preventDefault();
    if (isEditing) {
      setDesignations(designations.map(designation => (designation.id === currentDesignation.id ? currentDesignation : designation)));
    } else {
      const newDesignation = {
        ...currentDesignation,
        id: designations.length + 1
      };
      setDesignations([...designations, newDesignation]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEditDesignation = (designation) => {
    setIsEditing(true);
    setCurrentDesignation(designation);
    setShowModal(true);
  };

  const handleDeleteDesignation = (id) => {
    setDesignations(designations.filter(designation => designation.id !== id));
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentDesignation({ id: '', name: '', description: '', numberOfEmployees: '' });
  };

  return (
    <div className="designation-container">
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
          >
            <option value="all-employees">All Employees</option>
            <option value="designation" selected>Designation</option>
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
          <h1>Designation</h1>
          <button className="button" onClick={() => setShowModal(true)}>Add Designation</button>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
              <form onSubmit={handleAddOrUpdateDesignation} className="designation-form">
                <input
                  type="text"
                  name="name"
                  value={currentDesignation.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="description"
                  value={currentDesignation.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  required
                />
                <input
                  type="number"
                  name="numberOfEmployees"
                  value={currentDesignation.numberOfEmployees}
                  onChange={handleInputChange}
                  placeholder="Number of Employees"
                  required
                />
                <button type="submit" className="button">{isEditing ? 'Update Designation' : 'Add Designation'}</button>
              </form>
            </div>
          </div>
        )}
        <table className="designations-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>No. of Employees</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {designations.map(designation => (
              <tr key={designation.id}>
                <td>{designation.name}</td>
                <td>{designation.description}</td>
                <td>{designation.numberOfEmployees}</td>
                <td>
                  <button onClick={() => handleEditDesignation(designation)}>Edit</button>
                  <button onClick={() => handleDeleteDesignation(designation.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Designation;
