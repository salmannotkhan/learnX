import React, { useEffect, useState } from "react";
import EditProfile from "images/UserProfile.svg";
import CourseCard from "../user/CourseCard";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserProfile() {
	const { userId } = useParams();
	const [user, setUser] = useState();
	const [editMode, setEditMode] = useState(false);
	const [editPassword, setEditPassword] = useState(false);

	const [videos, setVideos] = useState([]);
	const getVideos = async (filters = {}) => {
		try {
			const response = await axios.post("/video/explore", filters);
			setVideos(response.data);
		} catch (e) {
			console.log(e.message);
		}
	};
	useEffect(() => {
		axios.get(`/user/${userId}`).then((response) => setUser(response.data));
		getVideos({ uploadedBy: userId });
	}, [userId]);
	return (
		<div className="hero-body">
			<div className="container">
				<div className="columns">
					<div className="column is-full">
						<div className="box">
							{user ? (
								<form>
									<div className="columns is-vcentered">
										<div className="column is-half">
											<figure className="image is-16by9">
												<img
													src={EditProfile}
													alt="Register user banner"
												/>
											</figure>
										</div>
										<div className="column is-half">
											{user.self ? (
												<button
													type="button"
													className="button is-pulled-right is-info"
													onClick={() =>
														setEditMode(true)
													}>
													Edit
												</button>
											) : null}
											<h3 className="title is-4 has-text-dark mt-2 ml-10 has-text-centered">
												Profile
											</h3>
											<div className="columns is-multiline is-mobile">
												<div className="column is-half">
													<div className="field">
														<label className="label">
															First Name
														</label>
														<div className="control">
															<input
																className="input has-background-white"
																type="text"
																name="firstName"
																placeholder="First Name"
																value={
																	user.name
																		.firstName
																}
																disabled={
																	!editMode
																}
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
																className="input has-background-white"
																type="text"
																name="lastName"
																placeholder="Last Name"
																value={
																	user.name
																		.lastName
																}
																disabled={
																	!editMode
																}
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
																className="input has-background-white"
																type="email"
																name="email"
																placeholder="Email"
																value={
																	user.email
																}
																disabled={
																	!editMode
																}
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
																className="input has-background-white"
																type="tel"
																name="phoneNumber"
																pattern="[0-9]{10}"
																title="Invalid mobile number"
																placeholder="Mobile"
																value={
																	user.phoneNumber
																}
																disabled={
																	!editMode
																}
																required
															/>
														</div>
													</div>
												</div>

												{editPassword ? (
													<>
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
													</>
												) : null}
												{editMode ? (
													<div className="column is-full">
														<button
															className="button is-primary"
															onClick={() =>
																setEditPassword(
																	true
																)
															}>
															Change Password
														</button>
													</div>
												) : null}
												<div className="column is-half">
													<div className="field is-horizontal">
														<label className="label mt-2 mr-5">
															Role : {user.role}
														</label>
														{user.role ===
														"Trainee" ? (
															<div className="field-body">
																<button
																	type="button"
																	className="button is-info"
																	name="role"
																	value="Trainer">
																	Become a
																	Trainer
																</button>
															</div>
														) : null}
													</div>
												</div>
												{editMode ? (
													<>
														<div className="column">
															<div className="field">
																<p className="control">
																	<button
																		type="submit"
																		className="button is-primary is-rounded"
																		style={{
																			color: "#112031",
																		}}>
																		Update
																		Profile
																	</button>
																</p>
															</div>
														</div>
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
													</>
												) : null}
											</div>
										</div>
									</div>
								</form>
							) : (
								<div>No user found!!</div>
							)}
						</div>
					</div>
				</div>

				<div className="columns ">
					{videos.map((video) => (
						<CourseCard key={video._id} video={video} />
					))}
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
