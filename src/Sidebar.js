import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Staff Information System</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Information</Link>
          </li>
          <li className={location.pathname === "/noticeboard" ? "active" : ""}>
            <Link to="/noticeboard">Notice Board</Link>
          </li>
          <li className={location.pathname === "/assigncourse" ? "active" : ""}>
            <Link to="/assigncourse">Assign Course</Link>
          </li>
          <li className={location.pathname === "/assigntask" ? "active" : ""}>
            <Link to="/assigntask">Assign Task</Link>
          </li>
          <li className={location.pathname === "/worklist" ? "active" : ""}>
            <Link to="/worklist">Worklist</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
