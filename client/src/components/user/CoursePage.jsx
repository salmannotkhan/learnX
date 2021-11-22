import React from "react";
import { Link } from "react-router-dom";
// import CourseCard from "../user/CourseCard";
import ReactLogo from "images/ReactLogo.png";
function CoursePage() {
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
					<div className="column is-one-quarter">
						<div className="card has-rounded-corner mt-5">
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={ReactLogo} alt="Course Logo" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-content">
										<span class="tag is-warning mb-2">
											&#x2605; Pro
										</span>
										<p className="title is-6 has-text-dark mt-3">
											ReactJs in 30 Days
										</p>
									</div>
									<div className="media-right"></div>
								</div>
								<div className="content">
									<p className="subtitle is-7 has-text-dark">
										Our Exclusive course by Prof. John Smith
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CoursePage;
