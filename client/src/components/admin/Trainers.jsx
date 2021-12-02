import React, { useEffect, useState } from "react";
import axios from "axios";
import TrainerCard from "./TrainerCard";
import AdminSearch from "./AdminSearch";

function Trainers() {
	const [trainers, setTrainers] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [loading, setLoading] = useState(true);

	const getTrainers = async () => {
		setLoading(true);
		const response = await axios.get("/internal/trainers");
		setTrainers(response.data);
		setFiltered(response.data);
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
				<AdminSearch
					data={trainers}
					setFiltered={(data) => setFiltered(data)}
				/>
				<div className="columns is-centered is-multiline is-mobile">
					{loading ? (
						<button className="title button is-1 is-large is-ghost is-loading">
							Loading
						</button>
					) : filtered.length !== 0 ? (
						filtered.map((trainer) => (
							<TrainerCard
								key={trainer._id}
								id={trainer._id}
								name={
									trainer.name.firstName +
									" " +
									trainer.name.lastName
								}
								mobile={trainer.phoneNumber}
								email={trainer.email}
							/>
						))
					) : (
						<h4 className="title is-4 mt-3">No Record found</h4>
					)}
				</div>
			</div>
		</div>
	);
}

export default Trainers;
