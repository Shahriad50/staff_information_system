import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import department from "./assets/department.jpg";
import eee from "./assets/eee.jpg";
import scienceFaculty from "./assets/scienceFaculty.jpg";
import geneticengineering from "./assets/geneticengineering.jpeg";
import marineAndfisheries from "./assets/Marine_Sciences_and_Fisheries_building,Chittagong_University.jpg";
import biologicalScience from "./assets/Faculty_of_Biological_Science_at_University_of_Chittagong_(08).jpg";

const Department = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black
  };

  return (
    <div className="card-container">
      <div className="subcard-container">
        <Link to="/department/cse" style={linkStyle}>
          <Card title="CSE" image={department} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="EEE" image={eee} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Chemistry" image={scienceFaculty} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Genetic Engineering" image={geneticengineering} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Pharmacy" image={biologicalScience} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Physics" image={scienceFaculty} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Marine Science" image={marineAndfisheries} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Fisheries" image={marineAndfisheries} />
        </Link>

        <Link to="/department/eee" style={linkStyle}>
          <Card title="Applied Chemistry" image={scienceFaculty} />
        </Link>
      </div>
    </div>
  );
};

export default Department;
