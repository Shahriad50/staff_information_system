import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./css/description.css"; // Import CSS file for description page styles

const DescriptionPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTaskDetails(id);
  }, [id]);

  const fetchTaskDetails = async (taskId) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 078aa707-3a04-11ef-a1cb-3c5282764ceb"
        },
      };
      const response = await axios.get(`http://api.bike-csecu.com/api/task/${taskId}`, config);
      console.log(response.data);
      setTask(response.data); // Assuming response.data contains the task details
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 078aa707-3a04-11ef-a1cb-3c5282764ceb"
        },
      };
      const response = await axios.put(`http://api.bike-csecu.com/api/task/update/${taskId}`, { task_status: newStatus }, config);
      console.log(response.data);
      setTask(prevTask => ({
        ...prevTask,
        task_status: newStatus
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!task) {
    return <div>Loading...</div>; // Add loading indicator while fetching data
  }

  return (
    <div className="card-container">
      <div>
        <div>
          <h4>{task.task_title}</h4>
          <p>{task.task_description}</p>
          
          <p>Have you completed your task?</p>
          <button onClick={() => handleStatusChange(task.task_id, 1)}>Yes</button>
          <button onClick={() => handleStatusChange(task.task_id, 0)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
