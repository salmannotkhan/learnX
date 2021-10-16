import { Router } from "express";
import formidable from "formidable";
import { createJWT, verifyJWT } from "../helpers/jwt.js";
import { isAuthenticated } from "../middlewares/auth.js";
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
				const token = createJWT(JSON.stringify(user));
				res.setHeader("Set-Cookie", "jid=" + token);
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
			return;
		}
		try {
			fields.name = {
				firstName: fields.firstName,
				lastName: fields.lastName,
				salutation: fields.salutation,
			};
			const user = await User.create(fields);
			const token = createJWT(JSON.stringify(user));
			res.setHeader("Set-Cookie", "jid=" + token);
			return res.json({ success: true, error: null });
		} catch (err) {
			next(err);
		}
	});
});

userRouter.get("/logout", isAuthenticated, async (req, res) => {
	res.setHeader("Set-Cookie", "jid=");
	res.redirect("/");
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
