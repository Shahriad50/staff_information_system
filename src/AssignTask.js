import React from "react";
import Card from "./Card";
import "./css/card.css";

const AssignTask = () => {
  return (
    <div className="main-card-container">
      <Card title="Assign Task" />
      <div className="assign-task-content">
        <h3>Assign Task</h3>
        <form>
          <label htmlFor="task">Task:</label>
          <input type="text" id="task" name="task" />
          <button type="submit">Assign</button>
        </form>
      </div>
    </div>
  );
};

export default AssignTask;
