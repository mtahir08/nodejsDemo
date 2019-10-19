const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], default: 'male' },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
