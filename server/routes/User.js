import formidable from "formidable";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/login", async (req, res, next) => {
	const form = formidable();
	form.parse(req, async (err, fields) => {
		if (err) {
			next(err);
			return;
		}
		const user = await User.findOne({
			email: fields.email,
		});
		if (user) {
			if (user.verifyPassword(fields.password)) {
				const token = jwt.sign(
					JSON.stringify(user.toJSON()),
					process.env.JWT_SECRET
				);
				res.cookie("jid", token, { httpOnly: true });
				const resJson = { success: true, error: null };
				switch (user.role) {
					case "Admin":
						resJson["next"] = "/admin";
						break;
					default:
						resJson["next"] = "/user/course";
				}
				return res.json(resJson);
			}
			return res.json({
				success: false,
				type: "password",
				error: "Wrong password",
			});
		}
		return res.json({
			success: false,
			type: "email",
			error: "User doesn't exists",
		});
	});
});

userRouter.post("/signup", (req, res, next) => {
	const form = formidable(req);
	form.parse(req, async (err, fields) => {
		if (err) {
			next(err);
		}
		try {
			fields.name = {
				firstName: fields.firstName,
				lastName: fields.lastName,
			};
			const user = await User.create(fields);
			const token = jwt.sign(
				JSON.stringify(user.toJSON()),
				process.env.JWT_SECRET
			);
			res.cookie("jid", token, { httpOnly: true });
			return res.status(201).json({ success: true, error: null });
		} catch (err) {
			next(err);
		}
	});
});

userRouter.get("/logout", async (_req, res) => {
	res.clearCookie("jid");
	return res.json({ success: true, error: null });
});

userRouter.get("/current", isAuthenticated, (req, res) => {
	return res.json(req.user);
});

userRouter.get("/:userId", isAuthenticated, async (req, res) => {
	console.log(req.user);
	try {
		const user = await User.findById(req.params.userId);
		if (user) {
			return res.json(user);
		}
		res.status(404).send({ error: "User not found :/" });
	} catch {
		res.status(404).send({ error: "Invalid User Id" });
	}
});

export default userRouter;
