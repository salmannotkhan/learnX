import React, { useState, useEffect } from "react";

export default function AdminSearch({ data, setFiltered }) {
	const [criteria, setCriteria] = useState("email");
	const [query, setQuery] = useState("");

	useEffect(() => {
		console.log(criteria);
		const filtered = data.filter(
			(trainee) => trainee[criteria].toString().search(query) !== -1
		);
		setFiltered(filtered);
	}, [data, query, criteria, setFiltered]);
	return (
		<div className="columns">
			<div className="column field is-half is-offset-3 is-horizontal">
				<div className="field-label pt-2">Search:</div>
				<input
					type="text"
					className="input mr-2"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<span className="select">
					<select onChange={(e) => setCriteria(e.target.value)}>
						<option value="email">E-mail</option>
						<option value="phoneNumber">Phone number</option>
					</select>
				</span>
			</div>
		</div>
	);
}
