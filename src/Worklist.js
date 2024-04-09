import React from "react";
import { Link } from "react-router-dom";
import descriptions from "./descriptions";
import "./css/card.css";
import "./css/worklist.css";

const Worklist = () => {
  return (
    <div className="card-container">
      <h3>Worklist</h3>
      <table className="worklist-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Date</th>
            <th>Due Date</th>
            <th>Assigned by</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {descriptions.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td><Link to={`/description/${task.id}`}>{task.title}</Link></td>
              <td>{task.date}</td>
              <td>{task.dueDate}</td>
              <td>{task.assignedBy}</td>
              {/* Conditionally apply CSS class based on status */}
              <td className={task.status === "Completed" ? "completed" : "pending"}>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Worklist;
