import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../user/CourseCard";
import axios from "axios";

function CoursePage() {
	const [videos, setVideos] = useState([]);
	const [filters, setFilters] = useState({});
	const getVideos = async (filters = {}) => {
		try {
			const response = await axios.post("/video/explore", filters);
			setVideos(response.data);
			console.log(response);
		} catch (e) {
			console.log(e.message);
		}
	};
	useEffect(() => {
		getVideos(filters);
	}, [filters]);
	return (
		<div className="hero-body">
			<div className="container">
				<div className="columns is-multiline is-mobile">
					<div className="column is-one-quarter">
						<input
							className="input is-rounded"
							type="text"
							value={filters.title}
							placeholder="Search for Videos"
							onChange={(e) =>
								setFilters({ title: e.target.value })
							}
							name="searchbar"
						/>
					</div>
					<div className="column is-three-quarters">
						<Link
							to="#"
							className="button is-warning is-rounded mr-2">
							JavaScript
						</Link>
						<Link
							to="#"
							className="button is-warning is-rounded  mr-2">
							React
						</Link>
						<Link
							to="#"
							className="button is-warning is-rounded  mr-2">
							Java
						</Link>
						<Link
							to="#"
							className="button is-warning is-rounded  mr-2">
							Data Science
						</Link>
						<Link
							to="#"
							className="button is-warning is-rounded  mr-2">
							Angular
						</Link>
						<Link
							to="#"
							className="button is-warning is-rounded  mr-2">
							Android
						</Link>
						<Link
							to="#"
							className="button is-warning is-rounded  mr-2">
							Python
						</Link>
					</div>
				</div>
				<div className="columns is-multiline is-mobile">
					{videos.map((video) => (
						<CourseCard key={video._id} video={video} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CoursePage;
