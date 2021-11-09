import axios from "axios";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
function Header() {
	const navigate = useNavigate();
	const handleLogout = async () => {
		const response = await axios.get("/user/logout");
		navigate("/login");
		console.log(response);
	};
	return (
		<>
			<div className="hero-head">
				<header className="navbar">
					<div className="container">
						<div className="navbar-item navbar-brand">
							<Link to="/admin" className="is-vcentered">
								<h4 className="title is-4">LearnX</h4>
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
			<Outlet />
		</>
	);
}

export default Header;