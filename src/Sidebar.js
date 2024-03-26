import React from "react";
import "./css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Staff Information System</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <i className="fas fa-chart-line"></i> Dashboard
          </li>
          <li>
            <i className="fas fa-bullhorn"></i> Notice Board
          </li>
          <li>
            <i className="fas fa-tasks"></i> Assign Task
          </li>
          <li>
            <i className="fas fa-tasks"></i> Worklist
          </li>
          <li>
            <i className="fas fa-bell"></i> Notification
          </li>
          <li>
            <i className="fas fa-info-circle"></i> About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
