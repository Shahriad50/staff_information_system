import React from "react";
import Card from "./Card";
import "./css/card.css";

const About = () => {
  return (
    <div className="main-card-container">
      <Card title="About" />
      <div className="about-content">
        <h3>About</h3>
        <p>
          This is the about page. It contains information about the application.
        </p>
      </div>
    </div>
  );
};

export default About;
