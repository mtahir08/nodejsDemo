const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, unique: true, required: true },
    cagetory: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    picture: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
