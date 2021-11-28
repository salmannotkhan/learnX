import axios from "axios";
import { useReducer } from "react";
import UploadVideoImage from "images/UploadVideo.jpg";
import { useNavigate } from "react-router";

const reducer = (state, action) => {
	const { name, value } = action;
	switch (name) {
		case "video":
			return { ...state, video: action.files[0] };
		case "thumbnail":
			return { ...state, thumbnail: action.files[0] };
		case "videoType":
			if (value === "Live")
				return { ...state, video: null, [name]: value };
			else return { ...state, [name]: value };
		case "premium":
			return { ...state, [name]: action.checked };
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
	thumbnail: null,
	premium: false,
	videoType: "",
};

function UploadVideo() {
	const [state, dispatch] = useReducer(reducer, initial);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = new FormData(e.target);
		await axios.post("/video", payload).then((data) => console.log(data));
		if (state.videoType === "Live") navigate("/user/instructions");
	};
	return (
		<div className="hero-body">
			<div className="column is-offset-1 is-four-fifths">
				<div className="box">
					<form onSubmit={handleSubmit} encType="multipart/form-data">
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
												Title
											</label>
											<div className="control">
												<input
													className="input"
													placeholder="Video Title"
													type="text"
													name="title"
													value={state.title}
													onChange={({ target }) =>
														dispatch(target)
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
													onChange={({ target }) =>
														dispatch(target)
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
														className="mr-3"
														name="audioLanguage"
														value="English"
														onClick={({ target }) =>
															dispatch(target)
														}
													/>
													English
												</label>

												<label className="radio">
													<input
														type="radio"
														className="mr-3"
														name="audioLanguage"
														value="Hindi"
														onClick={({ target }) =>
															dispatch(target)
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
													value={state.tags}
													onChange={({ target }) =>
														dispatch(target)
													}
												/>
											</div>
										</div>
									</div>
									<div className="column is-half">
										<div className="field">
											<label className="label">
												Type
											</label>
											<div className="control mt-4">
												<label className="radio">
													<input
														type="radio"
														className="mr-3"
														name="videoType"
														value="Upload"
														onClick={({ target }) =>
															dispatch(target)
														}
													/>
													Upload
												</label>

												<label className="radio">
													<input
														type="radio"
														className="mr-3"
														name="videoType"
														value="Live"
														onClick={({ target }) =>
															dispatch(target)
														}
													/>
													Live
												</label>
											</div>
										</div>
									</div>
									<div className="column is-half">
										<div className="field">
											<label className="label">
												Thumbnail
											</label>
											<div className="file is-boxed">
												<label className="file-label">
													<input
														className="file-input"
														type="file"
														name="thumbnail"
														accept="image/*"
														onChange={({
															target,
														}) => dispatch(target)}
													/>
													<span className="file-cta file-name">
														{state.thumbnail
															? state.thumbnail
																	.name
															: "Choose a file…"}
													</span>
												</label>
											</div>
										</div>
									</div>
									{state.videoType !== "Live" ? (
										<div className="column is-half">
											<div className="field">
												<label className="label">
													Video file
												</label>
												<div className="file is-boxed">
													<label className="file-label">
														<input
															className="file-input"
															type="file"
															name="video"
															accept="video/mp4"
															onChange={({
																target,
															}) =>
																dispatch(target)
															}
														/>
														<span className="file-cta file-name">
															{state.video
																? state.video
																		.name
																: "Choose a file…"}
														</span>
													</label>
												</div>
											</div>
										</div>
									) : null}

									<div className="column is-full">
										<div className="field">
											<label className="label">
												Premium
											</label>
											<div className="control">
												<label className="checkbox mt-4 mb-5">
													<input
														name="premium"
														onClick={({ target }) =>
															dispatch(target)
														}
														type="checkbox"
													/>{" "}
													Video is Premium
												</label>
											</div>
										</div>
									</div>
									<div className="column is-full">
										<div className="field">
											<p className="control">
												<button
													type="submit"
													className="button is-primary "
													style={{
														color: "#112031",
													}}>
													{state.videoType === "Live"
														? "Start streaming"
														: "Upload Video"}
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
	);
}

export default UploadVideo;
