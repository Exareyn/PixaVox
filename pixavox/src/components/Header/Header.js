import "./Header.css";

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()

  return (
    <div className="header-container">
      <div className="title-container">
        <Link className="title-text" to="/">
          PixaVOX
        </Link>
      </div>
      <div className="nav-container">
        <nav className="nav-options">
          <div style={{ color: location.pathname === "/" ? '#2B55B4' : 'inherit' }}>
            <Link to="/" className="nav-opt">
              Accueil
            </Link>
          </div>
          <div style={{ color: location.pathname === "/create" ? '#2B55B4' : 'inherit' }}>
          <Link to="/create" className="nav-opt">
            Créer
          </Link>
          </div>
          <div style={{ color: location.pathname === "/marketplace" ? '#2B55B4' : 'inherit' }}>
            <Link to="/marketplace" className="nav-opt">
              Market place
            </Link>
          </div>
        </nav>
        <span className="icon" />
      </div>
    </div>
  );
}

export default Header;