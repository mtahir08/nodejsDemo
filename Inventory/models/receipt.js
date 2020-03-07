const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    month: { type: String, required: true },
    year: { type: String },
    status: { type: String, enum: ['approved', 'pending', 'declined', 'not generated'], default: 'not generated' },
    sentBy: { type: Schema.Types.ObjectId, ref: "User" },
    sentAt: { type: Date, default: Date.now() },
    approvedBy: { type: Schema.Types.ObjectId, ref: "User" },
    approvedAt: { type: Date },
    picture: { type: String },
}, { timestamps: true });

const Receipt = mongoose.model('Receipt', receiptSchema);
module.exports = Receipt;
