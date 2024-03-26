import React from "react";
import "./css/sidebar.css";

const Sidebar = ({ onSelectOption }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Staff Information System</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li onClick={() => onSelectOption("Dashboard")}>
            <i className="fas fa-chart-line"></i> Dashboard
          </li>
          <li onClick={() => onSelectOption("Notice Board")}>
            <i className="fas fa-bullhorn"></i> Notice Board
          </li>
          <li onClick={() => onSelectOption("Assign Task")}>
            <i className="fas fa-tasks"></i> Assign Task
          </li>
          <li onClick={() => onSelectOption("Worklist")}>
            <i className="fas fa-tasks"></i> Worklist
          </li>
          <li onClick={() => onSelectOption("Notification")}>
            <i className="fas fa-bell"></i> Notification
          </li>
          <li onClick={() => onSelectOption("About")}>
            <i className="fas fa-info-circle"></i> About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
