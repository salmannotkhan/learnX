import mongoose from "mongoose";
import { schemaOptions } from "./User.js";
const { Schema } = mongoose;

const reactionSchema = new Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		body: String,
	},
	schemaOptions
);

const videoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		tags: [String],
		thumbnailUrl: {
			type: String,
			required: true,
		},
		videoUrl: {
			type: String,
			required: true,
		},
		views: [reactionSchema],
		likes: [reactionSchema],
		dislikes: [reactionSchema],
		comments: [reactionSchema],
		audioLanguage: {
			type: String,
			required: true,
		},
		isLive: {
			type: Boolean,
			default: false,
		},
		uploadedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		isPremium: {
			type: Boolean,
			default: false,
		},
	},
	schemaOptions
);

videoSchema.virtual("totalLikes").get(function () {
	return this.likes.length;
});

videoSchema.virtual("totalDislikes").get(function () {
	return this.dislikes.length;
});

videoSchema.virtual("totalViews").get(function () {
	return this.views.length;
});

videoSchema.methods.toJSON = function () {
	var obj = this.toObject();
	obj.totalViews = obj.views.length;
	obj.totalLikes = obj.likes.length;
	obj.totalDislikes = obj.dislikes.length;
	delete obj.views;
	delete obj.likes;
	delete obj.dislikes;
	return obj;
};

const Video = mongoose.model("Video", videoSchema);
export default Video;
