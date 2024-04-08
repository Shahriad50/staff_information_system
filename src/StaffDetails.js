import React from "react";
import "./css/staff.css"; // Import CSS file for styling
import "./css/card.css"; // Import CSS file for styling

const StaffDetails = ({ location }) => {
  const { staff } = location.state;

  return (
    <div className="card-container">
      <div className="staff-detailed-card">
        <div className="card-image">
          <img src={staff.image} alt={staff.name.english} />
        </div>
        <div className="card-details">
          <h2 className="staff-name">{staff.name.english}</h2>
          <p className="staff-bengali-name">{staff.name.bengali}</p>
          <p className="staff-designation">{staff.designation}</p>
          <p className="staff-info">
            <strong>Education:</strong> {staff.education}
          </p>
          <p className="staff-info">
            <strong>Join Date:</strong> {staff.joinDate}
          </p>
          <p className="staff-info">
            <strong>Phone:</strong> {staff.phone}
          </p>
          <p className="staff-info">
            <strong>Email:</strong> {staff.email}
          </p>
          <p className="staff-info">
            <strong>Gender:</strong> {staff.gender}
          </p>
          <p className="staff-info">
            <strong>Blood Group:</strong> {staff.bloodGroup}
          </p>
          <p className="staff-info">
            <strong>Religion:</strong> {staff.religion}
          </p>
          <p className="staff-info">
            <strong>Date of Birth:</strong> {staff.dob}
          </p>
          <p className="staff-info">
            <strong>Nationality:</strong> {staff.nationality}
          </p>
          <p className="staff-info">
            <strong>Ethnicity:</strong> {staff.ethnicity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
