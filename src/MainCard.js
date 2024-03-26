import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling

const MainCard = () => {
  return (
    <div className="main-card-container">
      <Card title="Committee" />
      <Card title="Office" />
      <Card title="Department" />
    </div>
  );
};

export default MainCard;
