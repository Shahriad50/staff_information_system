import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import office from "./assets/office.jpg";
import department from "./assets/department.jpg";
import hall from "./assets/hall.jpg";
import eee from "./assets/eee.jpg";

const Information = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
  };

  return (
    <div className="card-container">
      <div className="subcard-container">
        {/* Link to the '/dashboard/committee' route */}

        {/* Link to the '/dashboard/office' route */}
        <Link to="/office" style={linkStyle}>
          <Card title="Offices" image={office} />
        </Link>

        {/* Link to the '/dashboard/department' route */}
        <Link to="/department" style={linkStyle}>
          <Card title="Departments" image={eee} />
        </Link>

        <Link to="/hall" style={linkStyle}>
          <Card title="Halls of Residence" image={hall} />
        </Link>
      </div>
    </div>
  );
};

export default Information;
