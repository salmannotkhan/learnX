import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Trainees() {
	const [trainees, setTrainees] = useState([]);
	const [loading, setLoading] = useState(true);
	const getTrainees = async () => {
		setLoading(true);
		const response = await axios.get("/internal/trainees");
		setLoading(false);
		setTrainees(response.data);
	};
	useEffect(() => {
		getTrainees();
	}, []);
	return (
		<div className="hero-body">
			<div className="container has-text-centered">
				<h2 className="title is-2">Trainees List</h2>
				{loading ? (
					<button className="title button is-1 is-large is-ghost is-loading">
						Loading
					</button>
				) : (
					<table
						className="table table is-fullwidth"
						style={{ borderRadius: 20 }}>
						<thead>
							<tr
								style={{
									fontWeight: "bold",
									fontSize: 20,
								}}>
								<th>Sr.No</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Mobile No</th>
								<th>Email Id</th>
								<th>Subscription</th>
							</tr>
						</thead>
						<tbody>
							{trainees.map((trainee, idx) => (
								<tr key={idx}>
									<th>{idx + 1}</th>
									<td>{trainee.name.firstName}</td>
									<td>{trainee.name.lastName}</td>
									<td>{trainee.phoneNumber}</td>
									<td>{trainee.email}</td>
									<td>
										{trainee.subscription ? (
											<Link to="#">View</Link>
										) : (
											"Nil"
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default Trainees;
