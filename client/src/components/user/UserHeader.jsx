import React from "react";
import { Link, Outlet } from "react-router-dom";
function UserHeader() {
	return (
		<>
			<div className="hero-head">
				<nav className="navbar">
					<div className="container">
						<div className="navbar-item navbar-brand">
							<Link to="/user/course" className="is-vcentered">
								<h4 className="title is-4">LearnX</h4>
							</Link>
						</div>

						<div id="navbarMenuHeroC" className="navbar-menu">
							<div className="navbar-end">
								<div className="navbar-item dropdown is-hoverable">
									<span className="navbar-link has-text-link dropdown-trigger">
										Explore
									</span>
									<div className="navbar-dropdown has-text-dark">
										<Link className="navbar-item" to="#">
											Web Development
										</Link>
										<Link className="navbar-item" to="#">
											Data Science
										</Link>
										<Link className="navbar-item" to="#">
											Machine Learning
										</Link>
										<Link className="navbar-item" to="#">
											Programming
										</Link>
										<Link className="navbar-item" to="#">
											Mobile Application
										</Link>
										<Link className="navbar-item" to="#">
											Cyber Security
										</Link>
										<Link className="navbar-item" to="#">
											Database
										</Link>
										<Link className="navbar-item" to="#">
											Software Development
										</Link>
									</div>
								</div>
								<div className="navbar-item dropdown is-hoverable">
									<span className="navbar-link has-text-black dropdown-trigger">
										My Account
									</span>
									<div className="navbar-dropdown has-text-dark">
										<Link
											className="navbar-item"
											to="profile">
											My Profile
										</Link>
										<Link className="navbar-item" to="#">
											Logout
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<Outlet />
		</>
	);
}

export default UserHeader;
