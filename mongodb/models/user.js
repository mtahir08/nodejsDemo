const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], default: 'male' },
});

const Todo = mongoose.model('User', userSchema);
module.exports = Todo;
