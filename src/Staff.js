import React from "react";
import "./css/card.css"; // Import CSS file for styling
import "./css/staff.css";

const Staff = ({ image, name, designation }) => {
  return (
    <div className="detailed-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-details">
        <h3 className="staff-name">{name}</h3>
        <p className="staff-designation">{designation}</p>
      </div>
    </div>
  );
};

export default Staff;
