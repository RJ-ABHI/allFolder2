import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./App";
import SignUp from "./signup";
import Home from "./home";

class MainComp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/signUp" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Redirect to="/signUp" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default MainComp;
