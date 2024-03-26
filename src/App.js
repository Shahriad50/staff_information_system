import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainCard from "./MainCard";
import NoticeBoard from "./NoticeBoard";
import AssignTask from "./AssignTask";
import Worklist from "./Worklist";
import Notification from "./Notification";
import About from "./About";

function App() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Render the appropriate main card based on the selected option
  const renderMainCard = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <MainCard />;
      case "Notice Board":
        return <NoticeBoard />;
      case "Assign Task":
        return <AssignTask />;
      case "Worklist":
        return <Worklist />;
      case "Notification":
        return <Notification />;
      case "About":
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar onSelectOption={handleOptionSelect} />
      {renderMainCard()} {/* Render the selected main card component */}
    </div>
  );
}

export default App;
