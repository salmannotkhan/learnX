import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
	const token = req.cookies.jid;
	if (token) {
		try {
			const data = jwt.verify(token, process.env.JWT_SECRET);
			req.user = data;
			next();
		} catch (err) {
			console.log(err);
			return res.status(401).json({ error: "Unauthorized" });
		}
	} else {
		return res.status(401).json({ error: "Unauthorized" });
	}
};

export const isAdmin = (req, res, next) => {
	if (req.user) {
		if (req.user.role === "Admin") {
			return next();
		}
	}
	return res.status(401).json({ error: "Unauthorized" });
};
