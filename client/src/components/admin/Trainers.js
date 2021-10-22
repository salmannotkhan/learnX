import React, { useEffect, useState } from "react";
import axios from "axios";

import TrainerCard from "./TrainerCard";
function Trainers() {
	const [trainers, setTrainers] = useState([]);

	const getTrainers = async () => {
		const response = await axios.get("/internal/trainers");
		setTrainers(response.data);
	};
	useEffect(() => {
		getTrainers();
	}, []);
	return (
		<section className="hero is-fullheight is-primary">
			<div className="hero-body">
				<div className="container">
					<h2 className="title is-3 has-text-centered">Trainers</h2>
					<div className="columns is-multiline is-mobile">
						{trainers.map((trainer) => (
							<TrainerCard
								name={trainer.fullName}
								mobile={trainer.phoneNumber}
								email={trainer.email}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Trainers;
