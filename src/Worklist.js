import React from "react";
import Card from "./Card";
import "./css/card.css";

const Worklist = () => {
  return (
    <div className="card-container">
      <Card title="Worklist" />
      <div className="worklist-content">
        <h3>Worklist</h3>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
          {/* Add more tasks as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Worklist;
