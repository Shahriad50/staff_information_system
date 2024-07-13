import React, { useState, useEffect } from "react";
import "./css/AssignTask.css";
import "./css/card.css";
import axios from "axios";
const token = "ca7b5cd4-3fb7-11ef-a839-3c5282764ceb";

const StaffDropdown = () => {
  const [selectedStaff, setSelectedStaff] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [message, setMessage] = useState("");
  const [staffList, setStaffList] = useState([]);
  const [department, setDepartment] = useState("EEE");

  // Utility function to convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get(
          `http://api.bike-csecu.com/api/staff/department/${department}`
        );
        setStaffList(response.data.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };
    fetchStaffData();
  }, [department]);

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStaffChange = (event) => {
    setSelectedStaff(event.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const base64File = await toBase64(file);
      setTaskAttachment(base64File);
    } else {
      setTaskAttachment(null);
      setMessage("Please upload a PDF file.");
    }
  };

  const handleAssign = async () => {
    if (!selectedStaff || !taskDescription || !dueDate || !taskTitle) {
      setMessage("All fields are required.");
      return;
    }
    const newTask = {
      assign_to: selectedStaff,
      assign_date: new Date().toISOString(),
      due_date: dueDate,
      task_title: taskTitle,
      task_description: taskDescription,
      task_status: 0, // Default status for new task
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        "http://api.bike-csecu.com/api/task/add",
        newTask,
        config
      );
      console.log(response.data);
      if (response.data) {
        setMessage("Task added successfully.");
        setSelectedStaff("");
        setTaskDescription("");
        setDueDate("");
        setTaskTitle("");
        setTaskAttachment(null);
      } else {
        setMessage("Failed to add task. Please try again.");
      }
    } catch (error) {
      console.error("Error assigning task:", error);
      setMessage("Failed to assign task. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <div className="row card-container">
        <div className="staff-dropdown-container">
          <div className="assign-task-content">
            <h2>Assign Task</h2>
            {message && <p>{message}</p>}
            <div className="form-group">
              <label className="label" htmlFor="department">
                Select Department:
              </label>
              <select
                id="department"
                value={department}
                onChange={handleDepartmentChange}
                className="select-box white-background"
              >
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="staff">
                Select Staff:
              </label>
              <select
                id="staff"
                value={selectedStaff}
                onChange={handleStaffChange}
                className="select-box white-background"
              >
                <option value="">Choose staff member</option>
                {staffList.map((staff) => (
                  <option key={staff.user_id} value={staff.user_id}>
                    {staff.first_name} {staff.last_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="task_title">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title for task"
                id="task_title"
                value={taskTitle}
                onChange={handleTitleChange}
              />
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
            <div className="form-group">
              {/* <label className="label" htmlFor="taskAttachment">
                Task Attachment (PDF):
              </label>
              <input
                type="file"
                id="taskAttachment"
                onChange={handleFileChange}
                className="input-box"
                accept="application/pdf"
              /> */}
            </div>
            <button onClick={handleAssign} className="assign-button">
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDropdown;
