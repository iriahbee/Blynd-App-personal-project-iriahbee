import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../src/styles/App.css";
import HowWeWork from "./components/HowWeWork";
import SafetyRules from "./components/SafetyRules";
import Home from "./components/Home";
import OurMission from "./components/OurMission";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/OurMission" component={OurMission} />
            <Route path="/HowWeWork" component={HowWeWork} />
            <Route path="/SafetyRules" component={SafetyRules} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;