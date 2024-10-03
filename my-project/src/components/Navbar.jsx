import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";



export const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  // Toggle the dropdown and arrow rotation
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close the dropdown if it's already open
    } else {
      setActiveDropdown(index); // Open the dropdown if it's not open
    }
  };

  // Handle login click (you can implement the actual logic here)
  const handleLoginClick = () => {
    // Add your login functionality here
    console.log("Login button clicked");
    // You can navigate to the login page or trigger a modal, etc.
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Helper<span className="logo-color">4</span>U</a>
        <p className="slogan">Click Karo, Hire Karo!</p>
      </div>

      {/* Hamburger icon */}
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>

        {/* Hiring dropdown */}
        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            onClick={() => toggleDropdown(1)}
          >
            Hiring
            <span className={`arrow ${activeDropdown === 1 ? 'rotate' : ''}`}>
              <FaChevronDown />
            </span>
          </a>
          <ul className={`dropdown-menu ${activeDropdown === 1 ? 'active' : ''}`}>
            <li><a href="#">Premium Hiring Service</a></li>
            <hr />
            <li><a href="#">Basic Hiring Service</a></li>
            <hr />
            <li><a href="#">Temporary Hiring Service</a></li>
            <hr />
            <li><a href="#">Hire for Elderly</a></li>
            <hr />
          </ul>
        </li>

        {/* Verification dropdown */}
        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            onClick={() => toggleDropdown(2)}
          >
            Verification
            <span className={`arrow ${activeDropdown === 2 ? 'rotate' : ''}`}>
              <FaChevronDown />
            </span>
          </a>
          <ul className={`dropdown-menu ${activeDropdown === 2 ? 'active' : ''}`}>
            <li><a href="#">Criminal Service</a></li>
            <hr />
            <li><a href="#">Employment Verification</a></li>
            <hr />
          </ul>
        </li>

        {/* Login button */}
        <li>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
        </li>
      </ul>
    </nav>
  );
};
