import React, { useEffect, useState } from "react";
import axios from "axios";

import TrainerCard from "./TrainerCard";
function Trainers() {
	const [trainers, setTrainers] = useState([]);
	const [loading, setLoading] = useState(true);
	const getTrainers = async () => {
		setLoading(true);
		const response = await axios.get("/internal/trainers");
		setTrainers(response.data);
		setLoading(false);
		console.log(response.data);
	};
	useEffect(() => {
		getTrainers();
	}, []);
	return (
		<div className="hero-body">
			<div className="container">
				<h2 className="title is-3 has-text-centered">Trainers</h2>
				<div className="columns is-centered is-multiline is-mobile">
					{loading ? (
						<button className="title button is-1 is-large is-ghost is-loading">
							Loading
						</button>
					) : (
						trainers.map((trainer) => (
							<TrainerCard
								key={trainer._id}
								name={
									trainer.name.firstName +
									" " +
									trainer.name.lastName
								}
								mobile={trainer.phoneNumber}
								email={trainer.email}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default Trainers;
