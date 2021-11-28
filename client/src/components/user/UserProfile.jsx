import React from "react";
import EditProfile from "images/UserProfile.svg";
// import { Link } from "react-router-dom";
function UserProfile() {
	return (
		<div className="hero-body">
			<div className="columns is-centered">
				<div className="column is-10">
					<div className="box">
						<form>
							<div className="columns is-vcentered">
								<div className="column is-6">
									<figure className="image is-16by9">
										<img
											src={EditProfile}
											alt="Register user banner"
										/>
									</figure>
								</div>
								<div className="column">
									<h3 className="title is-4 has-text-dark ml-10 has-text-centered">
										Edit Profile
									</h3>
									<div className="columns is-multiline is-mobile">
										<div className="column is-half">
											<div className="field">
												<label className="label">
													First Name
												</label>
												<div className="control">
													<input
														className="input"
														type="text"
														name="firstName"
														placeholder="First Name"
														required
													/>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label className="label">
													Last Name
												</label>
												<div className="control">
													<input
														className="input"
														type="text"
														name="lastName"
														placeholder="Last Name"
														required
													/>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label className="label">
													Email
												</label>
												<div className="control">
													<input
														className="input"
														type="email"
														name="email"
														placeholder="Email"
														required
													/>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label className="label">
													Mobile
												</label>
												<div className="control">
													<input
														className="input"
														type="tel"
														name="phoneNumber"
														pattern="[0-9]{10}"
														title="Invalid mobile number"
														placeholder="Mobile"
														required
													/>
												</div>
											</div>
										</div>

										<div className="column is-half">
											<div className="field">
												<label className="label">
													Old Password
												</label>
												<div className="control">
													<input
														className="input"
														type="password"
														name="password"
														placeholder="Old Password"
														required
													/>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label className="label">
													New Password
												</label>
												<div className="control">
													<input
														className="input"
														type="password"
														placeholder="New Password"
														required
													/>
												</div>
											</div>
										</div>
										<div className="column is-full">
											<div className="field is-horizontal">
												<label className="label mt-2 mr-5">
													Role
												</label>
												<div className="field-body">
													<label className="button is-outlined">
														Trainer
														<input
															type="radio"
															className="is-hidden"
															name="role"
															value="Trainer"
															defaultChecked
														/>
													</label>
													<label className="button is-outlined ml-3">
														Trainee
														<input
															type="radio"
															name="role"
															className="is-hidden"
															value="Trainee"
														/>
													</label>
												</div>
											</div>
										</div>

										<div className="columns">
											<div className="column">
												<div className="field ">
													<p className="control">
														<button
															type="submit"
															className="button is-primary is-rounded"
															style={{
																color: "#112031",
															}}>
															Update Profile
														</button>
													</p>
												</div>
											</div>
										</div>
										<div className="columns ">
											<div className="column">
												<div className="field">
													<p className="control">
														<button
															type="submit"
															className="button is-primary is-rounded is-warning ml-3"
															style={{
																color: "#112031",
															}}>
															Cancel
														</button>
													</p>
												</div>
											</div>
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

export default UserProfile;
