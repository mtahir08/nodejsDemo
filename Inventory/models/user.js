const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], default: 'male' },
  role: { type: String, enum: ['S', 'A', 'SA'], default: 'S' },
  dob: { type: String },
  picture: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, minlength: 6, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
