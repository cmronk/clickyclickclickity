import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar">
    <div className="nav-item">
      Score:<span className="score"> {props.score}</span> | Top Score:<span className="topScore"> {props.topScore}</span>
    </div>
    <div className="nav-item">
      {props.scoring}
    </div>
    <div className="nav-item">
      Horton Hears A Click...
    </div>
  </nav>
);

export default Navbar;
