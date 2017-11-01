
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const userSchema = Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: { type: String }
});

const User = mongoose.model("User", userSchema);
module.exports = User
