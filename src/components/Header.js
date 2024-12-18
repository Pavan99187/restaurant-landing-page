import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme toggle handler
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Add/remove the theme class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className={`header ${isDarkMode ? "dark-header" : ""}`}>
      <div className="logo">Cheezie</div>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
};

export default Header;
