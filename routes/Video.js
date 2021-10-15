import { Router } from "express";
import Video from "../models/Video.js";
const vidoeRouter = Router();

vidoeRouter.get("/:videoId", async (req, res) => {
	try {
		const video = await Video.findById(req.params.videoId);
		if (video) {
			res.send(video);
		}
		res.send({ error: "Video not found" });
	} catch {
		res.send({ error: "Video not found" });
	}
});

vidoeRouter.post("/", (req, res) => {
	console.log(req.body);
	res.send("Vidoe add route");
});

vidoeRouter.delete("/:videoId", async (req, res) => {
	const video = await Video.findByIdAndDelete(req.params.videoId);
	if (video) {
		console.log(video);
	}
	res.send("Vidoe delete route " + req.params.videoId);
});

vidoeRouter.get("/", async (req, res) => {
	console.log(req.body);
	const videos = await Video.find();
	res.send(videos);
});

export default vidoeRouter;
