import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import office from "./assets/office.jpg";
import examcontrollerpic from "./assets/Exam_Controller.webp";
import vicechancellorpic from "./assets/Vice Chancellor.webp";
import provice from "./assets/Pro Vice Chancellor.webp";
import librarypic from "./assets/Chittagong_University_Library_(01).jpg";

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

        <Link to="/dashboard/office/library" style={linkStyle}>
          <Card title="Library" image={librarypic} />
        </Link>

        <Link to="/office/register" style={linkStyle}>
          <Card title="Exam-Controller" image={office} />
        </Link>

        <Link to="/office/register" style={linkStyle}>
          <Card title="Vice-chancellor" image={vicechancellorpic} />
        </Link>

        <Link to="/office/register" style={linkStyle}>
          <Card title="Pro-vice-chancellor" image={provice} />
        </Link>

        {/* Link to the '/dashboard/department' route */}
        <Link to="/dashboard/office/businessaccountants" style={linkStyle}>
          <Card title="Business Accountants" image={office} />
        </Link>

        {/* {/* <Link to="/dashboard/office/medical" style={linkStyle}>
        <Card title="Medical" />
      </Link> */}
      </div>
    </div>
  );
};

export default Office;
