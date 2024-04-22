import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const Information = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
  };

  return (
    <div className="card-container">
      <div className="subcard-container">
        {/* Link to the '/dashboard/committee' route */}
        <Link to="/committee" style={linkStyle}>
          <Card title="Committee" />
        </Link>

        {/* Link to the '/dashboard/office' route */}
        <Link to="/office" style={linkStyle}>
          <Card title="Office" />
        </Link>

        {/* Link to the '/dashboard/department' route */}
        <Link to="/department" style={linkStyle}>
          <Card title="Department" />
        </Link>
      </div>
    </div>
  );
};

export default Information;
