import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HowWeWork from "./components/pages/HowWeWork";
import SafetyRules from "./components/pages/SafetyRules";
import Home from "./components/pages/Home";
import OurMission from "./components/pages/OurMission";
import { Navbar } from "./components/navbar/Navbar.jsx";
import SignUpForm from "./components/signup/Signup";
import GlobalStyle from "./GlobalStyles";
import Login from "./components/signin/Signin";
import UserCard from "./components/usercard/UserCard";


function App() {
 
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Switch>
      <Route exact path="/SignUp" component={SignUpForm} />
      <Route exact path="/login" component={Login} />
      <Route path="/apphome" component={UserCard} />
            <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/OurMission" component={OurMission} />
            <Route path="/HowWeWork" component={HowWeWork} />
            <Route path="/SafetyRules" component={SafetyRules} />
           </div>
           </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
