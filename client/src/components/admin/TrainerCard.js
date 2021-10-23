import React from "react";
import UserProfile from "../../images/userprofile.png";
import { Link } from "react-router-dom";
function TrainerCard(props) {
	return (
		<Link to="panel" className="column is-one-third">
			<div className="card">
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-96x96">
								<img src={UserProfile} alt="User Profile"></img>
							</figure>
						</div>
						<div className="media-content has-text-dark">
							<h4 className="title has-text-dark is-4">
								{props.name}
							</h4>
							<p className="subtitle has-text-dark is-6">
								<div>{props.mobile}</div>
								<div>{props.email}</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default TrainerCard;
