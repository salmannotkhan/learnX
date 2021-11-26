import axios from "axios";
import { useReducer } from "react";
import UploadVideoImage from "images/UploadVideo.jpg";

const reducer = (state, action) => {
	const { name, value } = action;
	switch (name) {
		case "video":
			return { ...state, video: action.files[0] };
		default:
			return { ...state, [name]: value };
	}
};

const initial = {
	title: "",
	category: "",
	audioLanguage: "",
	tags: "",
	video: null,
};

function UploadVideo() {
	const [state, dispatch] = useReducer(reducer, initial);
	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = new FormData(e.target);
		axios.post("/video", payload).then((data) => console.log(data));
	};
	return (
		<>
			<div className="App">
				<div className="hero-body">
					<div className="columns is-centered">
						<div className="column is-11">
							<div className="box">
								<form
									onSubmit={handleSubmit}
									encType="multipart/form-data">
									<div className="columns is-vcentered">
										<div className="column is-6">
											<figure className="image is-4by3">
												<img
													src={UploadVideoImage}
													alt="Upload Video banner"
												/>
											</figure>
										</div>
										<div className="column">
											<h3 className="title is-4 has-text-dark ml-10 has-text-centered">
												Add Video
											</h3>
											<div className="columns is-multiline is-mobile">
												<div className="column is-two-fifths">
													<div className="field">
														<label className="label">
															Title:{" "}
														</label>
														<div className="control">
															<input
																className="input"
																placeholder="Video Title"
																type="text"
																name="title"
																value={
																	state.title
																}
																onChange={({
																	target,
																}) =>
																	dispatch(
																		target
																	)
																}
															/>
														</div>
													</div>
												</div>
												<div className="column is-one-quarter">
													<div className="field">
														<label className="label">
															Category
														</label>

														<div className="select">
															<select
																name="category"
																onChange={({
																	target,
																}) =>
																	dispatch(
																		target
																	)
																}>
																<option value="python">
																	Python
																</option>
																<option value="cpp">
																	C++
																</option>
																<option value="java">
																	Java
																</option>
																<option value="ruby">
																	React
																</option>
																<option value="golang">
																	Node
																</option>
															</select>
														</div>
													</div>
												</div>

												<div className="column is-one-third">
													<div className="field">
														<label className="label">
															Audio
														</label>
														<div className="control mt-4">
															<label className="radio">
																<input
																	type="radio"
																	name="audioLanguage"
																	value="English"
																	onClick={({
																		target,
																	}) =>
																		dispatch(
																			target
																		)
																	}
																/>
																English
															</label>

															<label className="radio">
																<input
																	type="radio"
																	name="audioLanguage"
																	value="Hindi"
																	onClick={({
																		target,
																	}) =>
																		dispatch(
																			target
																		)
																	}
																/>
																Hindi
															</label>
														</div>
													</div>
												</div>
												<div className="column is-half">
													<div className="field">
														<label className="label">
															Tags
														</label>
														<div className="control">
															<input
																className="input"
																type="text"
																name="tags"
																placeholder="Tags"
																value={
																	state.tags
																}
																onChange={({
																	target,
																}) =>
																	dispatch(
																		target
																	)
																}
															/>
														</div>
													</div>
												</div>

												<div className="column">
													<div className="field">
														<label className="label">
															Add File
														</label>
														<div className="control">
															<div className="file">
																<label className="file-label">
																	<input
																		className="file-input"
																		type="file"
																		name="video"
																		onChange={({
																			target,
																		}) =>
																			dispatch(
																				target
																			)
																		}
																	/>
																	<span className="file-cta">
																		<span className="file-label">
																			Choose
																			a
																			file…
																		</span>
																	</span>
																</label>
															</div>
														</div>
													</div>
												</div>

												<div className="column is-half">
													<div className="field">
														<p className="control">
															<button
																type="submit"
																className="button is-primary "
																style={{
																	color: "#112031",
																}}>
																Upload Video
															</button>
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
			</div>
		</>
	);
}

export default UploadVideo;
