import React, { useState } from 'react';
import './css/card.css';

const StaffDropdown = () => {
  const [selectedStaff, setSelectedStaff] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('');

  const handleStaffChange = (e) => {
    setSelectedStaff(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityLevel(e.target.value);
  };

  const handleAssign = () => {
    // Your assign logic here
    console.log('Assign action performed');
    console.log('Selected Staff:', selectedStaff);
    console.log('Task Description:', taskDescription);
    console.log('Due Date:', dueDate);
    console.log('Priority Level:', priorityLevel);
  };

  return (
    <div className="staff-dropdown-container">
      <div className="assign-task-content">
        <h2>Assign Task</h2>
        <div className="form-group">
          <label className="label" htmlFor="staff">Select Staff:</label>
          <select id="staff" value={selectedStaff} onChange={handleStaffChange} className="select-box">
            <option value="">Choose staff member</option>
            <option value="staff1">Staff 1</option>
            <option value="staff2">Staff 2</option>
            <option value="staff3">Staff 3</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="priorityLevel">Priority Level:</label>
          <select id="priorityLevel" value={priorityLevel} onChange={handlePriorityChange} className="select-box">
            <option value="">Select priority level</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" value={dueDate} onChange={handleDueDateChange} className="input-box" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="taskDescription">Task Description:</label>
          <textarea id="taskDescription" value={taskDescription} onChange={handleDescriptionChange} className="textarea-box"></textarea>
        </div>
        <button onClick={handleAssign} className="assign-button">Assign</button>
      </div>
    </div>
  );
};

export default StaffDropdown;

