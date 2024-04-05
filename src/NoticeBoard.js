import React from "react";
import Card from "./Card";
import "./css/card.css";

const NoticeBoard = () => {
  return (
    <div className="card-container">
      <Card title="Notice Board" />
      <div className="notice-board-content">
        <h3>Notice Board</h3>
        <ul>
          <li>Notice 1</li>
          <li>Notice 2</li>
          <li>Notice 3</li>
          {/* Add more notices as needed */}
        </ul>
      </div>
    </div>
  );
};

export default NoticeBoard;
