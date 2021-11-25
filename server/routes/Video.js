import { Router } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Video from "../models/Video.js";
import formidable from "formidable";
import { isAuthenticated } from "../middlewares/auth.js";
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

vidoeRouter.post("/", isAuthenticated, async (req, res, next) => {
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
		const video = await Video.create({
			title: fields.title,
			category: fields.category,
			tags: fields.tags.split(" "),
			videoUrl: url,
			audioLanguage: fields.audioLanguage,
			uploadedBy: req.user._id,
		});
		res.json(video);
	});
});

vidoeRouter.delete("/:videoId", async (req, res) => {
	const video = await Video.findByIdAndDelete(req.params.videoId);
	if (video) {
		console.log(video);
	}
	res.send("Vidoe delete route " + req.params.videoId);
});

vidoeRouter.post("/explore", isAuthenticated, async (req, res) => {
	if (req.user.subscription) {
		const videos = await Video.find();
		return res.send(videos);
	}
	const videos = await Video.find({ isPremium: false });
	return res.send(videos);
});

export default vidoeRouter;
