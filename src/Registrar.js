import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";
import staffImage1 from "./assets/pic1.jpg"; // Import the image file
import staffImage2 from "./assets/pic2.jpg"; // Import the image file
import staffImage3 from "./assets/pic3.jpg"; // Import the image file
import noimage from "./assets/noimage.jpg";
import noimage2 from "./assets/noimage2.jpg";
import "./css/card.css";
import "./css/staff.css"; // Import CSS file for styling

const Registrar = () => {
  // Sample staff data
  const staff1 = {
    image: noimage,
    name: {
      english: "Mr. K. M. Nur Ahmed",
      bengali: "জনাব কে. এম. নুর আহমেদ",
    },
    designation: "রেজিস্ট্রার (ভারপ্রাপ্ত)",
    education: "not available",
    joinDate: "not available",
    phone: "01822908840",
    email: "registrarcu66@cu.ac.bd",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff2 = {
    image: noimage,
    name: {
      english: "Mr. Shamim Ahmed",
      bengali: "জনাব শামীম আহমেদ",
    },
    designation: "সহকারী রেজিস্ট্রার(রেজিস্ট্রারের সাথে সংযুক্ত শাখা)",
    education: "not available",
    joinDate: "not available",
    phone: "01777282995",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff3 = {
    image: noimage,
    name: {
      english: "Dr. Nasir Uddin",
      bengali: "জনাব মোঃ নাছির উদ্দিন",
    },
    designation: "সহকারী রেজিস্ট্রার(রেজিস্ট্রারের সাথে সংযুক্ত শাখা)",
    education: "not available",
    joinDate: "not available",
    phone: "01837336704",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff3_1 = {
    image: noimage,
    name: {
      english: "Mr. K. M. Nur Ahmed",
      bengali: "জনাব কে. এম. নুর আহমেদ",
    },
    designation: "ডেপুটি রেজিস্ট্রার (পরিষদ শাখা)",
    education: "not available",
    joinDate: "not available",
    phone: "01822908840",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff3_2 = {
    image: noimage,
    name: {
      english: "Mr. Abu Nur Muhammad Abdus shakur",
      bengali: "জনাব আবু নুর মোঃ আবদুস শাকুর",
    },
    designation: "উপ-পরীক্ষা নিয়ন্ত্রক (পরিষদ শাখা)",
    education: "not available",
    joinDate: "not available",
    phone: "01819085074",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff4 = {
    image: noimage,
    name: {
      english: "Mr. Russell Paul",
      bengali: "জনাব রাসেল পাল",
    },
    designation: "ডেপুটি রেজিস্ট্রার(পরিষদ শাখা)",
    education: "not available",
    joinDate: "not available",
    phone: "01716167797",
    email: "raselpaulcu82@gmail.com",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff5 = {
    image: noimage,
    name: {
      english: "Mr. Ali Akbar",
      bengali: "জনাব আলী আকবর",
    },
    designation: "সহকারী রেজিস্ট্রার",
    education: "not available",
    joinDate: "not available",
    phone: "01819339850",
    email: "aakber14@gmail.com",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff6 = {
    image: noimage,
    name: {
      english: "Ms. Seena Parveen",
      bengali: "জনাব সীনা পারভিন",
    },
    designation: "not available",
    education: "not available",
    joinDate: "not available",
    phone: "01722444370",
    email: "not available",
    gender: "Female",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff7 = {
    image: noimage,
    name: {
      english: "Mr. Abdullah Al Asad",
      bengali: "জনাব আব্দুল্লাহ আল আসাদ",
    },
    designation: "not available",
    education: "not available",
    joinDate: "not available",
    phone: "not available",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff8 = {
    image: noimage,
    name: {
      english: "Dr. Mohammad Moinul Islam",
      bengali: "ড. মোহাম্মদ মঈনুল ইসলাম",
    },
    designation: "প্রশাসক",
    education: "not available",
    joinDate: "not available",
    phone: "01819331110, 01712852849",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff9 = {
    image: noimage,
    name: {
      english: "Mr. Abu Hanif Faruk Choudhury",
      bengali: "জনাব আবু হানিফ ফারুক চৌধুরী",
    },
    designation: "ডেপুটি রেজিস্ট্রার",
    education: "not available",
    joinDate: "not available",
    phone: "01819444456, 01712455480",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff10 = {
    image: noimage,
    name: {
      english: "Mr. Abdul Jalil Uddin",
      bengali: "জনাব আব্দুল জলিল উদ্দিন",
    },
    designation: "সহকারী রেজিস্ট্রার",
    education: "not available",
    joinDate: "not available",
    phone: "01819370243",
    email: "not available",
    gender: "Male",
    bloodGroup: "not available",
    religion: "Islam",
    dob: "not available",
    nationality: "Bangladeshi",
  };

  const staff11 = {
    image: noimage,
    name: {
      english: "Mr. Abu Noor",
      bengali: "জনাব আবু নূর",
    },
    designation: "not available",
    education: "not available",
    joinDate: "not available",
    phone: "01819333163",
    email: "not available",
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

        <Link
          to={{
            pathname: "/office/register/staff3_1",
            state: { staff: staff3_1 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff3_1} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff3_2",
            state: { staff: staff3_2 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff3_2} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff4",
            state: { staff: staff4 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff4} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff5",
            state: { staff: staff5 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff5} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff6",
            state: { staff: staff6 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff6} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff7",
            state: { staff: staff7 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff7} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff8",
            state: { staff: staff8 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff8} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff9",
            state: { staff: staff9 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff9} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff10",
            state: { staff: staff10 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff10} />
        </Link>

        <Link
          to={{
            pathname: "/office/register/staff11",
            state: { staff: staff11 },
          }}
          style={linkStyle}
        >
          <Staff staff={staff11} />
        </Link>
      </div>
    </div>
  );
};

export default Registrar;
