import mongoose from "mongoose";
import { User, userSchema } from "./User.js";

const videoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	videoUrl: {
		type: String,
		required: true,
	},
	views: {
		type: Number,
		default: 0,
	},
	likes: {
		type: Number,
		default: 0,
	},
	dislikes: {
		type: Number,
		default: 0,
	},
	audioLanguage: {
		type: String,
		required: true,
	},
	isLive: {
		type: Boolean,
		default: false,
	},
	uploadedBy: userSchema,
	premium: {
		type: Boolean,
		default: false,
	},
});

export const Video = mongoose.model("video", videoSchema);

// *uploadedVideos*
// videoId
// category
// videoUrl
// views
// likes
// dislikes
// audioLanguage
// videoType(live/static)
// _uploadedBy(user)_
// premium(boolean)
