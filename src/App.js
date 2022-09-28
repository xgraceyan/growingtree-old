import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./templates/navbar";
import Sidebar from "./templates/sidebar";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import ClassPage from "./components/classes/ClassPage";
import AssignmentPage from "./components/classes/assignments/AssignmentPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/class/:id/overview" component={ClassPage} />
            <Route
              exact
              path="/class/:classid/assignment/:assignmentid"
              component={AssignmentPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
