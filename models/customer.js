const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 10,
    },
    photo_url: {
        type: String,
    },
    transdate: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    mob_notification: {
        type: Boolean,
        default: true,
    },
    // otp: {
    //     type: String,
    // },
    role: {
        type: String,
        enum: ["admin", "user","vendor"],
        default: "user",
    },
});

module.exports = mongoose.model("customer", customerSchema);
