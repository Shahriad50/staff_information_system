import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const Office = () => {
  return (
    <div className="card-container">
      <Card title="Register" />
      <Card title="Exam Controller" />
      <Card title="Business Accountants" />
      <Card title="Medical" />
      <Card title="Library" />
    </div>
  );
};

export default Office;
