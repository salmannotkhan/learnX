import { raw, Router } from "express";
import { Stripe } from "stripe";
import formidable from "formidable";
import { isAuthenticated } from "../middlewares/auth.js";
import User from "../models/User.js";

const paymentRouter = Router();

paymentRouter.post("/checkout", isAuthenticated, async (req, res) => {
	const form = formidable();
	const stripe = Stripe(process.env.STRIPE_SECRET);
	form.parse(req, async (err, fields) => {
		var planPrice;
		switch (fields.plan) {
			case "monthly":
				planPrice = process.env.STRIPE_MONTHLY;
				break;
			case "tri-monthly":
				planPrice = process.env.STRIPE_TRIMONTHLY;
				break;
			case "yearly":
				planPrice = process.env.STRIPE_YEARLY;
				break;
			default:
				return res.json({ error: "Invalid plan" });
		}
		const session = await stripe.checkout.sessions.create({
			customer_email: req.user.email,
			billing_address_collection: "auto",
			line_items: [{ price: planPrice, quantity: 1 }],
			payment_method_types: ["card"],
			mode: "subscription",
			success_url: "http://localhost:3000/user/plan", // TODO: Modify afterwards if required
			cancel_url: "http://localhost:3000/user/plan",
		});
		res.redirect(303, session.url);
	});
});

paymentRouter.post(
	"/webhook",
	raw({ type: "application/json" }),
	async (req, res) => {
		const stripe = Stripe(process.env.STRIPE_SECRET);
		const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;
		const sig = req.headers["stripe-signature"];
		let event;
		try {
			event = stripe.webhooks.constructEvent(
				req.body,
				sig,
				endpointSecret
			);
		} catch (err) {
			res.status(400).send(`Webhook Error: ${err.message}`);
			return;
		}
		const [eventType, action] = event.type.split(".");
		if (eventType === "invoice") {
			switch (action) {
				case "payment_succeeded":
					const subscriptionId = event.data.object.subscription;
					const userEmail = event.data.object.customer_email;
					const subscription = await stripe.subscriptions.retrieve(
						subscriptionId
					);
					const startDate = new Date(
						subscription.current_period_start * 1000
					);
					const endDate = new Date(
						subscription.current_period_end * 1000
					);
					const plan = subscription.plan.nickname;
					const user = await User.findOne({ email: userEmail });
					user.subscription = {
						subscriptionId,
						plan,
						startDate,
						endDate,
					};
					await user.save();
					break;
				default:
					console.log(action);
			}
		}
	}
);

export default paymentRouter;
