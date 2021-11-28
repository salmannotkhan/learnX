import React from "react";
import { Link } from "react-router-dom";
function Courses({ video }) {
	return (
		<Link to={video._id} className="column is-one-quarter">
			<div className="card has-rounded-corner mt-5">
				<div className="card-image">
					{video.isPremium ? (
						<span
							style={{
								position: "absolute",
								zIndex: 1,
							}}
							className="tag is-warning">
							&#x2605; Pro
						</span>
					) : null}
					<figure className="image is-2by1">
						<img src={video.thumbnailUrl} alt={video.title} />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-6 has-text-dark mt-3">
								{video.title}
							</p>
						</div>
						<div className="media-right"></div>
					</div>
					<div className="content">
						<p className="subtitle is-7 has-text-dark">
							By {Object.values(video.uploadedBy.name).join(" ")}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Courses;
