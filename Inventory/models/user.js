const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], default: 'male' },
  dob: { type: String },
  picture: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
