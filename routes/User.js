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
			if (fields.password === user.password.at(-1)) {
				const token = jwt.sign(
					JSON.stringify(user),
					process.env.JWT_SECRET
				);
				res.setHeader("Set-Cookie", `jid=${token}; HttpOnly`);
				return res.json({ success: true, error: null });
			}
			return res.json({ success: false, error: "Wrong password" });
		}
		return res.json({ success: false, error: "User doesn't exists" });
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
				salutation: fields.salutation,
			};
			const user = await User.create(fields);
			const token = jwt.sign(
				JSON.stringify(user),
				process.env.JWT_SECRET
			);
			res.setHeader("Set-Cookie", `jid=${token}; HttpOnly`);
			return res.status(201).json({ success: true, error: null });
		} catch (err) {
			next(err);
		}
	});
});

userRouter.get("/logout", isAuthenticated, async (_req, res) => {
	res.setHeader("Set-Cookie", "jid=; HttpOnly");
	return res.json({ success: true, error: null });
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
