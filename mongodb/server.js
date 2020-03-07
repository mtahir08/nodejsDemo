// import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// initialize express app
let app = express();
const port = 3001;
/**
 * Here we are importing our routes;
 */

require('./mongodb');
const routers = require('./routes.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/', (req, res) => {
  res.send({ message: 'success' });
});
app.use('/api',routers);

// Starting server
app.listen(port, () => {
  console.log('server is running!!');
});
//
