import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoticeBoard from "./Notice/NoticeBoard";
import AssignTask from "./AssignTask";
import Worklist from "./Worklist";
import About from "./About";
import Office from "./Office";
import Committee from "./Committee";
import Department from "./Department";
import Registrar from "./Registrar";
import StaffDetails from "./StaffDetails";

import DescriptionPage from "./DescriptionPage";

import Information from "./Information";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Information} />
          <Route path="/noticeboard" exact component={NoticeBoard} />
          <Route path="/assigntask" exact component={AssignTask} />
          <Route path="/worklist" exact component={Worklist} />
          <Route path="/about" exact component={About} />
          <Route path="/committee" exact component={Committee} />
          <Route path="/office" exact component={Office} />
          <Route path="/department" exact component={Department} />
          <Route path="/office/register" exact component={Registrar} />
          <Route
            path="/office/register/:staffId"
            exact
            component={StaffDetails}
          />
          <Route path="/description/:id" component={DescriptionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
