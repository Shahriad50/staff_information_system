import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";
import staffImage1 from "./assets/pic1.jpg"; // Import the image file
import staffImage2 from "./assets/pic2.jpg"; // Import the image file
import staffImage3 from "./assets/pic3.jpg"; // Import the image file
import noimage from "./assets/noimage.jpg";
import noimage2 from "./assets/noimage2.jpg";
import "./css/card.css"; // Import CSS file for styling
import "./css/staff.css";

const CSE = () => {
  // Sample staff data
  const staff1 = {
    image: noimage,
    name: {
      english: "Mr. Muhammad Didarul Alam",
      bengali: "জনাব মুহাম্মদ দিদারুল আলম",
    },
    designation: "সিনিয়র সিস্টেম এ্যানালিস্ট ",
    education: "not available",
    joinDate: "not available",
    phone: "01819286866",
    email: "mdidar@gmail.com or mdidar@cu.ac.bd",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };
  const staff2 = {
    image: noimage,
    name: {
      english: "Mr. A.M. Mannan",
      bengali: "জনাব এ.এম.মান্নান",
    },
    designation: "ডেপুটি রেজিস্ট্রার",
    education: "not available",
    joinDate: "2022-03-15",
    phone: "০১৭৩১৩৬৩৩০৩",
    email: "amannancu@gmail.com",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangaldeshi",
  };

  const staff3 = {
    image: noimage,
    name: {
      english: "Mr. Rahatuzzaman Islam",
      bengali: "জনাব রাহাতুজ্জামান ইসলাম",
    },
    designation: "সেকশন অফিসার",
    education: "not avaiable",
    joinDate: "not available",
    phone: "০১৯১৪০৬৩৮২৩",
    email: "rihazari2280@gmail.com",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not avilable",
    nationality: "Bangaldeshi",
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
            pathname: "/department/cse/staff1",
            state: { staff: staff1 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff1} />
        </Link>
        <Link
          to={{
            pathname: "/department/cse/staff2",
            state: { staff: staff2 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff2} />
        </Link>
        <Link
          to={{
            pathname: "/department/cse/staff3",
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

export default CSE;
