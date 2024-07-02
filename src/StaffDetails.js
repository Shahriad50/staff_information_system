import React, { useState } from "react";
import Modal from "react-modal";
import "./css/staffdetails.css"; // Import CSS file for styling
import "./css/card.css"; // Import CSS file for styling

Modal.setAppElement("#root"); // Set the root element for accessibility

const StaffDetails = ({ location }) => {
  const { staff } = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-container">
      <div className="staff-detailed-card">
        <div
          className="card-image"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        >
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
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "40%",
            height: "80%",
            margin: "auto",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            overflow: "auto",
          },
        }}
      >
        <img
          src={staff.image}
          alt={staff.name.english}
          style={{ maxWidth: "110%", maxHeight: "100%" }}
        />
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "#333",
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default StaffDetails;
