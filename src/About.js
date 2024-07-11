import React from "react";
import "./css/card.css";

const About = () => {
  return (
    <div className="card-container">
      <div className="about-content">
        <h3>Staff Information System</h3>
        <p>
          The <strong>Staff Information System</strong> is a comprehensive
          platform designed to streamline various administrative and
          communication tasks within a university setting. It features an
          Information section where detailed profiles of all staff members are
          stored and can be easily accessed. The Notice Board functionality
          allows for the efficient upload and dissemination of university
          notices, ensuring that all relevant parties stay informed. Teachers
          can use the Assign Task feature to delegate tasks to their department
          staff, facilitating organized and effective workload management.
          Additionally, the Worklist feature provides staff members with a clear
          overview of tasks assigned to them by their department teachers,
          promoting accountability and productivity. This application aims to
          enhance the overall efficiency and communication within the university
          environment.
        </p>
      </div>
    </div>
  );
};

export default About;
