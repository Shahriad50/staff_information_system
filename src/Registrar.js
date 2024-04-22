import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";
import staffImage1 from "./assets/pic1.jpg"; // Import the image file
import staffImage2 from "./assets/pic2.jpg"; // Import the image file
import staffImage3 from "./assets/pic3.jpg"; // Import the image file
import "./css/card.css"; // Import CSS file for styling

const Registrar = () => {
  // Sample staff data
  const staff1 = {
    image: staffImage1,
    name: {
      english: "John Doe",
      bengali: "জন ডো",
    },
    designation: "Senior Developer",
    education: "Bachelor of Science in Computer Science",
    joinDate: "2022-01-01",
    phone: "+1234567890",
    email: "john.doe@example.com",
    gender: "Male",
    bloodGroup: "A+",
    religion: "Christianity",
    dob: "1990-05-15",
    nationality: "American",
    ethnicity: "Caucasian",
  };
  const staff2 = {
    image: staffImage2,
    name: {
      english: "Alandro G",
      bengali: "আলানদ্রো জি",
    },
    designation: "Developer",
    education: "Bachelor of Engineering in Software Engineering",
    joinDate: "2022-03-15",
    phone: "+1987654321",
    email: "alandro.g@example.com",
    gender: "Male",
    bloodGroup: "B-",
    religion: "Islam",
    dob: "1995-08-20",
    nationality: "Canadian",
    ethnicity: "Hispanic",
  };

  const staff3 = {
    image: staffImage3,
    name: {
      english: "Tom Hardy",
      bengali: "টম হার্ডি",
    },
    designation: "Junior Developer",
    education: "Bachelor of Technology in Information Technology",
    joinDate: "2023-02-10",
    phone: "+1122334455",
    email: "tom.hardy@example.com",
    gender: "Male",
    bloodGroup: "O+",
    religion: "Judaism",
    dob: "1998-11-25",
    nationality: "British",
    ethnicity: "White",
  };
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "black", // Set text color to black // Prevent reduction in card width caused by the link
  };

  return (
    <div className="card-container">
      <div className="staffcard-container">
        <Link
          to={{
            pathname: "/office/register/staff1",
            state: { staff: staff1 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff1} />
        </Link>
        <Link
          to={{
            pathname: "/office/register/staff2",
            state: { staff: staff2 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff2} />
        </Link>
        <Link
          to={{
            pathname: "/office/register/staff3",
            state: { staff: staff3 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff3} />
        </Link>
      </div>
    </div>
  );
};

export default Registrar;
