import { Router } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Video from "../models/Video.js";
import formidable from "formidable";
import fs from "fs";
const vidoeRouter = Router();

const s3Client = new S3Client({ region: process.env.AWS_REGION });

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

vidoeRouter.post("/", async (req, res) => {
	const form = formidable();
	form.parse(req, async (err, fields, files) => {
		if (err) {
			next(err);
			return;
		}
		const fileStream = fs.createReadStream(files.video.path);
		const uploadParams = {
			Bucket: process.env.AWS_BUCKET,
			Key: files.video.name,
			Body: fileStream,
			ACL: "public-read",
		};
		const data = await s3Client.send(new PutObjectCommand(uploadParams));
		const url = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${files.video.name}`;
		res.json({ fields, files, url });
	});
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
