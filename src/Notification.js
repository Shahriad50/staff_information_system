import React from "react";
import Card from "./Card";
import "./css/card.css";

const Notification = () => {
  return (
    <div className="card-container">
      <Card title="Notification" />
      <div className="notification-content">
        <h3>Notification</h3>
        <p>No new notifications.</p>
      </div>
    </div>
  );
};

export default Notification;
