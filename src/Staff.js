import React from "react";
import "./css/staff.css";

const Staff = ({ staff }) => {
  const { image, name, designation } = staff;

  return (
    <div className="staff-card">
      <div className="card-image-staff">
        <img src={image} alt={name.bengali} />
      </div>
      <div className="card-details-staff">
        <h3 className="staff-name-staff">{name.bengali}</h3>
        <p className="staff-designation-staff">{designation}</p>
      </div>
    </div>
  );
};

export default Staff;
