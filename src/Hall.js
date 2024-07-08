import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import noimage from "./assets/noimage.jpg";
import { Link } from "react-router-dom";

// Hall images
import hall from "./assets/hall.jpg";
import hall2 from "./assets/alawalhall.jpeg";
import hall3 from "./assets/afrahmanhall.jpeg";
import hall4 from "./assets/shahjalalhall.jpeg";
import hall5 from "./assets/shamsunnaharhall.jpeg";
import hall6 from "./assets/pritilatahall.jpg";

// Add more hall images as needed

const halls = [
  { title: "Shaheed Abdur Rab Hall", image: hall, path: "/office/register" },
  { title: "A F Rahman Hall", image: hall3, path: "/office/register" },
  { title: "Alawal Hall", image: hall2, path: "/office/register" },
  { title: "Shahjalal Hall", image: hall4, path: "/office/register" },
  { title: "Shamsun Nahar Hall", image: hall5, path: "/office/register" },
  { title: "Pritilata Hall", image: hall6, path: "/office/register" },
];

const linkStyle = {
  textDecoration: "none", // Example link style, adjust as needed
};

const Hall = () => {
  return (
    <div className="card-container">
      <div className="subcard-container">
        {halls.map((hall, index) => (
          <Link key={index} to={hall.path} style={linkStyle}>
            <Card title={hall.title} image={hall.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hall;
