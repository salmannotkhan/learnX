import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoPlayer = (props) => {
	const videoRef = useRef(null);
	const playerRef = useRef(null);
	const { options, onReady } = props;

	useEffect(() => {
		// make sure Video.js player is only initialized once
		if (!playerRef.current) {
			const videoElement = videoRef.current;
			if (!videoElement) return;

			const player = (playerRef.current = videojs(
				videoElement,
				options,
				() => {
					console.log("player is ready");
					onReady && onReady(player);
				}
			));
		} else {
			// you can update player here [update player through props]
			// const player = playerRef.current;
			// player.autoplay(options.autoplay);
			// player.src(options.sources);
		}
	}, [options, videoRef]);

	// Dispose the Video.js player when the functional component unmounts
	React.useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return (
		<div data-vjs-player>
			<video ref={videoRef} className="video-js vjs-big-play-centered" />
		</div>
	);
};
