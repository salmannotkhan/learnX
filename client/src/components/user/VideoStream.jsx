import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { VideoPlayer } from "./VideoPlayer";

export default function VideoStream() {
	const [video, setVideo] = useState();
	const playerRef = useRef(null);
	const { videoId } = useParams();

	const options = {
		controls: true,
		responsive: true,
		fluid: true,
		preload: "auto",
		poster: video ? video.thumbnailUrl : "",
		sources: [
			video
				? {
						src: video.videoUrl,
						type: video.isLive
							? "application/x-mpegURL"
							: "video/mp4",
				  }
				: null,
		],
		handleManifestRedirects: true,
	};

	const interect = (type, body) => {
		axios.post("/video/interaction", {
			videoId,
			type,
			body,
		});
	};
	useEffect(() => {
		axios.get(`/video/${videoId}`).then((resp) => setVideo(resp.data));
	}, [videoId]);
	const handlePlayerReady = (player) => {
		playerRef.current = player;
		player.on("waiting", () => {
			console.log("player is waiting");
		});

		player.on("dispose", () => {
			console.log("player will dispose");
		});
	};
	return (
		<div className="hero-body">
			{video ? (
				!video.error ? (
					<div className="column is-four-fifths">
						<div className="row">
							<VideoPlayer
								options={options}
								onReady={handlePlayerReady}
							/>
						</div>
						<div className="row m-4">
							<h4 className="title is-4">{video.title}</h4>
							<p className="subtitle">{video.totalViews} views</p>
							<p className="subtitle">
								{Object.values(video.uploadedBy.name).join(" ")}
							</p>
						</div>
						<div className="row m-4">
							<div className="field has-addons">
								<button
									className="button p-5 is-outlined is-inverted is-primary"
									onClick={() => interect("like")}>
									{video.totalLikes} Like
								</button>
								<button
									className="button p-5 is-outlined is-inverted is-primary"
									onClick={() => interect("dislike")}>
									{video.totalDislikes} Dislike
								</button>
							</div>
						</div>
					</div>
				) : (
					<div>{video.error}</div>
				)
			) : null}
			<div className="column"></div>
		</div>
	);
}
