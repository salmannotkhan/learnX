import React from "react";
import { Link } from "react-router-dom";
import Monthly from "../../images/Monthly.png";
import Quaterly from "../../images/Quaterly.png";
import Yearly from "../../images/Yearly.png";

export default function Plan() {
	return (
		<div className="hero-body">
			<div className="container">
				<div className="columns is-centered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
					<div className="column is-one-quarter">
						<div className="card" style={{ marginTop: 70 }}>
							<div className="card-image">
								<figure className="image is-2by1">
									<img
										src={Monthly}
										alt="Monthly Banner"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p className="title is-1 has-text-centered has-text-primary mb-3">
											₹399*
										</p>
									</div>
								</div>
								<div className="content">
									<div className="media-content">
										<p className="title is-4 has-text-centered has-text-dark mb-4">
											Monthly
										</p>
										<p className="title is-6  has-text-centered has-text-dark">
											Get exclusive access of tutorials
											for 30 days
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer has-background-light">
								<Link
									to="#"
									className="card-footer-item has-text-link-dark">
									Choose Plan
								</Link>
							</footer>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card" style={{ marginTop: -30 }}>
							<div className="card-image">
								<figure className="image is-2by1">
									<img
										src={Quaterly}
										alt="Monthly Banner"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p className="title is-1 has-text-centered has-text-primary mb-3">
											₹799*
										</p>
									</div>
								</div>
								<div className="content">
									<div className="media-content">
										<p className="title is-4 has-text-centered has-text-dark mb-4">
											Quaterly
										</p>
										<p className="title is-6  has-text-centered has-text-dark">
											Get exclusive access of tutorials
											for 90 days
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer has-background-light">
								<Link
									to="#"
									className="card-footer-item has-text-link-dark">
									Choose Plan
								</Link>
							</footer>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card" style={{ marginTop: 70 }}>
							<div className="card-image">
								<figure className="image is-2by1">
									<img
										src={Yearly}
										alt="Monthly Banner"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p className="title is-1  has-text-centered has-text-primary mb-3">
											₹1,199*
										</p>
									</div>
								</div>
								<div className="content">
									<div className="media-content">
										<p className="title is-4 has-text-centered has-text-dark mb-4">
											Yearly
										</p>
										<p className="title is-6  has-text-centered has-text-dark">
											Get exclusive access of tutorials
											for 365 days
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer has-background-light">
								<Link
									to="#"
									className="card-footer-item has-text-link-dark">
									Choose Plan
								</Link>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
		// <div className="hero-body">
		// 	<form action="/payment/checkout" method="POST">
		// 		<input type="hidden" name="plan" value="monthly" />
		// 		<button className="button">Monthly</button>
		// 	</form>
		// 	<form action="/payment/checkout" method="POST">
		// 		<input type="hidden" name="plan" value="tri-monthly" />
		// 		<button className="button">Tri-monthly</button>
		// 	</form>
		// 	<form action="/payment/checkout" method="POST">
		// 		<input type="hidden" name="plan" value="yearly" />
		// 		<button className="button">Yearly</button>
		// 	</form>
		// </div>
	);
}
