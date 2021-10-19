import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/learnXLogo.png";
function Header() {
  return (
    <div
      className="hero-head"
      style={{ fontFamily: "Comfortaa", backgroundColor: "#d8cbe9" }}
    >
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/adminpanel" style={{ fontSize: 40 }}>
              LearnX
            </Link>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" style={{ color: "#060325" }}>
                  Manage
                </a>
                <div className="navbar-dropdown" style={{ color: "#060325" }}>
                  <a className="navbar-item">
                    <Link to="/viewtrainers">View Trainers</Link>
                  </a>

                  <a className="navbar-item">
                    <Link to="viewtrainees"> View Trainees</Link>
                  </a>

                  <a className="navbar-item">
                    <Link to="viewvideos"> View Videos</Link>
                  </a>

                  <a className="navbar-item">
                    <Link to="viewsubscriptions"> View Subscriptions</Link>
                  </a>
                </div>
              </div>
              <a className="navbar-item">
                <Link to="adminpanel" style={{ color: "#060325" }}>
                  Home
                </Link>
              </a>
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Logout</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
