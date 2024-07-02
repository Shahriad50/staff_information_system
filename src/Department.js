import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const Department = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
  };

  return (
    <div className="card-container">
      <div className="subcard-container">
        <Link to="/department/cse" style={linkStyle}>
          <Card title="CSE" />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="EEE" />
        </Link>
      </div>
    </div>
  );
};

export default Department;
