import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "images/ReactLogo.png";
function Courses({ video }) {
	return (
		<Link to={video._id} className="column is-one-quarter">
			<div className="card has-rounded-corner mt-5">
				<div className="card-image">
					<figure className="image is-2by1">
						<img src={ReactLogo} alt="Course Logo" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							{video.isPremium ? (
								<span className="tag is-warning mb-2">
									&#x2605; Pro
								</span>
							) : (
								<span className="tag has-background-white mb-2">
									{" "}
								</span>
							)}
							<p className="title is-6 has-text-dark mt-3">
								{video.title}
							</p>
						</div>
						<div className="media-right"></div>
					</div>
					<div className="content">
						<p className="subtitle is-7 has-text-dark">
							By {video.uploadedBy.name.firstName}{" "}
							{video.uploadedBy.name.lastName}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Courses;
