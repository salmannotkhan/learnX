import { Router } from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

const internalRouter = Router();

internalRouter.get("/stat", isAuthenticated, isAdmin, async (req, res) => {
	const trainers = await User.count({ role: "Trainer" });
	const trainees = await User.count({ role: "Trainee" });
	const videos = await Video.count();
	return res.json({ trainers, trainees, videos });
});

internalRouter.get("/trainers", isAuthenticated, isAdmin, async (req, res) => {
	const trainers = await User.find({ role: "Trainer" });
	return res.json(trainers);
});

internalRouter.get("/trainees", isAuthenticated, isAdmin, async (req, res) => {
	const trainees = await User.find({ role: "Trainee" });
	return res.json(trainees);
});

export default internalRouter;
