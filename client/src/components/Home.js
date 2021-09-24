import React, { useEffect, useState } from "react";
import "react-dom";

export default function Home(props) {
	const [videoUrl, setVideoUrl] = useState("");
	useEffect(() => {
		const fetchVideo = async () => {
			const data = await fetch("http://localhost:1234");
			const response = await data.json();
			setVideoUrl(response.videoUrl);
		};
		fetchVideo();
	}, []);
	return <video src={videoUrl} controls={true}></video>;
}
