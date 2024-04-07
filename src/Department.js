import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const Department = () => {
  return (
    <div className="card-container">
      <Card title="CSE" />
      <Card title="EEE" />
    </div>
  );
};

export default Department;
