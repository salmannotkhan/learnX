import React, { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:1234");
export default function Stream(props) {
	const videoElement = useRef();

	useEffect(() => {
		socket.emit("stream", "hellow");
		// const peerConnection = new RTCPeerConnection({
		//     iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
		// });
		// navigator.mediaDevices
		//     .getUserMedia({ audio: false, video: true })
		//     .then((stream) => {
		//         videoElement.current.srcObject = stream;
		//     })
		//     .catch((err) => console.log(`Error occured ${err}`));
		return () => socket.close();
	}, []);
	return (
		<>
			<h1>We'll stream here</h1>
			<video
				ref={videoElement}
				playsInline={true}
				autoPlay={true}></video>
		</>
	);
}
