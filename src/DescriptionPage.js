import React, { useState } from "react";
import descriptions from "./descriptions";
import { useParams } from "react-router-dom";
import "./css/description.css"; // Import CSS file for description page styles
import axios from 'axios';
const DescriptionPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(0);

  const handleStatusChange = async(id) => {
    setStatus(1);
    const config = {
      headers: {
        
        "Content-Type": "application/json",
        "Authorization": "Bearer 078aa707-3a04-11ef-a1cb-3c5282764ceb"
      },
    };
  try{
    const response=await axios.put(`http://localhost:5000/api/task/update/${id}`,config,status);
    console.log(response.data
    );
    //edit this
    setStatus(response.data.task_status);
  }
  catch(error){
    console.log(error.message);
  }
  };

  return (
    <div className="card-container"> {/* Container with centered styles */}
      <div>
        <div>
          <h4>{descriptions.find((task) => task.id === parseInt(id)).title}</h4>
          <p>{descriptions.find((task) => task.id === parseInt(id)).description}</p>
          
          {/* Add multiple new lines */}
          <br /><br /><br /><br /><br /><br /><br />
          
          <p>Have you completed your task? </p>
          <button onClick={() => handleStatusChange(id)}>Yes</button>
          <button onClick={() => handleStatusChange(id)}>No</button>
          
          
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
