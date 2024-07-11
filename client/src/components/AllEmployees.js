import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AllEmployees.css';
import Modal from './Modal'; // Assuming you have a Modal component

const AllEmployees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      profile: 'John Doe',
      employeeId: 'E001',
      designation: 'Software Engineer',
      employmentStatus: 'Full-Time',
      department: 'Engineering',
      workshift: 'Morning',
      joiningDate: '2022-01-15',
      salary: 70000,
      role: 'Developer'
    },
    {
      id: 2,
      profile: 'Jane Smith',
      employeeId: 'E002',
      designation: 'Product Manager',
      employmentStatus: 'Full-Time',
      department: 'Product',
      workshift: 'Morning',
      joiningDate: '2021-11-20',
      salary: 90000,
      role: 'Manager'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({
    id: '',
    profile: '',
    employeeId: '',
    designation: '',
    employmentStatus: '',
    department: '',
    workshift: '',
    joiningDate: '',
    salary: '',
    role: ''
  });

  const [role, setRole] = useState('all-employees');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee({
      ...currentEmployee,
      [name]: value
    });
  };

  const handleAddOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEmployees(employees.map(emp => (emp.id === currentEmployee.id ? currentEmployee : emp)));
    } else {
      const newEmployee = {
        ...currentEmployee,
        id: employees.length + 1
      };
      setEmployees([...employees, newEmployee]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEditEmployee = (employee) => {
    setIsEditing(true);
    setCurrentEmployee(employee);
    setShowModal(true);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentEmployee({
      id: '',
      profile: '',
      employeeId: '',
      designation: '',
      employmentStatus: '',
      department: '',
      workshift: '',
      joiningDate: '',
      salary: '',
      role: ''
    });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value === 'designation') {
      history.push('/designation');
    } else if (e.target.value === 'employment-status') {
      history.push('/employment-status');
    } else {
      history.push('/employee');
    }
  };

  return (
    <div className="all-employees-container">
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
          <h1>All Employees</h1>
          <button className="button" onClick={() => setShowModal(true)}>Add Employee</button>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <form onSubmit={handleAddOrUpdateEmployee} className="employee-form">
            <input
              type="text"
              name="profile"
              value={currentEmployee.profile}
              onChange={handleInputChange}
              placeholder="Profile"
              required
            />
            <input
              type="text"
              name="employeeId"
              value={currentEmployee.employeeId}
              onChange={handleInputChange}
              placeholder="Employee ID"
              required
            />
            <input
              type="text"
              name="designation"
              value={currentEmployee.designation}
              onChange={handleInputChange}
              placeholder="Designation"
              required
            />
            <input
              type="text"
              name="employmentStatus"
              value={currentEmployee.employmentStatus}
              onChange={handleInputChange}
              placeholder="Employment Status"
              required
            />
            <input
              type="text"
              name="department"
              value={currentEmployee.department}
              onChange={handleInputChange}
              placeholder="Department"
              required
            />
            <input
              type="text"
              name="workshift"
              value={currentEmployee.workshift}
              onChange={handleInputChange}
              placeholder="Workshift"
              required
            />
            <input
              type="date"
              name="joiningDate"
              value={currentEmployee.joiningDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="salary"
              value={currentEmployee.salary}
              onChange={handleInputChange}
              placeholder="Salary"
              required
            />
            <input
              type="text"
              name="role"
              value={currentEmployee.role}
              onChange={handleInputChange}
              placeholder="Role"
              required
            />
            <button type="submit" className="button">{isEditing ? 'Update Employee' : 'Add Employee'}</button>
          </form>
        </Modal>
        <table className="employees-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Employee Id</th>
              <th>Designation</th>
              <th>Employment Status</th>
              <th>Department</th>
              <th>Workshift</th>
              <th>Joining Date</th>
              <th>Salary</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.profile}</td>
                <td>{employee.employeeId}</td>
                <td>{employee.designation}</td>
                <td>{employee.employmentStatus}</td>
                <td>{employee.department}</td>
                <td>{employee.workshift}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.salary}</td>
                <td>{employee.role}</td>
                <td>
                  <button onClick={() => handleEditEmployee(employee)}>Edit</button>
                  <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployees;
