import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const createJWT = (payload) => {
	const token = jwt.sign(payload, process.env.JWT_SECRET);
	return token;
};

export const verifyJWT = (token) => {
	const data = jwt.verify(token, process.env.JWT_SECRET);
	return data;
};
