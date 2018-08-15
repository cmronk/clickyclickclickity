import React from "react";
import "./Navbar.css";

// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-item">
      One Click, Two Click...
    </div>
    <div className="nav-item">
      Click an image to begin
    </div>
    <div className="nav-item">
      Score:<span id="score">Test 0</span>
    </div>
  </nav>
);

export default Navbar;
