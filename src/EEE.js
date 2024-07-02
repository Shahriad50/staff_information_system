import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";
import staffImage1 from "./assets/pic1.jpg"; // Import the image file
import staffImage2 from "./assets/pic2.jpg"; // Import the image file
import staffImage3 from "./assets/pic3.jpg";
import noimage from "./assets/noimage.jpg"; // Import the image file
import "./css/card.css"; // Import CSS file for styling
import "./css/staff.css";

const EEE = () => {
  // Sample staff data
  const staff1 = {
    image: noimage,
    name: {
      english: "Mr. Samsu Uddin Ahmed",
      bengali: "জনাব সামসু উদ্দিন আহমেদ",
    },
    designation: "ডেপুটি রেজিস্ট্রার",
    education: "not available",
    joinDate: "not available",
    phone: "01819008494",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff2 = {
    image: noimage,
    name: {
      english: "Mr. Abdul Mannan",
      bengali: "জনাব আব্দুল মান্নান",
    },
    designation: "সহকারী রেজিস্ট্রার (সেমিনার)",
    education: "not available",
    joinDate: "not available",
    phone: "01837463626",
    email: "mannancu14@gmail.com",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff3 = {
    image: noimage,
    name: {
      english: "Mr. Mohammad Mafizul Hoque",
      bengali: "জনাব মোহাম্মদ মফিজুল হক",
    },
    designation: "সেকশন অফিসার",
    education: "not available",
    joinDate: "not available",
    phone: "01858362626",
    email: "mafiz@cu.ac.bd or hoquemafiz@gmail.com",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
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
            pathname: "/department/eee/staff1",
            state: { staff: staff1 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff1} />
        </Link>
        <Link
          to={{
            pathname: "/department/eee/staff2",
            state: { staff: staff2 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff2} />
        </Link>
        <Link
          to={{
            pathname: "/department/eee/staff3",
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

export default EEE;
