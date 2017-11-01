
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const userSchema = Schema({
    todo: { type: String, required: true },
    checked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
module.exports = User
