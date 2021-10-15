import mongoose from "mongoose";
const { Schema } = mongoose;

export const schemaOptions = {
	timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
};

const userSchema = new Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: [String],
			// select: false,
			required: true,
		},
		name: {
			salutation: {
				type: String,
				required: true,
			},
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true,
			},
		},
		subscription: {
			subscriptionId: {
				type: String,
			},
			plan: {
				type: String,
				enum: ["Gold", "Silver", "Bronze"],
			},
			startDate: {
				type: Date,
			},
		},
		phoneNumber: Number,
		role: {
			type: String,
			enum: ["Trainer", "Trainee", "Admin"],
			required: true,
		},
		approved: Boolean,
	},
	schemaOptions,
);

userSchema.virtual("fullName").get(function () {
	return (
		this.name.salutation +
		" " +
		this.name.firstName +
		" " +
		this.name.lastName
	);
});

const User = mongoose.model("user", userSchema);
export default User;
