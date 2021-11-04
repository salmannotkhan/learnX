import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/User.js";
import videoRouter from "./routes/Video.js";
import cookieParser from "cookie-parser";
import internalRouter from "./routes/Internal.js";
import paymentRouter from "./routes/Payment.js";

const PORT = process.env.PORT || 1234;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use("/user", userRouter);
app.use("/internal", internalRouter);
app.use("/video", videoRouter);
app.use("/payment", paymentRouter);

app.get("/", (_req, res) => {
	res.json({ hello: "world" });
});

mongoose.connect(process.env.MONGO_URI, () => {
	console.log("Database connected");
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
