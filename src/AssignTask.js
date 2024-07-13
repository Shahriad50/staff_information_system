
import React, { useState,useEffect } from "react";
import "./css/AssignTask.css";
import "./css/card.css";
import axios from 'axios';

const token= process.env.REACT_APP_SESSION_TOKEN;
const StaffDropdown = () => {
  const [selectedStaff, setSelectedStaff] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [message, setMessage] = useState(""); 
  const [staffList, setStaffList] = useState([]);
  const [department,setDepartment]=useState("EEE");

  const fetchUserData=async()=>{
    // Fetch user data from the API
    try {
      const response = await axios.get(`http://api.bike-csecu.com/api/user/`); // Update with your API endpoint
      setDepartment(response.data.data.factor);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  } 
  useEffect( () => {
  //  fetchUserData();
    // Fetch staff data from the API
    const fetchStaffData = async () => {
      try {
        const response = await axios.get(`http://api.bike-csecu.com/api/staff/department/${department}`); 
        setStaffList(response.data.data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, );
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

 
  
    const handleAssign = async () => {
      if (!selectedStaff || !taskDescription || !dueDate ) {
        setMessage("All fields are required.");
        return;
      }
      const newTask = {
        assign_to: selectedStaff,
        assign_date: new Date().toISOString(),
        due_date: dueDate,
        task_title: taskTitle,
        task_description: taskDescription,
        task_attachment: "", // Add attachment logic if needed
        task_status: 0 // Default status for new task
      };
      const config ={
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
      }
      try{
        const response= await axios.post("http://api.bike-csecu.com/api/task/add",newTask,config);
        console.log(response.data);
        if(response.data){
            setMessage(`Task added to  successfully.`);
            setSelectedStaff("");
            setTaskDescription("");
            setDueDate("");
            setTaskTitle("");
          } else {
            setMessage("Failed to add task. Please try again.");
          }
        }
      catch(error){
        console.error("Error assigning task:", error);
        setMessage("Failed to assign task. Please try again.");
        return;
      }
     
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
              {staffList.map((staff) => (
          <option key={staff.user_id} value={staff.user_id}>
            {staff.first_name} {staff.last_name}
          </option>
        ))}
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="task_title">
             Title :
            </label>
            <input type="text" className="form-control" placeholder="Enter title for task"
              id="task_title"
              value={taskTitle}
              onChange={handleTitleChange}
            >
            </input>
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
