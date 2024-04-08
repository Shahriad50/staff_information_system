import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const DashBoard = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
    display: "inline-block", // Prevent reduction in card width caused by the link
    width: "100%", // Set width to 100% to avoid affecting the card width
    marginLeft: "250px", // Add left margin
  };

  return (
    <div className="card-container">
      {/* Link to the '/dashboard/committee' route */}
      <Link to="/dashboard/committee" style={linkStyle}>
        <Card title="Committee" />
      </Link>
      {/* Link to the '/dashboard/office' route */}
      <Link to="/dashboard/office" style={linkStyle}>
        <Card title="Office" />
      </Link>
      {/* Link to the '/dashboard/department' route */}
      <Link to="/dashboard/department" style={linkStyle}>
        <Card title="Department" />
      </Link>
    </div>
  );
};

export default DashBoard;
