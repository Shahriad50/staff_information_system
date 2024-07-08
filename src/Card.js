import React from "react";
import "./css/card.css"; // Import CSS file for styling
import noimage from "./assets/noimage.jpg";
import "./css/staff.css";

const Card = (props) => {
  const imageUrl = props.image ? props.image : noimage;

  return (
    <div className="card">
      <div className="card-image-staff">
        <img src={imageUrl} alt="card image" />
      </div>
      <div className="staff-name-staff">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
