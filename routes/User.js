import { Router } from "express";
import formidable from "formidable";
import User from "../models/User.js";

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
				res.json({ success: true, error: null, userId: user.id });
				// TODO: JWT generation here
				return;
			}
			res.json({ success: false, error: "Wrong password" });
			return;
		}
		res.json({ success: false, error: "User doesn't exists" });
	});
});

userRouter.post("/signup", (req, res, next) => {
	const form = formidable(req);
	form.parse(req, async (err, fields) => {
		if (err) {
			next(err);
			return;
		}
		try {
			fields.name = {
				firstName: fields.firstName,
				lastName: fields.lastName,
				salutation: fields.salutation,
			};
			const user = await User.create(fields);
			res.json({ success: true, error: null });
			// TODO: JWT generation here
			return;
		} catch (err) {
			next(err);
		}
	});
});

userRouter.get("/:userId", async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		if (user) {
			res.json(user);
			return;
		}
		res.status(404).send({ error: "User not found :/" });
	} catch {
		res.status(404).send({ error: "Invalid User Id" });
	}
});

export default userRouter;
