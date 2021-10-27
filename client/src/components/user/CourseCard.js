import React from "react";
import { Link } from "react-router-dom";
function Courses(props) {
	return (
		<Link to="panel" className="column is-one-third">
			<div className="card mt-5">
				<div className="card-image">
					<figure className="image is-2by1">
						<img src={ReactLogo} alt="Course Logo" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-6 has-text-dark">
								ReactJs in 30 Days
							</p>
						</div>

						<div className="media-right">
							<p className="title is-6 has-text-dark">
								4&#x2605;
							</p>
						</div>
					</div>
					<div className="content">
						<p className="subtitle is-7 has-text-dark mt-1">
							Our Exclusive course by Prof. John Smith
						</p>
						<p className="subtitle is-6 has-text-dark">₹1455</p>
					</div>
				</div>
				<footer className="card-footer">
					<Link to="#" className="card-footer-item">
						Add to Cart
					</Link>
				</footer>
			</div>
		</Link>
	);
}

export default Courses;
