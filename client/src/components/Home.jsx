import React from "react";
import "react-dom";
import { Link } from "react-router-dom";
import userLogin from "images/UserLogin.jpeg";

export default function Home(props) {
	return (
		<section className="hero is-fullheight is-primary">
			<div className="hero-head">
				<nav className="container navbar">
					<div className="navbar-brand is-5">
						<Link className="navbar-item" to="/">
							<h3 className="title is-3">LearnX</h3>
						</Link>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link
									to="login"
									className="navbar-item has-text-dark button is-light">
									Log in
								</Link>
								<Link
									to="register"
									className="navbar-item has-text-dark button is-primary">
									Sign up
								</Link>
								<Link
									to="aboutus"
									className="navbar-item has-text-dark button is-primary ">
									Our Team
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<div className="hero-body">
				<div className="container">
					<div className="columns is-vcentered">
						<div className="column is-three-fifth">
							<p className="title">Better way to learn</p>
							<p className="subtitle">
								We have thousands of video courses for over 11
								Programming languages. Join this journey to
								enlightment
							</p>
							<Link to="register" className="button is-white">
								Join now
							</Link>
						</div>
						<div className="column is-two-fifth is-offset-2">
							<img src={userLogin} alt="home banner" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
