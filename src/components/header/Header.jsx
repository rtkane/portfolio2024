import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Ryan Kane</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
      </nav>
    </header>
  );
}

export default Header;
