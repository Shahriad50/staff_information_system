import React from "react";
import Card from "./Card"; // Import the Card component
import "./css/card.css"; // Import CSS file for styling
import noimage from "./assets/noimage.jpg";

// Hall images
import hall from "./assets/hall.jpg";
import hall2 from "./assets/alawalhall.jpeg";
import hall3 from "./assets/afrahmanhall.jpeg";
import hall4 from "./assets/shahjalalhall.jpeg";
import hall5 from "./assets/shamsunnaharhall.jpeg";
import hall6 from "./assets/pritilatahall.jpg";

// Add more hall images as needed

const halls = [
  { title: "Shaheed Abdur Rab Hall", image: hall },
  { title: "A F Rahman Hall", image: hall3 },
  { title: "Alawal Hall", image: hall2 },

  { title: "Shahjalal Hall", image: hall4 },
  // { title: "Shah Amanat Hall", image: hall },
  // { title: "Masterda Surya Sen Hall", image: hall },
  // { title: "Bangabandhu Sheikh Mujibur Rahman Hall", image: hall },
  { title: "Shamsun Nahar Hall", image: hall5 },
  { title: "Pritilata Hall", image: hall6 },
  // { title: "Deshnetri Begum Khaleda Zia Hall", image: hall },
  // { title: "Bangamata Sheikh Fazilatunnesa Mujib Hall", image: hall },
  // { title: "Jononetri Sheikh Hasina Hall", image: hall },
];

const Hall = () => {
  return (
    <div className="card-container">
      <div className="subcard-container">
        {halls.map((hall, index) => (
          <Card key={index} title={hall.title} image={hall.image} />
        ))}
      </div>
    </div>
  );
};

export default Hall;
