import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import "../src/styles/App.css";
import HowWeWork from "./components/pages/HowWeWork";
import SafetyRules from "./components/pages/SafetyRules";
import Home from "./components/pages/Home";
import OurMission from "./components/pages/OurMission";
import {Navbar} from "./components/navbar/Navbar.js";
import SignUp from "./components/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/OurMission" component={OurMission} />
            <Route path="/HowWeWork" component={HowWeWork} />
            <Route path="/SafetyRules" component={SafetyRules} />
            <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;