import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/Blynd.svg";

function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/OurMission"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Our Mission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/HowWeWork"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                How We Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/SafetyRules"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Safety & Rules
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar;
