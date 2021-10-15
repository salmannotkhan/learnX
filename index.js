import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User.js";
import videoRouter from "./routes/Video.js";

const PORT = process.env.PORT || 1234;
const app = express();
dotenv.config();
app.use(cors());

app.use("/user", userRouter);
app.use("/video", videoRouter);

app.get("/", (_req, res) => {
	res.json({ hello: "world" });
});
const uri = process.env.MONGO_URI;

mongoose.connect(uri, () => {
	console.log("Database connected");
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
