import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Trainees() {
	const [trainees, setTrainees] = useState([]);
	const getTrainees = async () => {
		const response = await axios.get("/internal/trainees");
		setTrainees(response.data);
	};
	useEffect(() => {
		getTrainees();
	}, []);
	return (
		<section className="hero is-fullheight">
			<div className="hero-body">
				<div className="container">
					<h2 className="title is-2" style={{ textAlign: "center" }}>
						Trainees List
					</h2>
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
				</div>
			</div>
		</section>
	);
}

export default Trainees;
