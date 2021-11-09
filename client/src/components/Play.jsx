import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:1234");
export default function Play(props) {
	const videoElement = useRef();

	useEffect(() => {
		socket.on("play", () => {
			console.log("I'm playing");
		});
		return () => socket.close();
	}, []);
	return (
		<>
			<h1>We'll play here</h1>
			<video
				ref={videoElement}
				playsInline={true}
				autoPlay={true}></video>
		</>
	);
}
