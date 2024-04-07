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
import Registrar from "./Registrar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/noticeboard" exact component={NoticeBoard} />
          <Route path="/assigntask" exact component={AssignTask} />
          <Route path="/worklist" exact component={Worklist} />
          <Route path="/about" exact component={About} />
          <Route path="/dashboard/committee" exact component={Committee} />
          <Route path="/dashboard/office" exact component={Office} />
          <Route path="/dashboard/department" exact component={Department} />
          <Route
            path="/dashboard/office/register"
            exact
            component={Registrar}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
