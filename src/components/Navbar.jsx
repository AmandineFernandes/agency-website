// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className={`navbar-burger burger ${isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
  
          <div className={`navbar-menu ${isOpen && "is-active"}`}>
            <div className="navbar-start">
              <NavLink className="navbar-item" activeClassName="is-active" to="/">
                Home
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
              >
                L'agence
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/works"
              >
                Projets
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;