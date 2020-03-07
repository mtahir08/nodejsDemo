// import modules
const express = require('express');
const bodyParser = require('body-parser');

/**
 * Our app will need to post in HTTP POST requests,
 * so we'll need to parse the body of the POST; that's where body will come in
 */

/**
 * Here we are importing our routes;
 */
var apiRouter = require('./routes.js');
// initialize express app
let app = express();
const port = 3001;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(apiRouter);

// Starting server
app.listen(port, () => {
  console.log('server is running on port ', port);
});
//
