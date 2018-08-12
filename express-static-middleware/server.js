// import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// initialize express app
let app = express();
const port = 3001;

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// static
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Routing
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, "public","index.html"));
  /**
   * If you don't set static folder, and send file directly from sendFile
   * then you could't get all files in static foler
   */

  res.sendFile('index.html');
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/add', (req, res) => {
  console.log('DATA RECEIVED FROM CLIENT', req.body);
  const obj = req.body;
  obj['message'] = 'Data received from client';
  res.send(obj);
});

// Starting server
app.listen(port, () => {
  console.log('server is running!!');
});
