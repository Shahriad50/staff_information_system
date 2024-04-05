import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./DashBoard";
import NoticeBoard from "./NoticeBoard";
import AssignTask from "./AssignTask";
import Worklist from "./Worklist";
import About from "./About";
import Welcome from "./Welcome";
import Office from "./Office";
import Committee from "./Committee";
import Department from "./Department";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/noticeboard" component={NoticeBoard} />
          <Route path="/assigntask" component={AssignTask} />
          <Route path="/worklist" component={Worklist} />
          <Route path="/about" component={About} />
          <Route path="/dashboard/committee" component={Committee} />
          <Route path="/dashboard/office" component={Office} />
          <Route path="/dashboard/department" component={Department} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
