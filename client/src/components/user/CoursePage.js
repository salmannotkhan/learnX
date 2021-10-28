import React from "react";
import { Link } from "react-router-dom";
// import CourseCard from "../user/CourseCard";
import ReactLogo from "../../images/ReactLogo.png";
function CoursePage() {
	return (
		<div className="hero-body">
			<div className="container">
				<div className="columns is-multiline is-mobile">
					<div className="column is-one-quarter">
						<input
							class="input is-small is-rounded"
							type="text"
							placeholder="Search for anything..."
							name="searchbar"
						/>
					</div>
					<div className="column is-three-quarters">
						<Link
							to="#"
							class="button is-small is-warning is-rounded mr-2">
							JavaScript
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							React
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							Java
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							Data Science
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							Angular
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							Android
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							Python
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							HTML5
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							SCSS
						</Link>
						<Link
							to="#"
							class="button is-small is-warning is-rounded  mr-2">
							C++
						</Link>
					</div>
				</div>
				<div className="columns is-multiline is-mobile">
					<div className="column is-one-quarter">
						<div className="card mt-5">
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={ReactLogo} alt="Course Logo" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-content">
										<p className="title is-6 has-text-dark">
											ReactJs in 30 Days
										</p>
									</div>

									<div className="media-right">
										<p className="title is-6 has-text-dark">
											4&#x2605;
										</p>
									</div>
								</div>
								<div className="content">
									<p className="subtitle is-7 has-text-dark mt-1">
										Our Exclusive course by Prof. John Smith
									</p>
									<p className="subtitle is-6 has-text-dark">
										₹1455
									</p>
								</div>
							</div>
							<footer className="card-footer">
								<Link to="#" className="card-footer-item">
									Add to Cart
								</Link>
							</footer>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card mt-5">
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={ReactLogo} alt="Course Logo" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-content">
										<p className="title is-6 has-text-dark">
											ReactJs in 30 Days
										</p>
									</div>

									<div className="media-right">
										<p className="title is-6 has-text-dark">
											4&#x2605;
										</p>
									</div>
								</div>
								<div className="content">
									<p className="subtitle is-7 has-text-dark mt-1">
										Our Exclusive course by Prof. John Smith
									</p>
									<p className="subtitle is-6 has-text-dark">
										₹1455
									</p>
								</div>
							</div>
							<footer className="card-footer">
								<Link to="#" className="card-footer-item">
									Add to Cart
								</Link>
							</footer>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card mt-5">
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={ReactLogo} alt="Course Logo" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-content">
										<p className="title is-6 has-text-dark">
											ReactJs in 30 Days
										</p>
									</div>

									<div className="media-right">
										<p className="title is-6 has-text-dark">
											4&#x2605;
										</p>
									</div>
								</div>
								<div className="content">
									<p className="subtitle is-7 has-text-dark mt-1">
										Our Exclusive course by Prof. John Smith
									</p>
									<p className="subtitle is-6 has-text-dark">
										₹1455
									</p>
								</div>
							</div>
							<footer className="card-footer">
								<Link to="#" className="card-footer-item">
									Add to Cart
								</Link>
							</footer>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="card mt-5">
							<div className="card-image">
								<figure className="image is-2by1">
									<img src={ReactLogo} alt="Course Logo" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-content">
										<p className="title is-6 has-text-dark">
											ReactJs in 30 Days
										</p>
									</div>

									<div className="media-right">
										<p className="title is-6 has-text-dark">
											4&#x2605;
										</p>
									</div>
								</div>
								<div className="content">
									<p className="subtitle is-7 has-text-dark mt-1">
										Our Exclusive course by Prof. John Smith
									</p>
									<p className="subtitle is-6 has-text-dark">
										₹1455
									</p>
								</div>
							</div>
							<footer className="card-footer">
								<Link to="#" className="card-footer-item">
									Add to Cart
								</Link>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CoursePage;
