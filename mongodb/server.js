// import modules
const express = require("express");
const path = require("path");

/**
 * Our app will need to post new guestbook entries in HTTP POST requests, 
 * so we'll need to parse the body of the POST; that's where body will come in
 */

const bodyParser = require("body-parser");

/**
 * Here we are importing our routes;
 */ 
require("./mongodb");
const routers = require("./routes.js");

// initialize express app
let app = express();
const port = 3001;
app.use(bodyParser.urlencoded({ extended: false })) 

app.use(routers);
// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
// 