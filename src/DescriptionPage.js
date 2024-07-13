import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/description.css"; // Import CSS file for description page styles
import axios from 'axios';

const DescriptionPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(0);

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
      setStatus(newStatus);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card-container">
      <div>
        <div>
          <h4>Task Details</h4>
          <p>Task Description: Fetch from database or use a placeholder</p>
          
          <p>Have you completed your task?</p>
          <button onClick={() => handleStatusChange(id, 1)}>Yes</button>
          <button onClick={() => handleStatusChange(id, 0)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
