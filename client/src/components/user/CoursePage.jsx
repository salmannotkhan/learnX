import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../user/CourseCard";
import axios from "axios";

function CoursePage() {
	const [videos, setVideos] = useState([]);
	const getVideos = async () => {
		const response = await axios.get("/video");
		setVideos(response.data);
		console.log(response);
	};
	useEffect(() => {
		getVideos();
	}, []);
	return (
		<div className="hero-body">
			<div className="container">
				<div className="columns is-multiline is-mobile">
					<div className="column is-one-quarter">
						<input
							class="input is-rounded"
							type="text"
							placeholder="Search for anything..."
							name="searchbar"
						/>
					</div>
					<div className="column is-three-quarters">
						<Link to="#" class="button is-warning is-rounded mr-2">
							JavaScript
						</Link>
						<Link to="#" class="button is-warning is-rounded  mr-2">
							React
						</Link>
						<Link to="#" class="button is-warning is-rounded  mr-2">
							Java
						</Link>
						<Link to="#" class="button is-warning is-rounded  mr-2">
							Data Science
						</Link>
						<Link to="#" class="button is-warning is-rounded  mr-2">
							Angular
						</Link>
						<Link to="#" class="button is-warning is-rounded  mr-2">
							Android
						</Link>
						<Link to="#" class="button is-warning is-rounded  mr-2">
							Python
						</Link>
					</div>
				</div>
				<div className="columns is-multiline is-mobile">
					{videos.map((video) => (
						<CourseCard video={video} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CoursePage;
