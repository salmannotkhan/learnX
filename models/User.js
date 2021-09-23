import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
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
    isMember: {
        type: Boolean,
        default: false,
    },
    subscriptionId: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    isTrainer: {
        type: Boolean,
        required: true,
    },
});

export const User = mongoose.model("user", userSchema);
