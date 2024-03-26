import React from "react";
import "./css/card.css"; // Import CSS file for styling

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <div className="card-body">
        <p>This is the content of the card.</p>
      </div>
    </div>
  );
};

export default Card;
