import React from "react";

import TrainerCard from "./TrainerCard";
function Trainers() {
	const temp = [
		{
			id: 1,
			fname: "vishwa",
			mobile: 9874632125,
			email: "sonarvishwa@gmail.com",
		},
		{
			id: 2,
			fname: "puja",
			mobile: 789456133,
			email: "pujasonar@gmail.com",
		},
	];
	return (
		<>
			<section
				className="hero is-fullheight is-primary"
				style={{ fontFamily: "Comfortaa" }}>
				<div className="hero-body">
					<div className="container">
						<h2
							className="title is-3"
							style={{ textAlign: "center" }}>
							Trainers
						</h2>
						<div className="columns is-multiline is-mobile">
							{temp.map}
							<TrainerCard></TrainerCard>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Trainers;
