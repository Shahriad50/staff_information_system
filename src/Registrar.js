import React from "react";
import "./css/card.css"; // Import CSS file for styling
import Staff from "./Staff";
import staffImage1 from "./assets/pic1.jpg"; // Import the image file
import staffImage2 from "./assets/pic2.jpg"; // Import the image file
import staffImage3 from "./assets/pic3.jpg"; // Import the image file

const Registrar = () => {
  // Sample staff data
  const staff1 = {
    image: staffImage1, // Use the imported image directly
    name: "John Doe",
    designation: "Senior Developer",
  };
  const staff2 = {
    image: staffImage2, // Use the imported image directly
    name: "Alandro G ",
    designation: "Developer",
  };

  const staff3 = {
    image: staffImage3, // Use the imported image directly
    name: "Tom Hardy",
    designation: "Junior Developer",
  };

  return (
    <div className="card-container">
      {/* Pass staff data as props to the Staff component */}
      <Staff
        image={staff1.image}
        name={staff1.name}
        designation={staff1.designation}
      />
      <Staff
        image={staff2.image}
        name={staff2.name}
        designation={staff2.designation}
      />

      <Staff
        image={staff3.image}
        name={staff3.name}
        designation={staff3.designation}
      />
    </div>
  );
};

export default Registrar;
