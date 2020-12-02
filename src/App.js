import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import ClassPage from "./components/classes/ClassPage";

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
            <Route path="/class/:id" component={ClassPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
