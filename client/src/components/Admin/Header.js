import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div
            className="hero-head"
            style={{ fontFamily: "Comfortaa", backgroundColor: "#d8cbe9" }}
        >
            <header className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link
                            to="/adminpanel"
                            style={{ fontSize: 40, color: "#060325" }}
                        >
                            LearnX
                        </Link>
                    </div>
                    <div id="navbarMenuHeroC" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link
                                    className="navbar-link"
                                    style={{ color: "#060325" }}
                                >
                                    Manage
                                </Link>
                                <div
                                    className="navbar-dropdown"
                                    style={{ color: "#060325" }}
                                >
                                    <Link className="navbar-item">
                                        <Link to="/viewtrainers">
                                            View Trainers
                                        </Link>
                                    </Link>
                                    <Link className="navbar-item">
                                        <Link to="viewtrainees">
                                            View Trainees
                                        </Link>
                                    </Link>
                                    <Link className="navbar-item">
                                        <Link to="viewvideos">View Videos</Link>
                                    </Link>
                                    <Link className="navbar-item">
                                        <Link to="viewsubscriptions">
                                            View Subscriptions
                                        </Link>
                                    </Link>
                                </div>
                            </div>
                            <Link className="navbar-item">
                                <Link
                                    to="adminpanel"
                                    style={{ color: "#060325" }}
                                >
                                    Home
                                </Link>
                            </Link>
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link className="button is-primary">
                                        <strong>Logout</strong>
                                    </Link>
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
