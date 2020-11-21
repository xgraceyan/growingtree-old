import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import dashboard from "./components/dashboard/dashboard";
import Navbar from "./templates/navbar";
import Sidebar from "./templates/sidebar";
import signUp from "./auth/SignUp";
import Login from "./auth/LogIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={dashboard} />
            <Route exact path="/signup" component={signUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
