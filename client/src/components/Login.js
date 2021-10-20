import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../images/1.png";
import "bulma/css/bulma.min.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		const payload = new FormData(e.target);
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:1234/user/login");
		xhr.send(payload);
		xhr.addEventListener("loadend", () => console.log(xhr.response));
	};
	return (
		<div className="hero is-fullheight">
			<div className="columns is-vcentered">
				<div
					className="column is-three-quarters"
					style={{ margin: "auto", marginTop: 90 }}>
					<div className="box">
						<form
							style={{ backgroundColor: "#FFFFFF" }}
							onSubmit={(e) => handleLogin(e)}>
							<h3
								className="title is-4"
								style={{
									color: "#060325",
									textAlign: "center",
								}}>
								Welcome Back !! Login Here :)
							</h3>
							<div className="columns is-vcentered">
								<div className="column is-8">
									<figure className="image is-5by3">
										<img src={loginimg} alt="Error"></img>
									</figure>
								</div>
								<div className="column">
									<div className="columns is-vcentered">
										<div className="column is-11">
											<div className="field">
												<label
													className="label"
													style={{
														color: "#060325",
													}}>
													Username
												</label>
												<div className="control">
													<input
														className="input"
														type="text"
														placeholder="Email"
														name="email"
														value={email}
														onChange={(e) =>
															setEmail(
																e.target.value
															)
														}
														style={{
															backgroundColor:
																"transparent",
														}}></input>
												</div>
											</div>
										</div>
									</div>
									<div className="columns is-vcentered">
										<div className="column is-11">
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
														name="password"
														value={password}
														onChange={(e) =>
															setPassword(
																e.target.value
															)
														}
														style={{
															backgroundColor:
																"transparent",
														}}></input>
												</div>
											</div>
										</div>
									</div>
									<div className="columns is-vcentered">
										<div className="column is-12 has-text-vcenter">
											<div className="field is-grouped">
												<button
													className="button is-primary is-rounded mr-6"
													style={{
														color: "#112031",
														backgroundColor:
															"#FFFFF",
													}}>
													SignIn
												</button>
												<p className="control mt-2">
													<Link
														to="Register"
														style={{
															backgroundColor:
																"transparent",
															borderColor:
																"transparent",
															color: "#112031",
														}}>
														New User? Create Account
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
export default Login;
