import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const Committee = () => {
  return (
    <div className="card-container">
      <Card title="Vice Chancellor" />
      <Card title="Provost" />
      <Card title="Other" />
    </div>
  );
};

export default Committee;
