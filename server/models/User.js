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
			required: true,
		},
		name: {
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
				enum: ["Monthly", "Tri-Monthly", "Yearly"],
			},
			startDate: Date,
			endDate: Date,
		},
		phoneNumber: Number,
		role: {
			type: String,
			enum: ["Trainer", "Trainee", "Admin"],
			required: true,
		},
		approved: Boolean,
	},
	schemaOptions
);

userSchema.methods.verifyPassword = function (password) {
	const currentPassword = this.password.at(this.password.length - 1);
	return currentPassword === password;
};

userSchema.methods.toJSON = function () {
	var obj = this.toObject();
	delete obj.password;
	return obj;
};

const User = mongoose.model("User", userSchema);
export default User;
