import React from "react";
import UserProfile from "../../images/userprofile.png";
import { Link } from "react-router-dom";
function TrainerCard(props) {
	return (
		<div className="column is-one-third mt-0 " style={{ marginTop: -30 }}>
			<Link to="panel">
				<div className="card">
					<div class="card-content">
						<div class="media">
							<div class="media">
								<figure class="image is-96x96">
									<img
										src={UserProfile}
										alt="User Profile"></img>
								</figure>
							</div>
							<div class="media-right">
								<p
									className="title is-5 mt-2"
									style={{
										color: "#3dcfd3",
									}}>
									{props.name}
								</p>
								<p
									className="subtitle is-6 mt-0"
									style={{
										color: "#060325",
									}}>
									{props.mobile}
								</p>
								<p
									className="subtitle is-6 mt-0"
									style={{
										color: "#060325",
									}}>
									{props.email}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default TrainerCard;
