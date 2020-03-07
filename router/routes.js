const express = require('express');
const uuid = require('uuid');

const api = express.Router();
const Todo = [];

api.get('/todo', function (req, res) {
  res.send({
    data: Todo
  });
});

api.get('/todo/:id', function (req, res) {
  const { id } = req.params;
  console.log('==============GET======================');
  console.log(req.params.id);
  console.log('==============GET======================');
  for (var i = 0; i < Todo.length; i++) {
    if (Todo[i].id == id) {
      res.send(Todo[i]);
      return;
    }
  }
  res.status(404).send({ message: 'item not found' });
});

api.post('/todo', function (req, res) {
  console.log('============POST========================');
  console.log(req.body);
  console.log('============POST========================');
  const obj = {
    id: uuid(),
    todo: req.body.todo,
    done: false,
    createdAt: new Date()
  };
  Todo.push(obj);
  res.send(obj);
});

api.put('/todo/:id', function (req, res) {
  const { id } = req.params;
  console.log('==============PUT======================');
  console.log(req.params.id);
  console.log(req.body);
  console.log('==============PUT======================');
  for (var i = 0; i < Todo.length; i++) {
    if (Todo[i].id == id) {
      const todo = { ...Todo[i] };
      todo['todo'] = req.body.todo;
      todo['done'] = req.body.done;
      todo['updatedAt'] = new Date();
      Todo.splice(i, 1, todo);
      res.send(todo);
      return;
    }
  }
  res.status(404).send({ message: 'item not found' });
});

api.delete('/todo/:id', function (req, res) {
  const { id } = req.params;
  console.log('==============DELETE======================');
  console.log(req.params.id);
  console.log('==============DELETE======================');
  let status = false;
  for (var i = 0; i < Todo.length; i++) {
    if (Todo[i].id == id) {
      Todo.splice(i, 1);
      status = true;
      break;
    }
  }
  if (status) {
    res.send({ message: 'successfully deleted!' });
  } else {
    res.status(404).send({ message: 'item not found' });
    // 404 not found
  }
});

module.exports = api;
