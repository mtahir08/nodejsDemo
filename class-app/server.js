// import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
// initialize express app
let app = express();
const port = process.env.PORT || 3001;
/**
 * Here we are importing our routes;
 */

require('./mongodb');
const Auth = require('./routes/Auth');
const Todo = require('./routes/Todo');
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

app.use('/api', Todo);
app.use('/auth', Auth);

// Starting server
app.listen(port, () => {
  console.log(`server is running on port ${port}!!`);
});
//
