import React from "react";
import { Link } from "react-router-dom";
function UserHeader() {
	return (
		<div className="hero-head">
			<nav className="navbar">
				<div className="container">
					<div className="navbar-item navbar-brand">
						<Link to="/user/coursepage" className="is-vcentered">
							<h4 className="title is-4 has-text-dark">LearnX</h4>
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
								</div>
							</div>

							<div className="navbar-item">
								<div className="buttons">
									<button className="button is-primary is-warning is-inverted is-light">
										Logout
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default UserHeader;
