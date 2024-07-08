import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";
import CSEStaffData from "./data/CSEstaff"; // Import the data fil
import "./css/card.css"; // Import CSS file for styling
import "./css/staff.css";

const CSE = () => {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black // Prevent reduction in card width caused by the link
  };

  const createPathname = (name) => {
    return name.replace(/\s+/g, "-"); // Replace spaces with dashes
  };

  return (
    <div className="card-container">
      <div className="staffcard-container">
        {CSEStaffData.map((staff, index) => (
          <Link
            key={index}
            to={{
              pathname: `/department/cse/${createPathname(staff.name.bengali)}`,
              state: { staff },
            }}
            style={linkStyle}
          >
            <Staff staff={staff} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CSE;
