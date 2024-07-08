import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import office from "./assets/office.jpg";

const Office = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
  };

  return (
    <div className="card-container">
      <div className="subcard-container">
        {/* Link to the '/dashboard/committee' route */}
        <Link to="/office/register" style={linkStyle}>
          <Card title="Registrar" image={office} />
        </Link>

        <Link to="/office/vicechancellor" style={linkStyle}>
          <Card title="Vice-chancellor" />
        </Link>

        <Link to="/office/provicechancellor" style={linkStyle}>
          <Card title="Pro-vice-chancellor" />
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
    </div>
  );
};

export default Office;
