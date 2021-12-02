import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
function UserLayout() {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const getUser = useCallback(async () => {
		axios
			.get("/user/current")
			.then((response) => setUser(response.data))
			.catch((e) => {
				if (e.response.status === 401) {
					navigate("/login");
				}
			});
	}, [navigate]);
	useEffect(() => {
		getUser();
	}, [getUser]);
	const handleLogout = async () => {
		const response = await axios.get("/user/logout");
		navigate("/login");
		console.log(response);
	};
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
								<Link
									className="navbar-item"
									to={user ? user._id : ""}>
									My Profile
								</Link>
								<div className="navbar-item">
									<div className="buttons">
										<button
											className="button is-primary is-inverted"
											onClick={handleLogout}>
											Logout
										</button>
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

export default UserLayout;
