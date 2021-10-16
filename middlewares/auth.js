import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const isAuthenticated = (req, res, next) => {
	const token = req.cookies.jid;
	if (token) {
		try {
			const data = jwt.verify(token, process.env.JWT_SECRET);
			req.user = data;
			next();
		} catch (err) {
			console.log(err);
			return res.json({ error: "Unauthorized" });
		}
	} else {
		return res.json({ error: "Unauthorized" });
	}
};
