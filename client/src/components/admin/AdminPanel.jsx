import React, { useEffect, useState } from "react";
import Trainer from "../../images/Trainers.png";
import Trainee from "../../images/Trainee.jpg";
import Videos from "../../images/Videos.jpeg";
import Subscriptions from "images/Subscription.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminPanel() {
	const [stats, setStats] = useState({ trainers: 0, trainees: 0, vidoes: 0 });
	const getStats = async () => {
		try {
			const response = await axios.get("/internal/stat");
			setStats(response.data);
		} catch (e) {
			console.log(e.message);
		}
	};
	useEffect(() => {
		getStats();
	}, []);
	return (
		<div className="hero-body">
			<div className="container">
				<div className="columns is-multiline is-mobile">
					<div
						className="column is-one-quarter"
						style={{ marginTop: -30 }}>
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={Trainer} alt="Trainer"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p
											className="title is-4"
											style={{
												color: "#060325",
											}}>
											Trainers
										</p>
										<p
											className="subtitle is-6"
											style={{
												color: "#060325",
											}}>
											{stats.trainers}
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer">
								<Link
									to="trainers"
									className="card-footer-item">
									View
								</Link>
							</footer>
						</div>
					</div>
					<div
						className="column is-one-quarter"
						style={{ marginTop: 50 }}>
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={Trainee} alt="Trainee"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p
											className="title is-4"
											style={{
												color: "#060325",
											}}>
											Trainees
										</p>
										<p
											className="subtitle is-6"
											style={{
												color: "#060325",
											}}>
											{stats.trainees}
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer">
								<Link
									to="trainees"
									className="card-footer-item">
									View
								</Link>
							</footer>
						</div>
					</div>
					<div
						className="column is-one-quarter"
						style={{ marginTop: -30 }}>
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={Videos} alt="Videos"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p
											className="title is-4"
											style={{
												color: "#060325",
											}}>
											Videos
										</p>
										<p
											className="subtitle is-6"
											style={{
												color: "#060325",
											}}>
											{stats.videos}
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer">
								<Link to="videos" className="card-footer-item">
									View
								</Link>
							</footer>
						</div>
					</div>
					<div
						className="column is-one-quarter"
						style={{ marginTop: 50 }}>
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img
										src={Subscriptions}
										alt="Subscription"></img>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									<div className="media-content">
										<p
											className="title is-4"
											style={{
												color: "#060325",
											}}>
											Subscriptions
										</p>
										<p
											className="subtitle is-6"
											style={{
												color: "#060325",
											}}>
											0
										</p>
									</div>
								</div>
							</div>
							<footer className="card-footer">
								<Link
									to="subscriptions"
									className="card-footer-item">
									View
								</Link>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminPanel;
