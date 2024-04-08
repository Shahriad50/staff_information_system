import React from "react";
import "./css/staff.css";

const Staff = ({ staff }) => {
  const { image, name, designation } = staff;

  return (
    <div className="detailed-card">
      <div className="card-image">
        <img src={image} alt={name.english} />
      </div>
      <div className="card-details">
        <h3 className="staff-name">{name.english}</h3>
        <p className="staff-designation">{designation}</p>
      </div>
    </div>
  );
};

export default Staff;
