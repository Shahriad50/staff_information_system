import React from "react";
import "./css/card.css";

const About = () => {
  return (
    <div className="card-container">
      <div className="about-content">
        <h3>About Staff Information System</h3>
        <p>
          The Staff Information System is a web application designed to manage
          information about the staff members of an organization. It provides a
          centralized platform for storing and accessing details about
          employees, including their personal information, contact details, job
          roles, and more.
        </p>
        <p>
          With the Staff Information System, administrators can efficiently
          organize and maintain staff records, track employee data, and
          facilitate communication within the organization. This system
          streamlines various HR processes, making it easier to onboard new
          employees, update existing records, and ensure accuracy and
          consistency across the board.
        </p>
        <p>
          Our mission is to provide a user-friendly and robust solution that
          meets the needs of modern organizations, helping them effectively
          manage their staff information and optimize their human resource
          management practices.
        </p>
      </div>
    </div>
  );
};

export default About;
