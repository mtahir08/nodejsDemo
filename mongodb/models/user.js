
const mongoose = require("mongoose");
module.export = function () {
    const userSchema = mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        displayName: { type: String }
    });

    mongoose.model("User", userSchema);
}
/**
    const userSchema = mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        displayName: { type: String }
    });
    
    var User = mongoose.model("User", userSchema);
    module.exports = User
 */