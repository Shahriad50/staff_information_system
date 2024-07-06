import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";
import provicestaffData from "./data/provicechancellor"; // Import the data file
import "./css/card.css"; // Import CSS file for styling
import "./css/staff.css";

const ProViceChancellor = () => {
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
        {provicestaffData.map((staff, index) => (
          <Link
            key={index}
            to={{
              pathname: `/office/register/${createPathname(
                staff.name.bengali
              )}`,
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

export default ProViceChancellor;
