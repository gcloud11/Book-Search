import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./pages/Hero";
import Saved from "./pages/Saved";
import "./App.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;