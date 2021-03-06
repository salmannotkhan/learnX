import { Router } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Video from "../models/Video.js";
import bodyParser from "body-parser";
import formidable from "formidable";
import { isAuthenticated } from "../middlewares/auth.js";
import fs from "fs";
const videoRouter = Router();

const jsonParser = bodyParser.json();
const s3Client = new S3Client({ region: process.env.AWS_REGION });

videoRouter.get("/:videoId", isAuthenticated, async (req, res) => {
	try {
		const video = await Video.findById(req.params.videoId).populate({
			path: "uploadedBy",
			select: "name email phoneNumber",
		});
		if (!video) {
			return res.status(404).send({ error: "Video not found" });
		}
		if (
			video.uploadedBy.toString() !== req.user._id ||
			!JSON.stringify(video.views).includes(req.user._id)
		) {
			video.views.push({ user: req.user._id });
			video.save();
		}
		return res.send(video.toJSON());
	} catch (err) {
		console.log(err);
		return res.send({ error: "Video not found" });
	}
});

videoRouter.post(
	"/interaction",
	isAuthenticated,
	jsonParser,
	async (req, res) => {
		try {
			const video = await Video.findById(req.body.videoId);
			if (!video) {
				return res.status(404).send({ error: "Invalid video ID" });
			}
			if (video.uploadedBy.toString() === req.user._id) {
				return res.send({
					status: "Failed",
					error: "Uploader can't interect with video",
				});
			}
			switch (req.body.type) {
				case "like":
					if (JSON.stringify(video.likes).includes(req.user._id)) {
						video.likes = video.likes.filter(
							(like) => like.user.toString() !== req.user._id
						);
					} else {
						video.dislikes = video.dislikes.filter(
							(dislike) =>
								dislike.user.toString() !== req.user._id
						);
						video.likes.push({ user: req.user._id });
					}
					break;
				case "dislike":
					if (JSON.stringify(video.dislikes).includes(req.user._id)) {
						video.dislikes = video.dislikes.filter(
							(dislike) =>
								dislike.user.toString() !== req.user._id
						);
					} else {
						video.likes = video.likes.filter(
							(like) => like.user.toString() !== req.user._id
						);
						video.dislikes.push({ user: req.user._id });
					}
					break;
			}
			video.save();
			return res.send({ status: "OK" });
		} catch (err) {
			console.log(err);
			return res.send({ error: "Video not found" });
		}
	}
);

videoRouter.post("/", isAuthenticated, async (req, res, next) => {
	const form = formidable();
	form.parse(req, async (err, fields, files) => {
		if (err) {
			next(err);
			return;
		}
		var url = "";
		const thumbStream = fs.createReadStream(files.thumbnail.path);
		const thumbParams = {
			Bucket: process.env.AWS_BUCKET,
			Key: files.thumbnail.name,
			Body: thumbStream,
			ACL: "public-read",
		};
		await s3Client.send(new PutObjectCommand(thumbParams));
		const thumbUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${files.thumbnail.name}`;
		if (fields.videoType === "Upload") {
			const fileStream = fs.createReadStream(files.video.path);
			const uploadParams = {
				Bucket: process.env.AWS_BUCKET,
				Key: files.video.name,
				Body: fileStream,
				ACL: "public-read",
			};
			const data = await s3Client.send(
				new PutObjectCommand(uploadParams)
			);
			url = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${files.video.name}`;
		} else {
			url =
				"https://d12w646u22p46b.cloudfront.net/out/v1/296370c01e4c4861b07f3c021e15753b/index.m3u8";
		}
		const video = await Video.create({
			title: fields.title,
			category: fields.category,
			tags: fields.tags.split(" "),
			isLive: fields.videoType === "Live",
			isPremium: fields.premium === "on",
			thumbnailUrl: thumbUrl,
			videoUrl: url,
			audioLanguage: fields.audioLanguage,
			uploadedBy: req.user._id,
		});
		res.json(video);
	});
});

videoRouter.delete("/:videoId", async (req, res) => {
	const video = await Video.findByIdAndDelete(req.params.videoId);
	if (video) {
		console.log(video);
	}
	res.send("Vidoe delete route " + req.params.videoId);
});

videoRouter.post("/explore", jsonParser, isAuthenticated, async (req, res) => {
	const filters = {};

	Object.entries(req.body).forEach(([key, value]) => {
		if (key !== "uploadedBy") {
			if (value !== "") {
				filters[key] = { $regex: value, $options: "i" };
			}
		}
	});
	if (!req.user.subscription) {
		filters["isPremium"] = false;
	}
	const videos = await Video.find(filters).populate({
		path: "uploadedBy",
		select: "name",
	});
	return res.send(videos);
});

export default videoRouter;
