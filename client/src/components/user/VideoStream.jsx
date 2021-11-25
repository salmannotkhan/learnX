import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { VideoPlayer } from "./VideoPlayer";

export default function VideoStream() {
	const playerRef = useRef(null);
	const { videoId } = useParams();

	const options = {
		autoplay: true,
		controls: true,
		responsive: true,
		sources: [
			{
				src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
				type: "video/mp4",
			},
		],
	};
	useEffect(() => {
		console.log(videoId);
	}, []);
	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// you can handle player events here
		player.on("waiting", () => {
			console.log("player is waiting");
		});

		player.on("dispose", () => {
			console.log("player will dispose");
		});
	};
	return (
		<div>
			<VideoPlayer options={options} onReady={handlePlayerReady} />
		</div>
	);
}
