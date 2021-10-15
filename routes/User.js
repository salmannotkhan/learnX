import { Router } from "express";
import User from "../models/User.js";

const userRouter = Router();

userRouter.post("/login", (req, res) => {
	res.send("Login route");
	// Some verification login
	const user = User.findOne({ username: "admin", password: "admin" });
	if (user) {
		res.send("Login Successful");
	}
	res.send("Invalid details");
});

userRouter.post("/signup", (req, res) => {
	const user = User.create(req.body);
	if (user) {
		console.log(user);
	}
	res.send("Signup route");
});

userRouter.get("/:userId", (req, res) => {
	const user = User.findById(req.params.userId);
	if (user) {
		res.send(user);
	}
	res.send({ error: "User not found :/" });
});

export default userRouter;
