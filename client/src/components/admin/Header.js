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
		<div className="hero-head">
			<header className="navbar">
				<div className="container">
					<div className="navbar-item navbar-brand">
						<Link to="/admin/panel" className="is-vcentered">
							<h3 className="title is-3">LearnX</h3>
						</Link>
					</div>
					<div id="navbarMenuHeroC" className="navbar-menu">
						<div className="navbar-end">
							<div className="navbar-item dropdown is-hoverable">
								<span className="navbar-link has-text-white dropdown-trigger">
									Manage
								</span>
								<div className="navbar-dropdown has-text-dark">
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
										className="button is-primary is-inverted">
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
