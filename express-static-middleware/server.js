// import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// initialize express app
let app = express();
const port = 3001;

// local variable
const todos = [];
// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Routing
app.get('/', (req, res) => {

  /**
   * If you don't set static folder, and send file directly from sendFile
   * then you could't get all files in static foler
   */

  res.sendFile('index.html');
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/todo', (req, res) => {
  console.log('DATA RECEIVED FROM CLIENT', req.body);
  const obj = req.body;
  obj['checked'] = false;
  obj['createdAt'] = new Date();
  todos.push({ obj });
  // obj['message'] = 'Data received from client';
  res.send(obj);
});

app.get('/todo', (req, res) => {
  res.send({ todos });
});

// Starting server
app.listen(port, () => {
  console.log('server is running!!');
});
