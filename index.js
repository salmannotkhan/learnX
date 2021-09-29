import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Video } from "./models/Video.js";
import { User } from "./models/User.js";

const PORT = process.env.PORT || 1234;
const app = express();
const server = createServer(app);
const io = new Server(server);
dotenv.config();
app.use(cors());
io.use(cors());

app.get("/", (_req, res) => {
	res.json({
		name: "Someone",
		title: "Video Playback",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	});
});
const uri = process.env.MONGO_URI;

mongoose.connect(uri, () => {
	console.log("Database connected");
});

io.on("connection", (socket) => {
	console.log("User connected");
	socket.on("stream", (data) => {
		io.emit("play", data);
	});
	socket.on("disconnect", () => {
		console.log("User disconnected");
	});
});

server.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
