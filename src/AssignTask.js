
import React, { useState } from "react";
import "./css/AssignTask.css";
import "./css/card.css";


const StaffDropdown = () => {
  const [selectedStaff, setSelectedStaff] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [message, setMessage] = useState(""); 

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
      if (!selectedStaff || !taskDescription || !dueDate || !priorityLevel) {
        setMessage("All fields are required.");
        return;
      }
      const newTask = {
        assign_to: selectedStaff,
        assign_date: new Date().toISOString(),
        due_date: dueDate,
        task_title: `Task assigned to ${selectedStaff}`,
        task_description: taskDescription,
        task_attachment: "", // Add attachment logic if needed
        task_status: 0 // Default status for new task
      };
    fetch("api.bike-csecu.com/api/tasks/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setMessage("Task added successfully.");
        setSelectedStaff("");
        setTaskDescription("");
        setDueDate("");
        setPriorityLevel("");
      } else {
        setMessage("Failed to add task. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error adding task:", error);
      setMessage("An error occurred. Please try again.");
    });
  };

  return (
    <div className=" row card-container">
      <div className="staff-dropdown-container">
        <div className="assign-task-content">
          <h2>Assign Task</h2>
          {message && <p>{message}</p>}
          <div className="form-group">
            <label className="label" htmlFor="staff">
              Select Staff:
            </label>
            <select
              id="staff"
              value={selectedStaff}
              onChange={handleStaffChange}
              className="select-box"
            >
              <option value="">Choose staff member</option>
              <option value="staff1">Staff 1</option>
              <option value="staff2">Staff 2</option>
              <option value="staff3">Staff 3</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="priorityLevel">
              Priority Level:
            </label>
            <select
              id="priorityLevel"
              value={priorityLevel}
              onChange={handlePriorityChange}
              className="select-box"
            >
              <option value="">Select priority level</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="dueDate">
              Due Date:
            </label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={handleDueDateChange}
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="taskDescription">
              Task Description:
            </label>
            <textarea
              id="taskDescription"
              value={taskDescription}
              onChange={handleDescriptionChange}
              className="textarea-box"
            ></textarea>
          </div>
          <button onClick={handleAssign} className="assign-button">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffDropdown;
