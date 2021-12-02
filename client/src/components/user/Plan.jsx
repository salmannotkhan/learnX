import React from "react";
import Monthly from "../../images/Monthly.png";
import Quarterly from "../../images/Quaterly.png";
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
									<img src={Monthly} alt="Monthly Banner" />
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p className="title is-1 has-text-centered has-text-primary mb-3">
											₹99
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
							<form
								className="card-footer has-background-light"
								action="/payment/checkout"
								method="POST">
								<input
									type="hidden"
									name="plan"
									value="monthly"
								/>
								<button
									style={{ border: 0 }}
									className="card-footer-item has-text-link-dark">
									Select
								</button>
							</form>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card" style={{ marginTop: -30 }}>
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={Quarterly} alt="Monthly Banner" />
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p className="title is-1 has-text-centered has-text-primary mb-3">
											₹279
										</p>
									</div>
								</div>
								<div className="content">
									<div className="media-content">
										<p className="title is-4 has-text-centered has-text-dark mb-4">
											Tri-monthly
										</p>
										<p className="title is-6  has-text-centered has-text-dark">
											Get exclusive access of tutorials
											for 90 days
										</p>
									</div>
								</div>
							</div>
							<form
								className="card-footer has-background-light"
								action="/payment/checkout"
								method="POST">
								<input
									type="hidden"
									name="plan"
									value="tri-monthly"
								/>
								<button
									style={{ border: 0 }}
									className="card-footer-item has-text-link-dark">
									Select
								</button>
							</form>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card" style={{ marginTop: 70 }}>
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={Yearly} alt="Monthly Banner" />
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p className="title is-1  has-text-centered has-text-primary mb-3">
											₹1,099
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
							<form
								className="card-footer has-background-light"
								action="/payment/checkout"
								method="POST">
								<input
									type="hidden"
									name="plan"
									value="yearly"
								/>
								<button
									style={{ border: 0 }}
									className="card-footer-item has-text-link-dark">
									Select
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
