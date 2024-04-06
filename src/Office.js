import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const Office = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
    display: "inline-block", // Prevent reduction in card width caused by the link
    width: "100%", // Set width to 100% to avoid affecting the card width
    marginLeft: "500px", // Add left margin
  };

  return (
    <div className="card-container">
      {/* Link to the '/dashboard/committee' route */}
      <Link to="/dashboard/office/register" style={linkStyle}>
        <Card title="Registrar" />
      </Link>
      {/* Link to the '/dashboard/office' route */}
      {/* <Link to="/dashboard/office/examcontroller" style={linkStyle}>
        <Card title="Exam Controller" />
      </Link> */}
      {/* Link to the '/dashboard/department' route */}
      {/* <Link to="/dashboard/office/businessaccountants" style={linkStyle}>
        <Card title="Business Accountants" />
      </Link> */}

      {/* <Link to="/dashboard/office/medical" style={linkStyle}>
        <Card title="Medical" />
      </Link>

      <Link to="/dashboard/office/library" style={linkStyle}>
        <Card title="Library" />
      </Link> */}
    </div>
  );
};

export default Office;
