import axios from "axios";
import { useReducer } from "react";

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
		<div className="App" style={{ width: 300 }}>
			<form onSubmit={handleSubmit} encType="multipart/form-data">
				Title:{" "}
				<input
					type="text"
					name="title"
					value={state.title}
					onChange={({ target }) => dispatch(target)}
				/>
				<br />
				Category:
				<select
					name="category"
					onChange={({ target }) => dispatch(target)}>
					<option value="python">python</option>
					<option value="cpp">cpp</option>
					<option value="java">java</option>
					<option value="ruby">ruby</option>
					<option value="golang">golang</option>
				</select>
				<br />
				Audio Lang:
				<input
					type="radio"
					name="audioLanguage"
					value="English"
					onClick={({ target }) => dispatch(target)}
				/>
				English
				<input
					type="radio"
					name="audioLanguage"
					value="Hindi"
					onClick={({ target }) => dispatch(target)}
				/>
				Hindi <br />
				Tags:
				<input
					type="text"
					name="tags"
					value={state.tags}
					onChange={({ target }) => dispatch(target)}
				/>
				<input type="file" name="video" onChange={console.log} />
				<br />
				<button type="submit">Upload</button>
			</form>
		</div>
	);
}

export default UploadVideo;
