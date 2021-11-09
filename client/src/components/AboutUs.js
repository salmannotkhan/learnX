import React from "react";
import { Link } from "react-router-dom";
import Salman from "../images/Salman.jpeg";
import Vishwa from "../images/Vishwa.jpeg";
import Jayrajsinh from "../images/Jayraj.jpeg";

function AboutUs() {
	return (
		<div className="hero is-fullheight">
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
									className="navbar-item button is-light has-text-dark">
									Log in
								</Link>
								<Link
									to="register"
									className="navbar-item button is-primary has-text-dark">
									Sign up
								</Link>
								<Link
									to="home"
									className="navbar-item button is-primary has-text-dark">
									Home
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>

			<div className="hero-body">
				<div className="container">
					<div className="columns is-multiline is-mobile is-centered">
						<div className="column is-one-quarter">
							<div className="card">
								<div className="card-image">
									<figure className="image is-square">
										<img
											src={Salman}
											alt="Salman Shaikh"></img>
									</figure>
								</div>
								<div className="card-content">
									<div className="content">
										<div className="media-content">
											<p className="title is-4 has-text-dark">
												Salman Shaikh
											</p>
											<p className="subtitle is-6 has-text-dark">
												Backend
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="column is-one-quarter"
							style={{ marginTop: 50 }}>
							<div className="card">
								<div className="card-image">
									<figure className="imageis-square">
										<img
											src={Vishwa}
											alt="Vishwa Sonar"></img>
									</figure>
								</div>
								<div className="card-content">
									<div className="content">
										<div className="media-content">
											<p className="title is-4 has-text-dark">
												Vishwa Sonar
											</p>
											<p className="subtitle is-6 has-text-dark">
												FrontEnd
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="column is-one-quarter">
							<div className="card">
								<div className="card-image">
									<figure className="image is-square">
										<img
											src={Jayrajsinh}
											alt="Jayrrajsinh"></img>
									</figure>
								</div>
								<div className="card-content">
									<div className="content">
										<div className="media-content">
											<p className="title is-4 has-text-dark">
												Jayrajsinh Zala
											</p>
											<p className="subtitle is-6 has-text-dark">
												Authentication
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
