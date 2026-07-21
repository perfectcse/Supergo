import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Award, Menu, X } from "lucide-react";

import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <Award size={26} />
          </div>

          <span>CertifyPro</span>
        </NavLink>

        {/* Desktop and Mobile Navigation */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Create Certificate
          </NavLink>

          <NavLink
            to="/verify"
            className={({ isActive }) =>
              isActive ? "verify-btn active-verify" : "verify-btn"
            }
            onClick={closeMenu}
          >
            Verify Certificate
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;