import React from "react";
import RegisterUser from "../images/RegisterUser.png";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="hero is-fullheight">
			<div className="columns">
				<div
					className="column is-four-fifths"
					style={{ margin: "auto", marginTop: 35 }}>
					<div className="box">
						<form
							style={{
								backgroundColor: "#FFFFFF",
							}}>
							<div className="columns is-vcentered">
								<div className="column is-8">
									<h3
										className="title is-4"
										style={{
											color: "#060325",
											textAlign: "center",
										}}>
										Hello Folks...! Register Here : )
									</h3>
									<figure className="image is-16by9">
										<img
											src={RegisterUser}
											alt="Error"></img>
									</figure>
								</div>
								<div className="column">
									<div className="columns is-multiline is-mobile">
										<div className="column is-half">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													First Name
												</label>
												<div className="control">
													<input
														className="input"
														type="text"
														placeholder="First Name"
														required="true"
														style={{
															backgroundColor:
																"transparent",
														}}></input>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Last Name
												</label>
												<div className="control">
													<input
														className="input"
														type="text"
														placeholder="Last Name"
														required="true"
														style={{
															backgroundColor:
																"#transparent",
														}}></input>
												</div>
											</div>
										</div>
										<div className="column is-full">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Email
												</label>
												<div className="control">
													<input
														className="input"
														type="text"
														placeholder="Email"
														style={{
															backgroundColor:
																"#transparent",
														}}></input>
												</div>
											</div>
										</div>
										<div className="column is-full">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Mobile
												</label>
												<div className="control">
													<input
														className="input"
														type="number"
														placeholder="Mobile"
														required
														style={{
															backgroundColor:
																"#transparent",
														}}></input>
												</div>
											</div>
										</div>

										<div className="column is-half">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Password
												</label>
												<div className="control">
													<input
														className="input"
														type="password"
														placeholder="Password"
														required="true"
														style={{
															backgroundColor:
																"#transparent",
														}}></input>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Confirm
												</label>
												<div className="control">
													<input
														className="input"
														type="password"
														placeholder="Confirm Password"
														required="true"
														style={{
															backgroundColor:
																"#transparent",
														}}></input>
												</div>
											</div>
										</div>
										<div className="column is-full ">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Role
												</label>
												<div className="control">
													<label
														className="radio"
														style={{
															color: "#112031",
														}}>
														Trainer
														<input
															type="radio"
															name="usertype"
															value="Trainer"
														/>
													</label>
													<label
														className="radio"
														style={{
															color: "#112031",
														}}>
														Trainee
														<input
															type="radio"
															name="usertype"
															value="Trainee"
														/>
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className="columns ">
										<div className="column is-12">
											<div
												className="field is-grouped"
												style={{
													fontFamily: "Comfortaa",
												}}>
												<p className="control">
													<Link
														className="button is-primary"
														style={{
															color: "#112031",
															borderRadius: 25,
														}}>
														SignUp
													</Link>
												</p>
												<p className="control mt-2">
													<p>
														<strong>
															Already a User?
														</strong>
														<Link
															to="login"
															style={{
																margin: 5,
															}}>
															Login
														</Link>
													</p>
												</p>
											</div>
										</div>
									</div>
									<div className="columns is-centered is-vcentered">
										<div className="column is-9">
											<div className="field is-grouped"></div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Register;
