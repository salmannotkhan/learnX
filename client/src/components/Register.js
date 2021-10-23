import React, { useState } from "react";
import RegisterUser from "../images/RegisterUser.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("Trainer");
	const [loading, setLoading] = useState(false);
	const handleChange = (e) => {
		switch (e.target.name) {
			case "firstName":
				setFirstName(e.target.value);
				break;
			case "lastName":
				setLastName(e.target.value);
				break;
			case "email":
				setEmail(e.target.value);
				break;
			case "phoneNumber":
				setPhoneNumber(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;
			case "role":
				setRole(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const payload = new FormData(e.target);
		const response = await axios.post("/user/signup", payload);
		console.log(response);
		setLoading(false);
	};

	return (
		<div className="hero-body">
			<div className="columns is-centered">
				<div className="column is-10">
					<div className="box">
						<form onSubmit={handleSubmit}>
							<h3 className="title is-4 has-text-centered">
								Hello Folks...! Register Here :)
							</h3>
							<div className="columns is-vcentered">
								<div className="column is-8">
									<figure className="image is-16by9">
										<img
											src={RegisterUser}
											alt="Register user banner"
										/>
									</figure>
								</div>
								<div className="column">
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
														value={firstName}
														onChange={(e) =>
															handleChange(e)
														}
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
														value={lastName}
														onChange={(e) =>
															handleChange(e)
														}
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
														value={email}
														onChange={(e) =>
															handleChange(e)
														}
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
														value={phoneNumber}
														pattern="[0-9]{10}"
														title="Invalid mobile number"
														onChange={(e) =>
															handleChange(e)
														}
														placeholder="Mobile"
														required
													/>
												</div>
											</div>
										</div>

										<div className="column is-half">
											<div className="field">
												<label className="label">
													Password
												</label>
												<div className="control">
													<input
														className="input"
														type="password"
														name="password"
														value={password}
														onChange={(e) =>
															handleChange(e)
														}
														placeholder="Password"
														required
													/>
												</div>
											</div>
										</div>
										<div className="column is-half">
											<div className="field">
												<label className="label">
													Confirm
												</label>
												<div className="control">
													<input
														className="input"
														type="password"
														onChange={(e) =>
															handleChange(e)
														}
														placeholder="Confirm Password"
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
													<label
														className={`button is-outlined ${
															role === "Trainer"
																? "is-primary is-light"
																: ""
														}`}>
														Trainer
														<input
															type="radio"
															className="is-hidden"
															name="role"
															value="Trainer"
															onClick={(e) =>
																handleChange(e)
															}
															defaultChecked
														/>
													</label>
													<label
														className={`button is-outlined ${
															role === "Trainee"
																? "is-primary is-light "
																: ""
														}`}>
														Trainee
														<input
															type="radio"
															name="role"
															className="is-hidden"
															onClick={(e) =>
																handleChange(e)
															}
															value="Trainee"
														/>
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className="columns">
										<div className="column is-12">
											<div className="field is-grouped">
												<p className="control">
													<button
														type="submit"
														className={`button is-primary is-rounded ${
															loading
																? "is-loading"
																: ""
														}`}
														style={{
															color: "#112031",
														}}>
														Register
													</button>
												</p>
												<p className="control mt-2">
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
export default Register;
