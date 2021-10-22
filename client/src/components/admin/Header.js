import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
function Header() {
	const [logout, setLogout] = useState(false);
	const handleLogout = async () => {
		const response = await axios.get("/user/logout");
		setLogout(true);
		console.log(response);
	};
	if (logout) return <Redirect to="/login" />;
	return (
		<div className="hero-head" style={{ backgroundColor: "#d8cbe9" }}>
			<header className="navbar">
				<div className="container">
					<div className="navbar-brand mt-2">
						<Link
							to="/admin/panel"
							style={{ fontSize: 30, color: "#060325" }}>
							LearnX
						</Link>
					</div>
					<div id="navbarMenuHeroC" className="navbar-menu">
						<div className="navbar-end">
							<div className="navbar-item has-dropdown is-hoverable">
								<span
									className="navbar-link"
									style={{ color: "#060325" }}>
									Manage
								</span>
								<div
									className="navbar-dropdown"
									style={{ color: "#060325" }}>
									<Link
										className="navbar-item"
										to="/admin/trainers">
										Trainers
									</Link>
									<Link
										className="navbar-item"
										to="/admin/trainees">
										Trainees
									</Link>
									<Link
										className="navbar-item"
										to="/admin/videos">
										Videos
									</Link>
									<Link
										className="navbar-item"
										to="/admin/subscriptions">
										Subscriptions
									</Link>
								</div>
							</div>
							<div className="navbar-item">
								<div className="buttons">
									<button
										onClick={handleLogout}
										className="button is-primary">
										Logout
									</button>
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
