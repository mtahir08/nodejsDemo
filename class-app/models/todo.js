const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = Schema({
  text: { type: String, required: true },
  checked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;