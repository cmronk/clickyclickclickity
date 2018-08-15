import React from "react";
import "./Navbar.css";


const styles = {
    navbarStyle: {
      background: "green",
      justifyContent: "flex-end"
    }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  const Navbar = () => (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
    
export default Navbar;
