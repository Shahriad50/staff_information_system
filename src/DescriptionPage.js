import React, { useState } from "react";
import descriptions from "./descriptions";
import { useParams } from "react-router-dom";
import "./css/description.css"; // Import CSS file for description page styles

const DescriptionPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(descriptions.find((task) => task.id === parseInt(id)).status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    descriptions.find((task) => task.id === parseInt(id)).status = newStatus;
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
          <button onClick={() => handleStatusChange("Completed")}>Yes</button>
          <button onClick={() => handleStatusChange("Pending")}>No</button>
          
          
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
