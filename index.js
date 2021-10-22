import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User.js";
import videoRouter from "./routes/Video.js";
import cookieParser from "cookie-parser";
import internalRouter from "./routes/Internal.js";

dotenv.config();
const PORT = process.env.PORT || 1234;
const URI = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use("/user", userRouter);
app.use("/internal", internalRouter);
app.use("/video", videoRouter);

app.get("/", (_req, res) => {
	res.json({ hello: "world" });
});

mongoose.connect(URI, () => {
	console.log("Database connected");
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
